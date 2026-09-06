import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail, MapPin, Twitter } from "lucide-react";
import { footerNav, siteConfig } from "@/config/site";
import { Container } from "@/components/common/Container";
import { Logo } from "@/components/common/Logo";

const socials = [
  { label: "LinkedIn", href: siteConfig.socials.linkedin, icon: Linkedin },
  { label: "GitHub", href: siteConfig.socials.github, icon: Github },
  { label: "X", href: siteConfig.socials.twitter, icon: Twitter },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-border bg-surface border-t">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Logo />
            <p className="text-muted-foreground mt-5 max-w-sm text-sm leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="mt-6 space-y-2.5">
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-foreground hover:text-primary inline-flex items-center gap-2 text-sm transition-colors"
              >
                <Mail className="size-4" aria-hidden="true" />
                {siteConfig.email}
              </a>
              <p className="text-muted-foreground inline-flex items-center gap-2 text-sm">
                <MapPin className="size-4 shrink-0" aria-hidden="true" />
                {siteConfig.address}
              </p>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerNav.map((group) => (
              <nav key={group.title} aria-label={group.title}>
                <h2 className="font-mono text-[0.7rem] tracking-[0.2em] uppercase">
                  {group.title}
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        to={item.to}
                        className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="border-border mt-14 flex flex-col items-start justify-between gap-4 border-t pt-6 sm:flex-row sm:items-center">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <p className="text-muted-foreground text-xs">
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <ul className="flex items-center gap-4">
              <li>
                <Link
                  to="/privacy"
                  className="text-muted-foreground hover:text-foreground text-xs transition-colors"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-muted-foreground hover:text-foreground text-xs transition-colors"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>
          <ul className="flex items-center gap-2">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={s.label}
                  className="border-border text-muted-foreground hover:text-foreground hover:border-foreground/40 grid size-10 place-items-center rounded-md border transition-colors"
                >
                  <s.icon className="size-4" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
