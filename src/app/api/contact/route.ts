import { NextResponse } from "next/server";

export async function POST() {
  // No delivery provider is configured. Never acknowledge an undelivered inquiry.
  return NextResponse.json({ ok: false, message: "Online submission is not configured. Please email hello@syntheticmarketresearch.com or prepare an email at /contact." }, { status: 503 });
}
