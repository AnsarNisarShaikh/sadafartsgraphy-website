import { EmailTemplate } from '@/components/email-template';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', 
      to: process.env.NEXT_PUBLIC_EMAIL_TO,                
      subject: 'New enquiry From Website Contact Form',
      react: EmailTemplate({ name, email, phone, message}),
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
