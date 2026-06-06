import { NextResponse } from 'next/server';
import { practiceAreaItems } from '../../lib/site-data';

const practiceAreaTitles = new Set(practiceAreaItems.map((practiceArea) => practiceArea.title));

type ContactRequest = {
  email?: unknown;
  fullName?: unknown;
  message?: unknown;
  phone?: unknown;
  practiceArea?: unknown;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: ContactRequest;

  try {
    payload = (await request.json()) as ContactRequest;
  } catch {
    return NextResponse.json({ message: 'Please provide a valid enquiry.' }, { status: 400 });
  }

  const fullName = typeof payload.fullName === 'string' ? payload.fullName.trim() : '';
  const email = typeof payload.email === 'string' ? payload.email.trim() : '';
  const phone = typeof payload.phone === 'string' ? payload.phone.trim() : '';
  const practiceArea = typeof payload.practiceArea === 'string' ? payload.practiceArea.trim() : '';
  const message = typeof payload.message === 'string' ? payload.message.trim() : '';

  if (fullName.length < 2) {
    return NextResponse.json({ message: 'Please enter your full name.' }, { status: 400 });
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json({ message: 'Please provide a valid email address.' }, { status: 400 });
  }

  if (phone.length > 0 && phone.length < 7) {
    return NextResponse.json({ message: 'Please provide a valid phone number.' }, { status: 400 });
  }

  if (!practiceAreaTitles.has(practiceArea)) {
    return NextResponse.json({ message: 'Please select a valid practice area.' }, { status: 400 });
  }

  if (message.length < 20) {
    return NextResponse.json(
      { message: 'Please include a little more detail so we can understand your enquiry.' },
      { status: 400 },
    );
  }

  console.info('Legal Summit contact enquiry received', {
    fullName,
    email,
    phone,
    practiceArea,
    message,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({
    message: 'Thank you. Your consultation request has been received and our team will be in touch shortly.',
  });
}
