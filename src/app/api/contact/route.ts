import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const form = await request.formData();
  const check = String(form.get("check") || "").trim();

  if (check !== "11") {
    return NextResponse.json({ ok: false, message: "Validation failed." }, { status: 400 });
  }

  return NextResponse.json({ ok: true, message: "Thanks. We will respond within one business day." });
}
