import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, website, budget, challenge } = body;

    if (!firstName || !lastName || !email || !website) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: "One Step Stronger Media <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL ?? "hello@onestepstronger.media"],
      subject: `New SEO Audit Request from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0d0d0d; color: #f5f5f5; padding: 32px; border-radius: 12px;">
          <div style="background: linear-gradient(135deg, #f97316, #ea580c); padding: 2px; border-radius: 8px; margin-bottom: 24px;">
            <div style="background: #111; padding: 16px 20px; border-radius: 7px;">
              <h1 style="margin: 0; font-size: 20px; color: #f97316;">One Step Stronger Media</h1>
              <p style="margin: 4px 0 0; color: #9ca3af; font-size: 13px;">New Audit Request</p>
            </div>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #222; color: #9ca3af; font-size: 13px; width: 140px;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #f5f5f5; font-size: 14px;">${firstName} ${lastName}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #222; color: #9ca3af; font-size: 13px;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #f5f5f5; font-size: 14px;"><a href="mailto:${email}" style="color: #f97316;">${email}</a></td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #222; color: #9ca3af; font-size: 13px;">Website</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #f5f5f5; font-size: 14px;"><a href="${website}" style="color: #3b82f6;">${website}</a></td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #222; color: #9ca3af; font-size: 13px;">Budget</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #f5f5f5; font-size: 14px;">${budget || "Not specified"}</td></tr>
            <tr><td style="padding: 10px 0; color: #9ca3af; font-size: 13px; vertical-align: top;">Challenge</td>
                <td style="padding: 10px 0; color: #f5f5f5; font-size: 14px;">${challenge || "Not specified"}</td></tr>
          </table>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Unexpected error." }, { status: 500 });
  }
}
