import { useState } from "react";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async (event) => {
    event.preventDefault();

    // Save to Google Sheets
    await fetch("/api/saveToGoogleSheets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    // Save to Mailchimp
    await fetch("/api/saveToMailchimp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    // Send Email with PDF Link
    // await fetch("/api/sendEmail", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ email }),
    // });

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (data.success) {
        alert("Check your email for the PDF download link!");
      } else {
        alert("Error sending email: " + data.error);
      }
    } catch (error) {
      console.error("Signup error:", error);
    }

    // Check response

    setMessage(
      "Signup successful! Check your email for the PDF. \n Make sure to check your spam/junk folder as well. \nHave fun!"
    );
  };

  return (
    <form onSubmit={handleSignup}>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Sign Up</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default SignupForm;
