import { handleContact } from "@/lib/contact-service";

export const runtime = "nodejs";
export const maxDuration = 30;
export const POST = (request: Request) => handleContact(request);
