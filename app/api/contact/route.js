import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !name.trim()) {
      return NextResponse.json(
        { error: "Please enter your full name." },
        { status: 400 }
      );
    }

    if (!email || !email.trim()) {
      return NextResponse.json(
        { error: "Please enter your email address." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!subject || !subject.trim()) {
      return NextResponse.json(
        { error: "Please enter a subject." },
        { status: 400 }
      );
    }

    if (!message || !message.trim()) {
      return NextResponse.json(
        { error: "Please enter your message." },
        { status: 400 }
      );
    }

    // SMTP Configuration from environment variables
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = parseInt(process.env.SMTP_PORT || "465", 10);
    const smtpSecure = process.env.SMTP_SECURE === "false" ? false : true;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || smtpUser || "awssbgl@ditm.ac.in";

    // When SMTP credentials are not yet configured:
    // (Logs message gracefully and returns success so testing works without crashing)
    if (!smtpUser || !smtpPass) {
      console.log("-----------------------------------------");
      console.log("[AWS SBG Contact Form — New Message Received]");
      console.log(`From: ${name.trim()} <${email.trim()}>`);
      console.log(`Subject: ${subject.trim()}`);
      console.log(`Message: ${message.trim()}`);
      console.log(`Time: ${new Date().toISOString()}`);
      console.log("[Status: Pending SMTP Credentials in .env.local]");
      console.log("-----------------------------------------");

      return NextResponse.json({
        success: true,
        message: "Thanks for reaching out! We'll get back to you soon.",
      });
    }

    // Configure Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Formatted HTML Email Body for AWS SBG Chapter
    const mailOptions = {
      from: `"${name.trim()}" <${smtpUser}>`,
      to: receiverEmail,
      replyTo: email.trim(),
      subject: `[AWS SBG DITM Contact] ${subject.trim()}`,
      text: `New contact message from AWS Student Builder Group Website:\n\nName: ${name.trim()}\nEmail: ${email.trim()}\nSubject: ${subject.trim()}\n\nMessage:\n${message.trim()}\n\nSent on: ${new Date().toLocaleString()}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0b0f19; color: #f8fafc; margin: 0; padding: 24px; }
            .container { max-width: 600px; margin: 0 auto; background: #0f172a; border-radius: 12px; border: 1px solid rgba(0, 245, 132, 0.2); overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
            .header { background: linear-gradient(135deg, #022c22 0%, #064e3b 100%); padding: 28px 24px; border-bottom: 2px solid #00f584; }
            .header h1 { margin: 0; font-size: 20px; color: #ffffff; letter-spacing: -0.02em; }
            .header p { margin: 6px 0 0 0; color: #a7f3d0; font-size: 13px; }
            .content { padding: 24px; }
            .meta-box { background: #020617; border: 1px solid #1e293b; border-radius: 8px; padding: 16px; margin-bottom: 20px; }
            .meta-row { display: flex; margin-bottom: 8px; font-size: 14px; }
            .meta-row:last-child { margin-bottom: 0; }
            .meta-label { width: 90px; color: #94a3b8; font-weight: 600; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; }
            .meta-val { color: #f8fafc; font-weight: 500; }
            .meta-val a { color: #00f584; text-decoration: none; }
            .msg-heading { font-size: 13px; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 10px 0; font-weight: 700; }
            .message-box { background: #020617; border-left: 3px solid #00f584; padding: 16px; border-radius: 0 8px 8px 0; font-size: 15px; line-height: 1.6; color: #e2e8f0; white-space: pre-wrap; }
            .footer { padding: 16px 24px; background: #020617; border-top: 1px solid #1e293b; font-size: 12px; color: #64748b; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Message Received</h1>
              <p>AWS Student Builder Group — Delhi Institute of Technology &amp; Management</p>
            </div>
            <div class="content">
              <div class="meta-box">
                <div class="meta-row">
                  <span class="meta-label">From:</span>
                  <span class="meta-val"><strong>${name.trim()}</strong></span>
                </div>
                <div class="meta-row">
                  <span class="meta-label">Email:</span>
                  <span class="meta-val"><a href="mailto:${email.trim()}">${email.trim()}</a></span>
                </div>
                <div class="meta-row">
                  <span class="meta-label">Subject:</span>
                  <span class="meta-val">${subject.trim()}</span>
                </div>
              </div>
              <div class="msg-heading">Message Body</div>
              <div class="message-box">${message.trim()}</div>
            </div>
            <div class="footer">
              Direct reply to this email will respond directly to <strong>${email.trim()}</strong>.
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send email via SMTP
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Thanks for reaching out! We'll get back to you soon.",
    });
  } catch (error) {
    console.error("[Contact API Error]:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later or email us directly at awssbgl@ditm.ac.in." },
      { status: 500 }
    );
  }
}

