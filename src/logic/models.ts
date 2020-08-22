export interface Menu {
  sections: MenuSection[];
}

export interface MenuSection {
  translationID: string;
  subsections: MenuSubsection[];
}

export interface MenuSubsection {
  translationID: string;
  dishes: MenuDish[];
}

export interface MenuDish {
  nameTranslationID: string;
  descriptionTranslationID: string;
  price: number;
  quantity: string;
}
