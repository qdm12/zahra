function dateObjectToLocalDate(date: Date): string {
  const offset = date.getTimezoneOffset();
  date = new Date(date.getTime() + offset * 60 * 1000);
  return date.toISOString().split("T")[0];
}

function encodeBookingData(
  date: Date,
  localTime: string,
  numberOfGuests: number,
  name: string,
  email: string,
  phone: string,
  additionalInformation: string,
  language: string,
): string {
  const keyValues = [];
  keyValues.push(`date=${encodeURIComponent(dateObjectToLocalDate(date))}`);
  keyValues.push(`localTime=${encodeURIComponent(localTime)}`);
  keyValues.push(`numberOfGuests=${numberOfGuests}`);
  keyValues.push(`name=${encodeURIComponent(name)}`);
  keyValues.push(`email=${encodeURIComponent(email)}`);
  keyValues.push(`phone=${encodeURIComponent(phone)}`);
  keyValues.push(`additionalInformation=${encodeURIComponent(additionalInformation)}`);
  keyValues.push(`language=${encodeURIComponent(language)}`);
  return keyValues.join("&");
}

export default async function submitToGoogle(
  date: Date,
  localTime: string,
  numberOfGuests: number,
  name: string,
  email: string,
  phone: string,
  additionalInformation: string,
  language: string,
): Promise<void> {
  const queryString = encodeBookingData(
    date,
    localTime,
    numberOfGuests,
    name,
    email,
    phone,
    additionalInformation,
    language,
  );
  const scriptID = "AKfycbxMmJqzSDar5lys-xJgpOU1lrvEbBJmh7MD5ClgFbEzDUNji8JK";
  const url = `https://script.google.com/macros/s/${scriptID}/exec?${queryString}`;
  // This can throw an error
  const response = await fetch(url, { method: "GET" });
  const s = await response.text();
  if (!response.ok) {
    let errorStr = s;
    if (!s || s === "") {
      errorStr = response.statusText;
    }
    throw new Error(errorStr);
  } else if (s !== "success") {
    throw new Error(s);
  }
}
