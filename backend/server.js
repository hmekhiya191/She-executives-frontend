// server.js
import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import dns from "dns";

dotenv.config();
dns.setDefaultResultOrder("ipv4first"); // FORCE IPv4 for Gmail

const app = express();
console.log("🔥 BACKEND FILE IS RUNNING");

// ======= CORS =======
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:8080",
  "https://she-executives.netlify.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(null, true);
      }
    },
    methods: ["GET", "POST"],
  })
);

// ======= BODY PARSER =======
app.use(express.json());

// ======= MULTER =======
const upload = multer({ storage: multer.memoryStorage() });

// ======= NODEMAILER =======
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.warn("❌ EMAIL_USER or EMAIL_PASS not set in env variables");
}

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465, // SSL
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // 16-digit App Password
  },
});

// ======= VERIFY =======
transporter.verify((error) => {
  if (error) {
    console.log("❌ Email config error:", error);
  } else {
    console.log("✅ Email server is ready");
  }
});

// ======= TEST ROUTE =======
app.get("/", (req, res) => {
  res.send("API running ✅");
});

// ======= SEND EMAIL =======
app.post(
  "/send-email",
  upload.fields([
    { name: "attachment", maxCount: 1 },
    { name: "resume", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const {
        name,
        email,
        message,
        service,
        course,
        date,
        time,
        pledge,
        customSubject,
        company,
        amount,
      } = req.body;

      if (!name || !email) {
        return res.status(400).json({
          success: false,
          message: "Name and Email are required",
        });
      }

      // ======= ATTACHMENTS =======
      const attachments = [];
      if (req.files?.attachment?.[0]) {
        attachments.push({
          filename: req.files.attachment[0].originalname,
          content: req.files.attachment[0].buffer,
        });
      }
      if (req.files?.resume?.[0]) {
        attachments.push({
          filename: req.files.resume[0].originalname,
          content: req.files.resume[0].buffer,
        });
      }

      // ======= SUBJECT LOGIC =======
      let subject = "New Contact Request";
      if (service === "E-Learning" && course) {
        subject = `E-Learning Consultation Request for ${course} from ${name}`;
      } else if (service === "Other" && customSubject) {
        subject = `Custom Request: ${customSubject} from ${name}`;
      } else if (service === "Schedule a Free Consultation") {
        subject = `Consultation Booking Request from ${name}`;
      } else if (service === "She's Hired Campaign") {
        subject = `She's Hired Campaign Pledge from ${name}`;
      } else {
        subject = `${service || "General"} Request from ${name}`;
      }

      // ======= EMAIL HTML =======
      const html = `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; background:#f8fafc; padding:20px;">
          <h2>New Inquiry Received</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Company:</b> ${company || "N/A"}</p>
          <p><b>Service:</b> ${service || "N/A"}</p>
          ${course ? `<p><b>Course:</b> ${course}</p>` : ""}
          ${date || time ? `<p><b>Preferred Schedule:</b> ${date || "-"} ${time ? `at ${time}` : ""}</p>` : ""}
          ${pledge ? `<p><b>Pledge:</b> ${pledge}</p>` : ""}
          ${customSubject ? `<p><b>Custom Request:</b> ${customSubject}</p>` : ""}
          ${amount ? `<p><b>She's Hired Campaign Donation Amount:</b> $${amount}</p>` : ""}
          <p><b>Message:</b> ${message || "No message provided"}</p>
        </div>
      `;

      // ======= SEND EMAIL TO ADMIN =======
      await transporter.sendMail({
        from: `"She's Executives" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject,
        html,
        attachments,
      });

      // ======= AUTO REPLY =======
      await transporter.sendMail({
        from: `"She's Executives" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "We’ve received your request.",
        html: `<p>Hi ${name}, we got your request. Thanks for contacting us!</p>`,
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error("❌ FULL ERROR:", error);
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
);

// ======= START SERVER =======
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});