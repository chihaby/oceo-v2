import { google } from "googleapis";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { email, location } = req.body;
  const timestamp = new Date().toLocaleString();
  const SHEET_ID = process.env.GOOGLE_SHEET_ID;
  const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY);

  try {
    // Use location data sent from client
    const locationData = location
      ? `${location.city}, ${location.region}, ${location.country}`
      : "Unknown";

    console.log("Client location:", location);

    // Auth with Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: "Sheet1!A:D",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[email, locationData, location.ip, timestamp]],
      },
    });

    res.status(200).json({ message: "Email saved to Google Sheets" });
  } catch (error) {
    console.error("Error saving to Google Sheets:", error);
    res.status(500).json({ error: error.message });
  }
}
