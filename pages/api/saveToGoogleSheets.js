import { google } from "googleapis";
import credentials from "../../credentials/chiCredentials.json";

export default async function handler(req, res) {
  console.log(
    "APIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII route hit!"
  );
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { email } = req.body;
  const SHEET_ID = process.env.GOOGLE_SHEET_ID;
  console.log("Google Sheet ID:", process.env.GOOGLE_SHEET_ID);

  console.log("Received request to save email:", email);

  try {
    console.log("Authenticating with Google Sheets API...");
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    console.log("Creating Sheets API client...");
    const sheets = google.sheets({ version: "v4", auth });

    console.log("Appending data to Google Sheets...");
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: "Sheet1!A:A",
      valueInputOption: "USER_ENTERED",
      requestBody: { values: [[email]] },
    });

    console.log("Google Sheets API Response:", response.data);
    res.status(200).json({ message: "Email saved to Google Sheets" });
  } catch (error) {
    console.error("Error saving to Google Sheets:", error);
    res.status(500).json({ error: error.message });
  }
}
