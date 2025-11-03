import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    // 1. Extract the form data from the request
    const body = await request.json();
    const { name, phone, email, message } = body;

    // 2. Send the email using Resend
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // This must be a verified domain (or 'onboarding@resend.dev' for testing)
      to: process.env.MY_PERSONAL_EMAIL, // <-- CHANGE THIS to your email
      subject: `New Message from ${name} (Your Website)`,
      reply_to: email, // Set the reply-to field to the user's email
      html: `
        <div>
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
    });

    // 3. Handle any errors from Resend
    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ message: "Error sending email", error }, { status: 500 });
    }

    // 4. Send a success response
    return NextResponse.json({ message: "Email sent successfully!", data }, { status: 200 });

  } catch (error) {
    // Handle other errors (e.g., failed to parse request)
    console.error("API route error:", error);
    return NextResponse.json({ message: "Internal server error", error }, { status: 500 });
  }
}