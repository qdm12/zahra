import { Menu, MenuSection, MenuDish, MenuSubsection } from "logic/models";
import jsYaml from "js-yaml";

interface Result {
  menu: Menu;
  // Format accepted by react-intl
  // Language code -> translation ID -> translation
  translations: Record<string, Record<string, string>>;
}

interface YMLTranslations {
  english: string;
  romanian: string;
}

interface YMLMenu {
  sections: YMLMenuSection[];
}

interface YMLMenuSection {
  name: YMLTranslations;
  subsections: YMLMenuSubsection[];
}

interface YMLMenuSubsection {
  name: YMLTranslations;
  dishes: YMLMenuDish[];
}

interface YMLMenuDish {
  name: YMLTranslations;
  description: YMLTranslations;
  price: number;
  quantity: string;
}

export async function fetchYML(rootURL: string): Promise<string> {
  const response = await fetch(`${rootURL}/data.yml`);
  return response.text();
}

function makeTranslationID(translations: YMLTranslations): string {
  return translations.english.toLowerCase().replace(" ", "-"); // feels easier to read in the source
}

// For lazy YML authors
function fillTranslationsFromLazyYMLTranslations(translations: YMLTranslations): YMLTranslations {
  if (!translations.english || translations.english.length === 0) {
    translations.english = translations.romanian;
  } else if (!translations.romanian || translations.romanian.length === 0) {
    translations.romanian = translations.english;
  }
  return translations;
}

export function parseYMLData(yml: string): Result {
  const ymlData: any = jsYaml.safeLoad(yml);
  if (!ymlData || !ymlData.menu) {
    throw Error("Data or menu does not exist");
  }
  const ymlMenu: YMLMenu = ymlData.menu;
  const result: Result = {
    menu: {
      sections: [],
    },
    translations: {
      en: {},
      ro: {},
    },
  };
  ymlMenu.sections.forEach((ymlSection) => {
    const translationID = makeTranslationID(ymlSection.name);
    ymlSection.name = fillTranslationsFromLazyYMLTranslations(ymlSection.name);
    result.translations["en"][translationID] = ymlSection.name.english;
    result.translations["ro"][translationID] = ymlSection.name.romanian;
    const section: MenuSection = {
      translationID: translationID,
      subsections: [],
    };
    ymlSection.subsections.forEach((ymlSubsection) => {
      const subsection: MenuSubsection = {
        translationID: "",
        dishes: [],
      };
      if (ymlSubsection.name) {
        const translationID = makeTranslationID(ymlSubsection.name);
        ymlSubsection.name = fillTranslationsFromLazyYMLTranslations(ymlSubsection.name);
        result.translations["en"][translationID] = ymlSubsection.name.english;
        result.translations["ro"][translationID] = ymlSubsection.name.romanian;
        subsection.translationID = translationID;
      }
      ymlSubsection.dishes.forEach((ymlDish) => {
        const dish: MenuDish = {
          nameTranslationID: "",
          descriptionTranslationID: "",
          price: ymlDish.price,
          quantity: ymlDish.quantity,
        };
        ymlDish.name = fillTranslationsFromLazyYMLTranslations(ymlDish.name);
        dish.nameTranslationID = makeTranslationID(ymlDish.name);
        result.translations["en"][dish.nameTranslationID] = ymlDish.name.english;
        result.translations["ro"][dish.nameTranslationID] = ymlDish.name.romanian;
        if (ymlDish.description && (ymlDish.description.english || ymlDish.description.romanian)) {
          ymlDish.description = fillTranslationsFromLazyYMLTranslations(ymlDish.description);
          dish.descriptionTranslationID = makeTranslationID(ymlDish.description);
          result.translations["en"][dish.descriptionTranslationID] = ymlDish.description.english;
          result.translations["ro"][dish.descriptionTranslationID] = ymlDish.description.romanian;
        }
        subsection.dishes.push(dish);
      });
      section.subsections.push(subsection);
    });
    result.menu.sections.push(section);
  });
  return result;
}
