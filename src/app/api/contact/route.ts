import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, phone, service, suburb, message } = data;

    // Check if environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return NextResponse.json(
        { error: "Email configuration is missing. Please set EMAIL_USER and EMAIL_PASS in .env.local" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1. Email to the admin (talhaxyz0@gmail.com)
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: "lumamails00@gmail.com",
      subject: `New Quote Request from ${name}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Suburb:</strong> ${suburb}</p>
        <p><strong>Service Requested:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message || "No message provided."}</p>
      `,
    };

    // 2. Thank you email to the user
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for contacting Fresh Green Gardening!",
      html: `
        <h2>Thank You, ${name}!</h2>
        <p>We have successfully received your quote request.</p>
        <p>Our team at Fresh Green Gardening will review your details and get back to you shortly.</p>
        <br/>
        <p><strong>Your Request Summary:</strong></p>
        <ul>
          <li>Service: ${service}</li>
          <li>Suburb: ${suburb}</li>
        </ul>
        <br/>
        <p>Best Regards,</p>
        <p><strong>Fresh Green Gardening Team</strong></p>
        <p>Phone: 0408 086 923</p>
      `,
    };

    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { error: "Failed to send email. " + error.message },
      { status: 500 }
    );
  }
}
