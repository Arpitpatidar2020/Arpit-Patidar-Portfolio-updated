import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || GMAIL_USER;

if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
  console.error("❌ Missing Gmail credentials in .env");
  process.exit(1);
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_APP_PASSWORD,
  },
});

app.post("/api/contact", async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "Name, email and message are required." });
  }

  try {
    // 1️⃣ Mail to Admin (text)
    await transporter.sendMail({
      from: `${name} <${email}>`,
      to: ADMIN_EMAIL,
      subject: `New Contact Form: ${subject || "No subject"}`,
      text: `
New contact form submission:

Name: ${name}
Email: ${email}
Phone: ${phone}
Subject: ${subject}
Message:
${message}
      `,
    });

    // 2️⃣ Auto-reply to User (HTML)
    const userHTML = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; color: #333; line-height: 1.6; }
          .container { max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px; background-color: #fafafa; }
          .header { text-align: center; }
          .header h2 { color: #4CAF50; }
          .content { margin-top: 20px; }
          .summary { background: #f4f4f4; padding: 15px; border-radius: 5px; margin-top: 15px; }
          .summary p { margin: 5px 0; }
          .footer { margin-top: 20px; font-size: 0.9em; color: #777; }
          a { color: #4CAF50; text-decoration: none; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>Thank you for contacting me, ${name}!</h2>
          </div>
          <div class="content">
            <p>Hi ${name},</p>
            <p>Thank you for reaching out through my portfolio website. I’ve received your message and will get back to you as soon as possible.</p>

            <div class="summary">
              <h4>Here’s what you submitted:</h4>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Subject:</strong> ${subject}</p>
              <p><strong>Message:</strong></p>
              <p>${message}</p>
            </div>

            <p>In the meantime, feel free to explore my portfolio: <a href="https://arpitpatidar.netlify.app">https://arpitpatidar.netlify.app</a></p>

            <p>Thank you again for connecting. I truly appreciate your time and interest!</p>

            <p class="footer">Best regards,<br>Arpit Patidar</p>
          </div>
        </div>
      </body>
    </html>
    `;

    await transporter.sendMail({
      from: ADMIN_EMAIL,
      to: email,
      subject: "Thank you for contacting me!",
      html: userHTML,
    });

    res.status(200).json({ success: true, message: "Emails sent successfully!" });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    res.status(500).json({ success: false, message: "Error sending email." });
  }
});

// Health and root routes to prevent 404s on GET /
app.get("/", (req, res) => {
  res.status(200).send("Backend is running");
});

app.get("/favicon.ico", (req, res) => {
  res.status(204).end();
});

// Only start a server when not running on Vercel. On Vercel we export the app.
const PORT = process.env.PORT || 5000;
if (!process.env.VERCEL) {
  app.listen(PORT, () => console.log(`🚀 Backend running on http://localhost:${PORT}`));
}

export default app;
