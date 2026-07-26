"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/site";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { MenuIcon, CloseIcon } from "./Icons";

/**
 * Site header. Phase 4 spec: logo always links home; on mobile the links
 * collapse into a ☰ menu, on desktop they sit inline.
 */
export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [lastPathname, setLastPathname] = useState(pathname);

  // Close the menu the moment the route changes, so it never covers the new
  // page. Compared during render (not in a useEffect) — the React-recommended
  // shape for "adjust state when a prop changes" without an extra render pass.
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-sm">
      <Container>
        <div className="flex h-14 items-center justify-between md:h-16">
          <Logo />

          {/* Desktop nav */}
          <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-[15px] text-muted transition-colors duration-150 hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="-mr-2 rounded-control p-2 text-ink transition-colors duration-150 hover:text-accent md:hidden"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Main"
          className="border-t border-border bg-background md:hidden"
        >
          <Container>
            <ul className="flex flex-col py-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-3 font-sans text-[16px] text-ink transition-colors duration-150 hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </nav>
      )}
    </header>
  );
}
