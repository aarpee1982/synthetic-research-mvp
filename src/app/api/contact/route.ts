import { NextResponse } from "next/server";

export async function POST() {
  // No delivery provider is configured. Never acknowledge an undelivered inquiry.
  return NextResponse.json({ ok: false, message: "Your message has not been sent. Please use /contact to prepare and send an inquiry from your email application." }, { status: 503 });
}
