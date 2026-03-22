import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";

dotenv.config();

const app = express();
console.log("🔥 BACKEND FILE IS RUNNING");

/* ================= CORS ================= */
app.use(cors({
  origin: ["https://she-executives.netlify.app/"],
}));

const allowedOrigins = [
  "https://she-executives.netlify.app",
];

const cors = require("cors");

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(null, true); // temporary safe fix
      }
    },
    methods: ["GET", "POST"],
  })
);

/* ================= BODY PARSER ================= */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ================= PORT ================= */
const PORT = process.env.PORT || 5000;
console.log("Server will run on port:", PORT);

/* ================= MULTER ================= */
const upload = multer({ storage: multer.memoryStorage() });

/* ================= NODEMAILER ================= */
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.warn("❌ EMAIL_USER or EMAIL_PASS not set in env variables");
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/* ================= VERIFY ================= */
transporter.verify((error) => {
  if (error) {
    console.log("❌ Email config error:", error);
  } else {
    console.log("✅ Email server is ready");
  }
});

/* ================= TEST ROUTE ================= */
app.get("/", (req, res) => {
  res.send("API running ✅");
});

/* ================= CONTACT FORM ================= */
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

      /* ================= FILE ATTACHMENTS ================= */
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

      /* ================= SUBJECT ================= */
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

      /* ================= EMAIL HTML ================= */
      const html = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; background:#f8fafc; padding:30px 15px;">
        <div style="max-width:650px; margin:auto; background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 8px 25px rgba(0,0,0,0.08);">
          <div style="background:linear-gradient(135deg,#0ea5e9,#0284c7); padding:20px 24px;">
            <h2 style="color:white; margin:0; font-size:18px;">📩 New Inquiry Received</h2>
          </div>
          <div style="padding:28px;">
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Company:</b> ${company || "N/A"}</p>
            <p><b>Service:</b> ${service || "N/A"}</p>
            ${course ? `<p><b>Course:</b> ${course}</p>` : ""}
            ${
              date || time
                ? `<p><b>Preferred Schedule:</b> ${date || "-"} ${time ? `at ${time}` : ""}</p>`
                : ""
            }
            ${pledge ? `<p><b>Pledge:</b> ${pledge}</p>` : ""}
            ${customSubject ? `<p><b>Custom Request:</b> ${customSubject}</p>` : ""}
            ${amount ? `<p><b>She's Hired Campaign Donation Amount:</b> $${amount}</p>` : ""}
            <div style="margin-top:20px;">
              <p style="font-weight:600; margin-bottom:8px;">Message:</p>
              <div style="background:#f1f5f9; padding:14px; border-radius:8px; font-size:14px; color:#334155;">
                ${message || "No message provided"}
              </div>
            </div>
          </div>
          <div style="border-top:1px solid #e2e8f0; padding:14px 20px; text-align:center;">
            <p style="font-size:12px; color:#64748b; margin:0;">Sent from website contact form</p>
          </div>
        </div>
      </div>
      `;

      /* ================= SEND EMAIL ================= */
      await transporter.sendMail({
        from: `"She's Executives" <${process.env.EMAIL_USER}>`,
        replyTo: email,
        to: process.env.EMAIL_USER,
        subject,
        html,
        attachments,
      });

      /* ================= AUTO REPLY ================= */
      await transporter.sendMail({
        from: `"She's Executives" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "We’ve received your request.",
        html: `
          <div style="font-family: 'Segoe UI', Arial, sans-serif; background:#f8fafc; padding:40px 20px;">
            <div style="max-width:600px; margin:auto; background:white; border-radius:12px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,0.08);">
              <div style="background:linear-gradient(135deg,#0ea5e9,#0284c7); padding:20px; text-align:center;">
                <img src="https://she-executives.netlify.app/She-logo.png" alt="She's Executives" style="height:60px; object-fit:contain;" />
              </div>
              <div style="padding:32px;">
                <p>Hi <b>${name}</b>,</p>
                <p>Thanks for reaching out to <b>She's Executives</b>. We’ve received your request and it’s now in our team’s hands.</p>
                <p>We’ll review the details and get back to you shortly.</p>
                ${
                  service
                    ? `<p><b>Request:</b> ${service}</p>`
                    : ""
                }
                ${
                  course
                    ? `<p><b>Course:</b> ${course}</p>`
                    : ""
                }
                ${
                  date && time
                    ? `<p><b>Preferred time:</b> ${date} at ${time}</p>`
                    : ""
                }
                ${
                  amount
                    ? `<p>💙 Thank you for supporting the <b>She's Hired Campaign</b>.<br/>Your contribution of <b>$${amount}</b> is truly appreciated.</p>`
                    : ""
                }
                <p>If anything is time-sensitive, feel free to reply directly to this email.</p>
                <div style="text-align:center; margin:30px 0;">
                  <a href="https://sheexecutives.com" style="display:inline-block; padding:12px 26px; background:#0ea5e9; color:white; text-decoration:none; border-radius:8px;">Explore Our Site</a>
                </div>
                <p>Warm regards,<br/><b>Team She's Executives</b></p>
              </div>
            </div>
          </div>
        `,
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error("❌ FULL ERROR:", error);
      res.status(500).json({ success: false, message: error.message });
    }
  }
);

/* ================= START SERVER ================= */
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});