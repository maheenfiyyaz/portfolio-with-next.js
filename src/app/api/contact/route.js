import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();
    console.log('Incoming Form Data:', data);

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      replyTo: data.email,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Contact Request: ${data.projectType}`,
      text: `
        Name: ${data.fullName}
        Email: ${data.email}
        Phone: ${data.phone}
        Project Type: ${data.projectType}
        Language: ${data.language}
        Budget: ${data.budget}
        Message: ${data.message}
      `,
    });

    return new Response(JSON.stringify({ message: "Message sent!" }), { status: 200 });
  } catch (err) {
    console.error("Email send failed:", err);
    return new Response(JSON.stringify({ message: "Failed to send" }), { status: 500 });
  }
}
