import { google } from "googleapis";

export default async function handler(req, res) {
  // Add CORS headers if needed
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle OPTIONS preflight request
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    console.log("Received method:", req.method); // DEBUG
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  console.log("Request body:", req.body); // DEBUG

  const { email, location } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

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
