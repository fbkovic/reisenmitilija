import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { vorname, name, telefon, email, zustimmung } = await req.json();

  if (!vorname || !name || !telefon || !zustimmung) {
    return NextResponse.json(
      { error: "Pflichtfelder fehlen." },
      { status: 400 }
    );
  }

  const text = `
Neue Kontaktanfrage über reisenmitilija.at

Vorname: ${vorname}
Name: ${name}
Telefon: ${telefon}
E-Mail: ${email || "–"}
Datenschutz zugestimmt: Ja
  `.trim();

  try {
    await resend.emails.send({
      from: "Reisen mit Ilja <onboarding@resend.dev>",
      to: "ilija.reisen@yahoo.com",
      subject: `Neue Anfrage von ${vorname} ${name}`,
      text,
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "E-Mail konnte nicht gesendet werden." },
      { status: 500 }
    );
  }
}
