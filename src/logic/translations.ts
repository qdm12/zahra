export function detectBrowserLanguage(): string {
  const defaultLanguage = "en";
  const availableLanguages = ["en", "ro"];
  const language = navigator.language.split(/[-_]/)[0];
  if (availableLanguages.indexOf(language) === -1) {
    return defaultLanguage;
  }
  return language;
}

export function getAllTranslations(
  dynamicTranslations: Record<string, Record<string, string>>,
): Record<string, Record<string, string>> {
  const allTranslations: Record<string, Record<string, string>> = {
    en: {},
    ro: {},
  };
  for (const language in staticTranslations) {
    for (const id in staticTranslations[language]) {
      allTranslations[language][id] = staticTranslations[language][id];
    }
  }
  for (const language in dynamicTranslations) {
    for (const id in dynamicTranslations[language]) {
      allTranslations[language][id] = dynamicTranslations[language][id];
    }
  }
  return allTranslations;
}

const staticTranslations: Record<string, Record<string, string>> = {
  en: {
    Date: "Date",
    Time: "Time",
    NumberOfguests: "Number of guests",
    Name: "Name",
    Email: "Email address",
    Phone: "Phone number",
    AdditionalInformation: "Additional information",
    Submit: "Submit",
    Booking: "Booking",
  },
  ro: {
    Date: "Data",
    Time: "Ora",
    NumberOfguests: "Numar de persoane",
    Name: "Nume",
    Email: "Email address",
    Phone: "Telefon",
    AdditionalInformation: "Informatii aditionale",
    Submit: "Trimite",
    Booking: "Rezervare",
  },
};
