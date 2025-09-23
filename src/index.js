import express from "express";
import { config } from "dotenv";
import path from "path";
import nodemailer from "nodemailer";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { membershipRoute } from "./routes/member.route.js";
import { aboutRoute } from "./routes/about.route.js";
import { organizationRoute } from "./routes/organization.route.js";
import { ActivitiesAndNoticesRoute } from "./routes/activities_and_notices.route.js";

config();
const app = express();
const PORT = process.env.PORT || 8080;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(path.resolve(__dirname, ".."), "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware to parse request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route
app.post("/send_mail", async (req, res) => {
  try {
    const data = req.body;
    // Valdatations
    if (!data) return res.status(400).send({ error: "Form is Empty" });

    // Send Mail
    let transporter = nodemailer.createTransport({
      service: "gmail",
      port: 587,
      secure: false,
      auth: {
        user: "segmite.info@gmail.com", // your Gmail
        pass: process.env.GMAIL_APP_PASSWORD, // generated app password
      },
    });

    res.status(200).send();

    // mail options
    transporter.sendMail({
      from: `SEGMITE <${data?.email}>`, // sender address
      to: "segmite.info@gmail.com", // recipient
      subject: "Membership Form", // subject
      html: `<body style="width:100%;height:100%;margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%"><div lang="en" style="background-color:#f6f6f6;padding:20px"><table width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;height:100%;background-color:#f6f6f6"><tr><td valign="top" style="display:flex;justify-content:center"><table align="center" cellspacing="0" cellpadding="0" style="border-collapse:separate;background-color:#e5e0e0;width:100%;border-radius:10px;overflow:hidden;max-width:600px"><tr><td style="padding:0 0 20px 0"><table bgcolor="#6aa84f" align="center" cellspacing="0" cellpadding="0" style="border-collapse:collapse;background-color:#6aa84f;width:100%"><tr><td align="center" style="padding:30px 10px"><h3 style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:28px;line-height:34px;font-weight:700;color:#fff">SEGMITE (Form)</h3></td></tr></table></td></tr><tr><td style="padding:0 10px 5px 10px"><table bgcolor="#f6f6f6" align="center" cellspacing="0" cellpadding="0" style="border-collapse:separate;width:100%;border:1px solid #ccc;border-radius:10px"><tr><td style="padding:10px"><h3 style="margin:0;font-family:Arial,Helvetica,sans-serif;line-height:20px;color:#333">Name (Prof. Dr. Engr.)</h3><p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:21px;color:#333">${
        data?.fullname
      }</p></td></tr></table></td></tr><tr><td style="padding:0 10px 5px 10px"><table bgcolor="#f6f6f6" align="center" cellspacing="0" cellpadding="0" style="border-collapse:separate;width:100%;border:1px solid #ccc;border-radius:10px"><tr><td style="padding:10px"><h3 style="margin:0;font-family:Arial,Helvetica,sans-serif;line-height:20px;color:#333">Highest qualification</h3><p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:21px;color:#333">${data?.qualification}</p></td></tr></table></td></tr><tr><td style="padding:0 10px 5px 10px"><table bgcolor="#f6f6f6" align="center" cellspacing="0" cellpadding="0" style="border-collapse:separate;width:100%;border:1px solid #ccc;border-radius:10px"><tr><td style="padding:10px"><h3 style="margin:0;font-family:Arial,Helvetica,sans-serif;line-height:20px;color:#333">Specialization</h3><p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:21px;color:#333">${
        data?.specialization
      }</p></td></tr></table></td></tr><tr><td style="padding:0 10px 5px 10px"><table bgcolor="#f6f6f6" align="center" cellspacing="0" cellpadding="0" style="border-collapse:separate;width:100%;border:1px solid #ccc;border-radius:10px"><tr><td style="padding:10px"><h3 style="margin:0;font-family:Arial,Helvetica,sans-serif;line-height:20px;color:#333">Designation and organization</h3><p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:21px;color:#333">${data?.designation}</p></td></tr></table></td></tr><tr><td style="padding:0 10px 5px 10px"><table bgcolor="#f6f6f6" align="center" cellspacing="0" cellpadding="0" style="border-collapse:separate;width:100%;border:1px solid #ccc;border-radius:10px"><tr><td style="padding:10px"><h3 style="margin:0;font-family:Arial,Helvetica,sans-serif;line-height:20px;color:#333">Address</h3><p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:21px;color:#333">${
        data?.address
      }</p></td></tr></table></td></tr><tr><td style="padding:0 10px 5px 10px"><table bgcolor="#f6f6f6" align="center" cellspacing="0" cellpadding="0" style="border-collapse:separate;width:100%;border:1px solid #ccc;border-radius:10px"><tr><td style="padding:10px"><h3 style="margin:0;font-family:Arial,Helvetica,sans-serif;line-height:20px;color:#333">Email</h3><p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:21px;color:#333">${data?.email}</p></td></tr></table></td></tr><tr><td style="padding:0 10px 5px 10px"><table bgcolor="#f6f6f6" align="center" cellspacing="0" cellpadding="0" style="border-collapse:separate;width:100%;border:1px solid #ccc;border-radius:10px"><tr><td style="padding:10px"><h3 style="margin:0;font-family:Arial,Helvetica,sans-serif;line-height:20px;color:#333">Cell</h3><p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:21px;color:#333">${
        data?.cell
      }</p></td></tr></table></td></tr><tr><td style="padding:0 10px 5px 10px"><table bgcolor="#f6f6f6" align="center" cellspacing="0" cellpadding="0" style="border-collapse:separate;width:100%;border:1px solid #ccc;border-radius:10px"><tr><td style="padding:10px"><h3 style="margin:0;font-family:Arial,Helvetica,sans-serif;line-height:20px;color:#333">Tick the membership desired</h3><p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:21px;color:#333">${data?.membership}</p></td></tr></table></td></tr><tr><td style="padding:0 10px 5px 10px"><table bgcolor="#f6f6f6" align="center" cellspacing="0" cellpadding="0" style="border-collapse:separate;width:100%;border:1px solid #ccc;border-radius:10px"><tr><td style="padding:10px"><h3 style="margin:0;font-family:Arial,Helvetica,sans-serif;line-height:20px;color:#333">Fields applicable</h3><p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:21px;color:#333">${data?.fields.join(
        " 🔹 "
      )}</p></td></tr></table></td></tr><tr><td style="padding:0 10px 5px 10px"><table bgcolor="#f6f6f6" align="center" cellspacing="0" cellpadding="0" style="border-collapse:separate;width:100%;border:1px solid #ccc;border-radius:10px"><tr><td style="padding:10px"><h3 style="margin:0;font-family:Arial,Helvetica,sans-serif;line-height:20px;color:#333">Professional experience.</h3><p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:21px;color:#333">${data?.experience}</p></td></tr></table></td></tr><tr><td style="padding:0 10px 5px 10px"><table bgcolor="#f6f6f6" align="center" cellspacing="0" cellpadding="0" style="border-collapse:separate;width:100%;border:1px solid #ccc;border-radius:10px"><tr><td style="padding:10px"><h3 style="margin:0;font-family:Arial,Helvetica,sans-serif;line-height:20px;color:#333">Specific jobs to be done</h3><p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:21px;color:#333">${
        data?.jobs
      }</p></td></tr></table></td></tr><tr><td style="padding:10px 0"><table align="center" cellspacing="0" cellpadding="0" style="border-collapse:separate;width:100%"><tr><td align="center" style="padding:10px 20px"><a href="tel:${data?.cell}" target="_blank" style="text-decoration:none;color:#fff;font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:700;display:inline-block;padding:10px 20px;background:#6aa84f;border-radius:10px">Contact Member</a></td></tr></table></td></tr></table></td></tr></table></div></body>`,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ error: error });
  }
});
// Send Message
app.post("/send_message", async (req, res) => {
  const { fullname, email, subject, message } = req.body;
  // Send Mail
  let transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: false,
    auth: {
      user: "segmite.info@gmail.com", // your Gmail
      pass: process.env.GMAIL_APP_PASSWORD, // generated app password
    },
  });

  res.redirect("/");

  // mail options
  transporter.sendMail({
    from: `SEGMITE <${email}>`, // sender address
    to: "segmite.info@gmail.com", // recipient
    subject: "Message Form", // subject
    html: `
<body style="margin:0;padding:0;background-color:#f4f4f4;font-family:Arial, Helvetica, sans-serif;">
  <div style="max-width:600px;margin:20px auto;background:#ffffff;border:1px solid #ddd;border-radius:8px;overflow:hidden;">
    <div style="background:#6aa84f;color:#ffffff;padding:20px;text-align:center;">
      <h2 style="margin:0;">SEGMITE Contact Form</h2>
    </div>

    <div style="padding:20px;">
      <p style="margin-bottom:10px; padding: 6px; background: #eee"><strong>Full Name:</strong><br>${fullname}</p>
      <p style="margin-bottom:10px; padding: 6px; background: #eee"><strong>Email:</strong><br>${email}</p>
      <p style="margin-bottom:10px; padding: 6px; background: #eee"><strong>Subject:</strong><br>${subject}</p>
      <p style="margin-bottom:10px; padding: 6px; background: #eee"><strong>Message:</strong><br>${message.replace(/\n/g, "<br>")}</p>
    </div>

    <div style="padding:15px;background-color:#f4f4f4;text-align:center;font-size:12px;color:#888;">
      <p style="margin:0;">This message was sent from the SEGMITE contact form.</p>
    </div>
  </div>
</body>
`,
  });
});

app.get("/", (_, res) => res.render("main"));
app.use("/about", aboutRoute);
app.use("/membership", membershipRoute);
app.use("/organization", organizationRoute);
app.use("/activities-and-notices", ActivitiesAndNoticesRoute);
app.get("/activities", (_, res) => res.render("activities"));
app.get("/journals", (_, res) => res.render("download/journals"));
app.get("/past-events", (_, res) => res.render("past-events"));
app.get("/videos", (_, res) => res.render("download/videos"));
app.get("/publications", (_, res) => res.render("download/publications"));
app.get("/contact", (_, res) => res.render("contact"));

app.use((_, res) => {
  return res.status(404).send("<h1>Page Not Found</h1><a href='/'>Go Back</a>");
});

// Start server and log the port
app.listen(PORT, () => console.log(`🟢 Server is running on PORT:${PORT}`));
