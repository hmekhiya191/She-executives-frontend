import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://your-netlify-site.netlify.app",
    ],
  })
);
app.use(express.json());

const PORT = process.env.PORT || 5000;

// ✅ Memory storage (NO uploads folder)
const upload = multer({ storage: multer.memoryStorage() });

// ✅ Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ✅ Verify transporter
transporter.verify((error) => {
  if (error) {
    console.log("❌ Email config error:", error);
  } else {
    console.log("✅ Email server is ready");
  }
});

// ✅ ROUTE
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

      // ✅ FILES
      const attachmentFile = req.files?.attachment?.[0];
      const resumeFile = req.files?.resume?.[0];

      // ✅ Build attachments (BUFFER based)
      const attachments = [];

      if (attachmentFile) {
        attachments.push({
          filename: attachmentFile.originalname,
          content: attachmentFile.buffer,
        });
      }

      if (resumeFile) {
        attachments.push({
          filename: resumeFile.originalname,
          content: resumeFile.buffer,
        });
      }

      // ✅ Validation
      if (!name || !email) {
        return res.status(400).json({
          success: false,
          message: "Name and Email are required",
        });
      }

      // ✅ Subject logic
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

      // ✅ Email HTML
      const html = `
  <div style="font-family: 'Segoe UI', Arial, sans-serif; background:#f8fafc; padding:30px 15px;">
    
    <div style="max-width:650px; margin:auto; background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 8px 25px rgba(0,0,0,0.08);">
      
      <!-- HEADER -->
      <div style="background:linear-gradient(135deg,#0ea5e9,#0284c7); padding:20px 24px;">
        <h2 style="color:white; margin:0; font-size:18px;">
          📩 New Inquiry Received
        </h2>
      </div>

      <!-- BODY -->
      <div style="padding:28px;">

        <!-- BASIC INFO -->
        <div style="margin-bottom:20px;">
          <p style="margin:6px 0;"><b>Name:</b> ${name}</p>
          <p style="margin:6px 0;"><b>Email:</b> ${email}</p>
          <p style="margin:6px 0;"><b>Company:</b> ${company || "N/A"}</p>
          <p style="margin:6px 0;"><b>Service:</b> ${service || "N/A"}</p>
        </div>

        <!-- CONDITIONAL INFO -->
        ${
          course
            ? `<p style="margin:6px 0;"><b>Course:</b> ${course}</p>`
            : ""
        }

        ${
          date || time
            ? `<p style="margin:6px 0;">
                <b>Preferred Schedule:</b> ${date || "-"} ${time ? `at ${time}` : ""}
              </p>`
            : ""
        }

        ${
          pledge
            ? `<p style="margin:6px 0;"><b>Pledge:</b> ${pledge}</p>`
            : ""
        }

        ${
          customSubject
            ? `<p style="margin:6px 0;"><b>Custom Request:</b> ${customSubject}</p>`
            : ""
        }

        ${amount ? `<p><b>She's Hired Campaign Donation Amount:</b> $${amount}</p>` : ""}

        <!-- MESSAGE -->
        <div style="margin-top:20px;">
          <p style="font-weight:600; margin-bottom:8px;">Message:</p>
          <div style="background:#f1f5f9; padding:14px; border-radius:8px; font-size:14px; color:#334155;">
            ${message || "No message provided"}
          </div>
        </div>

      </div>

      <!-- FOOTER -->
      <div style="border-top:1px solid #e2e8f0; padding:14px 20px; text-align:center;">
        <p style="font-size:12px; color:#64748b; margin:0;">
          Sent from website contact form
        </p>
      </div>

    </div>

  </div>
