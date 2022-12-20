import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { links } from "./constants";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  const socialSlug = req.nextUrl.pathname.split("/").pop();

  if (socialSlug === undefined) return;

  const socialFetch = links.find(
    (link) => link.slug === socialSlug.toLocaleLowerCase()
  );

  if (socialFetch === undefined) return;
  return NextResponse.redirect(socialFetch.url);
}
