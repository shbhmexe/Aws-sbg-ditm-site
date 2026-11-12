import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);
}

export async function POST(request) {
  try {
    let payload;
    try {
      payload = await request.json();
    } catch {
      return NextResponse.json({ error: "Please send a valid message." }, { status: 400 });
    }

    const body = payload && typeof payload === "object" ? payload : {};
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const subject = typeof body.subject === "string" ? body.subject.replace(/[\r\n]+/g, " ").trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!name) {
      return NextResponse.json({ error: "Please enter your full name." }, { status: 400 });
    }
    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }
    if (!subject) {
      return NextResponse.json({ error: "Please enter a subject." }, { status: 400 });
    }
    if (!message) {
      return NextResponse.json({ error: "Please enter your message." }, { status: 400 });
    }
    if (name.length > 120 || email.length > 254 || subject.length > 200 || message.length > 10000) {
      return NextResponse.json({ error: "Please shorten your message and try again." }, { status: 400 });
    }

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || smtpUser;
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpSecure = process.env.SMTP_SECURE
      ? process.env.SMTP_SECURE === "true"
      : smtpPort === 465;

    if (!smtpUser || !smtpPass || !receiverEmail) {
      return NextResponse.json(
        { error: "The contact form is temporarily unavailable. Please email awssbgditm@gmail.com directly." },
        { status: 503 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: smtpPort,
      secure: smtpSecure,
      localAddress: process.env.SMTP_LOCAL_ADDRESS || undefined,
      auth: { user: smtpUser, pass: smtpPass },
    });

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message);

    await transporter.sendMail({
      from: { name: "AWS SBG DITM Website", address: smtpUser },
      to: receiverEmail,
      replyTo: email,
      subject: `[AWS SBG DITM Contact] ${subject}`,
      text: [
        "New contact message from the AWS SBG DITM website",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        "",
        message,
      ].join("\n"),
      html: `
        <div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;color:#e2e8f0;background:#0f172a;padding:24px;border-radius:12px">
          <h2 style="color:#00f584;margin-top:0">New AWS SBG DITM contact message</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> <a style="color:#00f584" href="mailto:${safeEmail}">${safeEmail}</a></p>
          <p><strong>Subject:</strong> ${safeSubject}</p>
          <hr style="border:0;border-top:1px solid #334155;margin:20px 0" />
          <p style="white-space:pre-wrap;line-height:1.6">${safeMessage}</p>
          <p style="color:#94a3b8;font-size:12px">Reply to this email to respond to the sender.</p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Thanks for reaching out! We'll get back to you soon.",
    });
  } catch (error) {
    console.error("[Contact API Error]:", error?.code || error?.name || "Unknown error");
    return NextResponse.json(
      { error: "Failed to send your message. Please try again later or email awssbgditm@gmail.com directly." },
      { status: 500 }
    );
  }
}
