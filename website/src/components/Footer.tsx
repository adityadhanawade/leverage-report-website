import Link from "next/link";
import { navLinks, site } from "@/lib/site";
import { Container } from "./Container";
import { EmailSignup } from "./EmailSignup";
import { InstagramIcon } from "./Icons";

/**
 * Site footer — Phase 4 spec: email signup lives here so it appears on every
 * page without ever getting in the way of the tools.
 */
export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-surface">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <EmailSignup />

          <div className="flex flex-col gap-6 md:items-end">
            <nav aria-label="Footer">
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {[...navLinks, { href: "/about", label: "About" }].map(
                  (link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="font-sans text-[15px] text-muted transition-colors duration-150 hover:text-accent"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </nav>

            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-[15px] text-ink transition-colors duration-150 hover:text-accent"
            >
              <InstagramIcon className="h-5 w-5" />
              {site.instagramHandle}
            </a>
          </div>
        </div>

        <p className="mt-10 border-t border-border pt-6 font-sans text-[13px] text-muted">
          {site.name} — {site.tagline}
        </p>
      </Container>
    </footer>
  );
}
