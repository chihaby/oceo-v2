import { google } from "googleapis";

export default async function handler(req, res) {
  // Add CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle OPTIONS preflight
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    console.log("=== Request received ===");
    console.log("Request body:", req.body);

    const { email, location } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    const timestamp = new Date().toLocaleString();

    // Check environment variables
    const SHEET_ID = process.env.GOOGLE_SHEET_ID;
    if (!SHEET_ID) {
      console.error("Missing GOOGLE_SHEET_ID");
      return res
        .status(500)
        .json({ error: "Server configuration error: Missing SHEET_ID" });
    }

    let credentials;
    try {
      credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY);
      console.log("Credentials parsed successfully");
    } catch (parseError) {
      console.error("Failed to parse credentials:", parseError);
      return res
        .status(500)
        .json({ error: "Server configuration error: Invalid credentials" });
    }

    // Use location data sent from client
    const locationData = location
      ? `${location.city}, ${location.region}, ${location.country}`
      : "Unknown";

    console.log("Client location:", locationData);

    // Auth with Google Sheets API
    console.log("Authenticating with Google...");
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    console.log("Attempting to append to sheet...");
    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: "Sheet1!A:D",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[email, locationData, location?.ip || "Unknown", timestamp]],
      },
    });

    console.log("Successfully saved to sheet");
    res.status(200).json({ message: "Email saved to Google Sheets" });
  } catch (error) {
    console.error("=== ERROR ===");
    console.error("Error type:", error.constructor.name);
    console.error("Error message:", error.message);
    console.error("Error stack:", error.stack);

    // Send a more detailed error response
    res.status(500).json({
      error: "Internal server error",
      details: error.message,
      type: error.constructor.name,
    });
  }
}
