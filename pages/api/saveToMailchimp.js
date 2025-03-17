import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX, // Example: "us1", "us20"
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { email } = req.body;
  console.log("📩 Email from saveToMailchimp:", email);

  if (!email) {
    return res.status(400).json({ error: "Email is required." });
  }

  try {
    // Generate subscriber hash
    const crypto = await import("crypto");
    const subscriberHash = crypto
      .createHash("md5")
      .update(email.toLowerCase())
      .digest("hex");

    // Check if the email already exists in the audience
    try {
      const existingUser = await mailchimp.lists.getListMember(
        process.env.MAILCHIMP_AUDIENCE_ID,
        subscriberHash
      );

      if (existingUser.status === "subscribed") {
        return res.status(200).json({ message: "Email already subscribed" });
      }

      // Update the status if user is unsubscribed
      await mailchimp.lists.updateListMember(
        process.env.MAILCHIMP_AUDIENCE_ID,
        subscriberHash,
        {
          status: "subscribed",
        }
      );

      return res
        .status(200)
        .json({ message: "Email re-subscribed successfully" });
    } catch (err) {
      // If email is not found, it throws an error which means we should add it
      if (err.status === 404) {
        console.log("📩 Email not found, adding new subscriber...");

        await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
          email_address: email,
          status: "subscribed",
        });

        return res.status(200).json({ message: "Email added to Mailchimp" });
      } else {
        console.error("❌ Mailchimp Error:", err);
        return res.status(500).json({ error: "Mailchimp API error" });
      }
    }
  } catch (error) {
    console.error("❌ Server Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
