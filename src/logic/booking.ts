export default async function submitToGoogle(
  date: Date,
  time: string,
  numberOfGuests: number,
  name: string,
  email: string,
  phone: string,
  additionalInformation: string,
): Promise<void> {
  const payload: Record<string, string> = {
    date: date.toISOString().split("T")[0],
    time: time,
    guests: numberOfGuests.toString(),
    name: name,
    email: email,
    phone: phone,
    message: additionalInformation,
  };
  const scriptID = "AKfycbxMmJqzSDar5lys-xJgpOU1lrvEbBJmh7MD5ClgFbEzDUNji8JK";
  // This can throw an error
  const response = await fetch(`https://script.google.com/macros/s/${scriptID}/exec`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
  const s = await response.text();
  if (!response.ok) {
    throw new Error(`cannot make booking (${s})`); // TODO translations
  } else if (s !== "success") {
    throw new Error(`cannot make booking (${s})`);
  }
}