`;

      // ✅ Send email (WITH attachments)
      await transporter.sendMail({
        from: `"She's Executives" <${process.env.EMAIL_USER}>`,
        replyTo: email,
        to: process.env.EMAIL_USER,
        subject,
        html,
        attachments,
      });

      
      // ✅ Auto reply
await transporter.sendMail({
  from: `"She's Executives" <${process.env.EMAIL_USER}>`,
  to: email,
  subject: "We’ve received your request.",
  html: `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; background:#f8fafc; padding:40px 20px;">
      
      <div style="max-width:600px; margin:auto; background:white; border-radius:12px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,0.08);">
        
        <!-- HEADER -->
        <div style="background:linear-gradient(135deg,#0ea5e9,#0284c7); padding:20px; text-align:center;">
        
        <img 
            src="https://she-executives.vercel.app/She-logo.png"  
            alt="She's Executives"
            style="height:60px; object-fit:contain;"
        /> 

        </div>

        <!-- BODY -->
        <div style="padding:32px;">
          <p style="font-size:16px; color:#0f172a; margin-bottom:12px;">
            Hi <b>${name}</b>,
          </p>

          <p style="font-size:14px; color:#475569; line-height:1.7;">
            Thanks for reaching out to <b>She's Executives</b>. we’ve received your request and it’s now in our team’s hands.
          </p>

          <p style="font-size:14px; color:#475569; line-height:1.7;">
            We’ll review the details and get back to you with the next steps shortly.
          </p>

          ${
            service
              ? `<p style="font-size:14px; color:#475569; margin-top:16px;">
                  <b>Request:</b> ${service}
                </p>`
              : ""
          }

          ${
            course
              ? `<p style="font-size:14px; color:#475569;">
                  <b>Course:</b> ${course}
                </p>`
              : ""
          }

          ${
            date && time
              ? `<p style="font-size:14px; color:#475569;">
                  <b>Preferred time:</b> ${date} at ${time}
                </p>`
              : ""
          }

          ${
            amount
                ? `<p style="font-size:14px; color:#475569; margin-top:16px; line-height:1.7;">
                    💙 Thank you for supporting the <b>She's Hired Campaign</b>.
                    <br/>
                    Your contribution of <b>$${amount}</b> is truly appreciated.
                    <br/><br/>
                    Our team will share the invoice and confirmation details with you shortly.
                </p>`
                : ""
            }

          <p style="font-size:14px; color:#475569; margin-top:20px; line-height:1.7;">
            If anything is time-sensitive, feel free to reply directly to this email. we’ll make sure it’s prioritized.
          </p>

          <!-- CTA -->
          <div style="text-align:center; margin:30px 0;">
            <a href="https://sheexecutives.com" 
               style="display:inline-block; padding:12px 26px; background:#0ea5e9; color:white; text-decoration:none; border-radius:8px; font-size:14px; font-weight:500;">
              Explore Our SIte
            </a>
          </div>

          <p style="font-size:14px; color:#0f172a; margin-top:30px;">
            Warm regards,<br/>
            <b>Team She's Executives</b>
          </p>
        </div>

        <!-- SOCIAL -->
        <div style="text-align:center; padding:18px; border-top:1px solid #e2e8f0;">
          <p style="font-size:12px; color:#64748b; margin-bottom:10px;">
            Stay connected
          </p>

          <div>
            <a href="https://www.linkedin.com/company/she-executives/" style="margin:0 8px; color:#0ea5e9; text-decoration:none; font-size:13px;">
              LinkedIn
            </a>
            <a href="https://www.instagram.com/sheexecutives/" style="margin:0 8px; color:#0ea5e9; text-decoration:none; font-size:13px;">
              Instagram
            </a>
            <a href="https://www.facebook.com/Sheexecutives/" style="margin:0 8px; color:#0ea5e9; text-decoration:none; font-size:13px;">
              Facebook
            </a>
          </div>
        </div>

        <!-- FOOTER -->
        <div style="background:#f1f5f9; padding:14px; text-align:center; font-size:11px; color:#94a3b8;">
          © ${new Date().getFullYear()} She's Executives. All rights reserved.
        </div>

      </div>
    </div>
  `,
});
      res.status(200).json({ success: true });

    } catch (error) {
      console.error("❌ Error:", error);
      res.status(500).json({ success: false });
    }
  }
);

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});