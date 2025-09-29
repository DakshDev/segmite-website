import { Router } from "express";
import nodemailer from "nodemailer";

const router = Router();

// Route
router.post("/send_mail", async (req, res) => {
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
      html: `<body style="width:100%;height:100%;margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%"><div lang="en" style="background-color:#f6f6f6;padding:20px"><table width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;height:100%;background-color:#f6f6f6"><tr><td valign="top" style="display:flex;justify-content:center"><table align="center" cellspacing="0" cellpadding="0" style="border-collapse:separate;background-color:#e5e0e0;width:100%;border-radius:10px;overflow:hidden;max-width:600px"><tr><td style="padding:0 0 20px 0"><table bgcolor="#6aa84f" align="center" cellspacing="0" cellpadding="0" style="border-collapse:collapse;background-color:#85082b;width:100%"><tr><td align="center" style="padding:30px 10px"><h3 style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:28px;line-height:34px;font-weight:700;color:#fff">SEGMITE (Form)</h3></td></tr></table></td></tr><tr><td style="padding:0 10px 5px 10px"><table bgcolor="#f6f6f6" align="center" cellspacing="0" cellpadding="0" style="border-collapse:separate;width:100%;border:1px solid #ccc;border-radius:10px"><tr><td style="padding:10px"><h3 style="margin:0;font-family:Arial,Helvetica,sans-serif;line-height:20px;color:#333">Name (Prof. Dr. Engr.)</h3><p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:21px;color:#333">${
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
    console.error(error);
    return res.status(400).send({ error: error });
  }
});
// Send Message
router.post("/send_message", async (req, res) => {
  try {
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
  </body>`,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).send({ error: error });
  }
});

export { router as MailRoute };
