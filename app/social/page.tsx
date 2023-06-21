import type { Metadata, NextPage } from "next";
import Image from "next/image";

import { FB_COMPANY_URL } from "@/config";
import { TW_COMPANY_URL } from "@/config";

import BUTTON_TW from "@/public/buttons/tw.svg";
import BUTTON_FB from "@/public/buttons/fb.svg";

import { Wrapper } from "@/app/components/wrapper";

import styles from "./styles.module.css";

const LINKS = [
  {
    style: styles.button_tw,
    title: "Twitter",
    subtitle: "Follow us on",
    href: TW_COMPANY_URL,
    src: BUTTON_TW,
  },
  {
    style: styles.button_fb,
    title: "Facebook",
    subtitle: "Like us on",
    href: FB_COMPANY_URL,
    src: BUTTON_FB,
  },
];

export const metadata: Metadata = {
  title: "Hearts: Social",
};

const Social: NextPage = () => (
  <Wrapper>
    <div className={styles.list}>
      {LINKS.map((link, key) => (
        <div key={key} className={styles.item}>
          <a className={link.style} href={link.href}>
            <div className={styles.button_content}>
              <div className={styles.button_icon}>
                <Image alt={link.title} src={link.src} width={60} height={60} />
              </div>
              <div className={styles.button_text}>
                <div className={styles.button_subtitle}>{link.subtitle}</div>
                <div className={styles.button_title}>{link.title}</div>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  </Wrapper>
);

export default Social;
