import Link from "next/link";

import { FB_COMPANY_URL, TW_COMPANY_URL } from "@/config";

import { Copy } from "./copy";
import { Separator } from "./separator";
import { Wrapper } from "./wrapper";

import styles from "./footer.module.css";

const SECTIONS = [
  {
    name: "About",
    href: "/about",
    links: [
      { name: "Overview", href: "/about#overview" },
      { name: "Developers", href: "/about#developers" },
    ],
  },
  {
    name: "Features",
    href: "/features",
    links: [
      { name: "Current", href: "/features#current" },
      { name: "Request", href: "/features#request" },
    ],
  },
  {
    name: "Press",
    href: "/press",
    links: [
      { name: "Resources", href: "/press#resources" },
      { name: "License", href: "/press#license" },
    ],
  },
  {
    name: "Social",
    href: "/social",
    links: [
      { name: "Twitter", href: TW_COMPANY_URL },
      { name: "Facebook", href: FB_COMPANY_URL },
    ],
  },
];

export const Footer = () => (
  <footer className={styles.container}>
    <Wrapper>
      <div className={styles.content}>
        {SECTIONS.map((section, key) => (
          <div key={key} className={styles.section}>
            <div className={styles.title}>
              <Link href={section.href}>{section.name}</Link>
            </div>
            <Separator />
            <div className={styles.links}>
              {section.links.map((link, key) => (
                <Link key={key} href={link.href}>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Copy />
    </Wrapper>
  </footer>
);
