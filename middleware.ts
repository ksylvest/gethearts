import { NextRequest, NextResponse } from "next/server";

const APP_URL =
  "https://apps.apple.com/app/apple-store/id1512673045?pt=80402&ct=GetHearts&mt=8";

const FALLBACK_URL = "https://www.neverboredstudios.com/gethearts";

export function middleware(request: NextRequest) {
  if (request.url.includes("direct.gethearts.com")) return;

  const ua = request.headers.get("user-agent");

  if (
    ua?.includes("iPad;") ||
    ua?.includes("iPhone;") ||
    ua?.includes("iPod;") ||
    ua?.includes("Macintosh;")
  )
    return NextResponse.redirect(APP_URL);

  return NextResponse.redirect(FALLBACK_URL);
}
