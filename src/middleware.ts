import { NextRequest, NextResponse } from "next/server";

const apexDomain = "syntheticmarketresearch.com";
const canonicalDomain = "www.syntheticmarketresearch.com";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.toLowerCase();

  if (host === apexDomain) {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.hostname = canonicalDomain;
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*"
};
