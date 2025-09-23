import { EmailTemplate } from '@/components/email-template';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);


export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;
    // console.log(body,"body")

    const data = await resend.emails.send({
  from: 'Contact Form <onboarding@resend.dev>', // ✅ works without domain verification
      to: 'sadafartsgraphy@gmail.com',                   // ✅ your own Gmail/Outlook etc.
      subject: 'New enquiry Form Website',
      react: EmailTemplate({ name, email, phone, message}),
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
