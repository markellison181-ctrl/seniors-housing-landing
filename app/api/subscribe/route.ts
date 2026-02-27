import { NextResponse } from 'next/server';

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY || '';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    // Add contact to SendGrid with custom field for source
    const res = await fetch('https://api.sendgrid.com/v3/marketing/contacts', {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contacts: [
          {
            email: email.toLowerCase().trim(),
            custom_fields: {},
          },
        ],
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error('SendGrid error:', err);
      return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error('Subscribe error:', e);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

// GET endpoint to check subscribers (service use only)
export async function GET() {
  try {
    const res = await fetch('https://api.sendgrid.com/v3/marketing/contacts/count', {
      headers: { Authorization: `Bearer ${SENDGRID_API_KEY}` },
    });
    if (!res.ok) return NextResponse.json({ error: 'Failed' }, { status: 500 });
    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
