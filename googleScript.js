function sanitizeHTML(s) {
  const placeholder = HtmlService.createHtmlOutput(" ");
  placeholder.appendUntrusted(s);
  return placeholder.getContent();
}

function formatInternalEmailBodyLine(key, value) {
  return `<div>
      <span style='font-weight: bold; margin-bottom: 2px'>
        ${key}:
      </span>
      <span style='margin-bottom: 15px'>
        ${sanitizeHTML(value)}
      </span>
    </div>`;
}

function formatInternalMail(parameters) {
  const lines = [
    formatInternalEmailBodyLine("Data", parameters.date),
    formatInternalEmailBodyLine("Timp (ora locala)", parameters.localTime),
    formatInternalEmailBodyLine("Numărul de oaspeți", parameters.numberOfGuests),
    formatInternalEmailBodyLine("Nume", parameters.name),
    formatInternalEmailBodyLine("Email", parameters.email),
  ];
  if (parameters.phone) {
    formatInternalEmailBodyLine("Telefon", parameters.phone);
  }
  if (parameters.additionalInformation) {
    formatInternalEmailBodyLine("Mesaj", parameters.additionalInformation);
  }
  return lines.join("");
}

function addRecordToSpreadsheet(parameters) {
  const doc = SpreadsheetApp.openByUrl(
    "https://docs.google.com/spreadsheets/d/1V0cjNexIPfT-YqbYUsUtx-fDWoOWx3PmMcJh_QRtIx4/edit",
  );
  const sheet = doc.getSheetByName("bookings");
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  const nextRow = sheet.getLastRow() + 1;
  // first element in the row should always be a timestamp
  const row = [new Date().toLocaleString("ro-RO", { timeZone: "Europe/Bucharest" })];
  for (let i = 1; i < headers.length; i++) {
    switch (headers[i]) {
      case "":
        continue;
      case "date":
        row.push(parameters.date);
        break;
      case "time":
        row.push(parameters.localTime);
        break;
      case "guests":
        row.push(parameters.numberOfGuests);
        break;
      case "name":
        row.push(parameters.name);
        break;
      case "email":
        row.push(parameters.email);
        break;
      case "phone":
        row.push(parameters.phone);
        break;
      case "message":
        row.push(parameters.additionalInformation);
        break;
      default:
        console.error("Spreadsheet column not recognized: " + headers[i]);
        break;
    }
  }
  // more efficient to set values as [][] array than individually
  sheet.getRange(nextRow, 1, 1, row.length).setValues([row]);
}

const translations = {
  ro: {
    incomplete: "Datele de rezervare trimise lipsesc unele informații",
    spreadsheetError: "nu poate înregistra datele de rezervare",
    emailError: "nu poate trimite un e-mail de rezervare intern",
  },
  en: {
    incomplete: "booking data submitted is missing some information",
    spreadsheetError: "cannot record booking data",
    emailError: "cannot send internal booking email",
  },
};

// Function called when receiving a GET request
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function doGet(e) {
  const parameters = e.parameter;
  let messages = translations.en;
  if (parameters.language && parameters.language === "ro") {
    messages = translations.ro;
  }

  if (
    parameters.date === undefined ||
    parameters.localTime === undefined ||
    parameters.numberOfGuests === undefined ||
    parameters.name === undefined ||
    parameters.email === undefined ||
    parameters.phone === undefined ||
    parameters.additionalInformation === undefined ||
    parameters.language === undefined
  ) {
    console.warn("incomplete parameters: " + parameters);
    return ContentService.createTextOutput(messages.incomplete);
  }
  try {
    addRecordToSpreadsheet(parameters);
  } catch (e) {
    console.error(e);
    return ContentService.createTextOutput(messages.spreadsheetError);
  }
  const currentLocalTime = new Date().toLocaleString("ro-RO", { timeZone: "Europe/Bucharest" });
  try {
    MailApp.sendEmail({
      to: "culinartrestaurant@gmail.com",
      subject: `Rezervare noua (trimisa la ${currentLocalTime})`,
      replyTo: parameters.email,
      htmlBody: formatInternalMail(parameters),
    });
    // TODO send to data.email as well
  } catch (e) {
    console.error(e);
    return ContentService.createTextOutput(messages.emailError);
  }
  return ContentService.createTextOutput("success"); // internally processed by frontend
}
