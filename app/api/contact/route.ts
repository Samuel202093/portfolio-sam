import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {

 const { name, lastname, email, subject, message } = await request.json();

  // Validate required fields
  if (!name || !lastname || !email || !subject || !message) {
    return NextResponse.json(
      { error: "All fields are required!!" },
      { status: 400 }
    );
  }

  // Create reusable transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.MAILER_PASSWORD,
    },
  });

  try {


    // HTML template
const htmlTemplate = `
  <div style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #ffffff; max-width: 600px; margin: 0 auto; border: 1px solid #333; border-radius: 12px; overflow: hidden; background-color: #141a1a;">
    <div style="padding: 30px 20px; text-align: center; border-bottom: 1px solid #333;">
      <h2 style="color: #ffffff; margin: 0; font-size: 22px; letter-spacing: 0.5px;">New Portfolio Message</h2>
    </div>
    
    <div style="padding: 30px;">
      <div style="margin-bottom: 25px;">
        <p style="color: #94a3b8; font-size: 14px; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 1px;">From</p>
        <p style="font-size: 18px; margin: 0; font-weight: 600;">${name} ${lastname}</p>
        <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none; font-size: 14px;">${email}</a>
      </div>

      <div style="margin-bottom: 25px;">
        <p style="color: #94a3b8; font-size: 14px; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 1px;">Subject</p>
        <p style="font-size: 16px; margin: 0;">${subject}</p>
      </div>
      
      <div style="margin-top: 30px; padding: 20px; background-color: rgba(255, 255, 255, 0.03); border: 1px solid #333; border-radius: 8px;">
        <p style="color: #94a3b8; font-size: 14px; margin-top: 0; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 1px;">Message Content</p>
        <div style="color: #e2e8f0; font-size: 16px; white-space: pre-wrap;">${message}</div>
      </div>
    </div>

    <div style="background-color: #0d1111; padding: 20px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #333;">
      <p style="margin: 0;">Sent from your Portfolio Contact Form</p>
    </div>
  </div>
`;

// Send email
await transporter.sendMail({
  from: process.env.EMAIL,
  replyTo: email,
  to: process.env.EMAIL,
  subject: `💼 Portfolio: ${subject} (${name})`,
  text: `Message from ${name}: ${message}`, 
  html: htmlTemplate, 
});

    return NextResponse.json(
      { success: "Email sent successfully!!!" },
      { status: 200 }
    );

  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again.!!!" },
      { status: 500 }
    );
  }
}
