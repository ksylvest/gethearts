import { FB_SHARE_URL, TW_SHARE_URL } from "../config";

import styles from "./share.module.css";

const LINKS = [
  {
    href: TW_SHARE_URL,
    style: styles.tw_link,
  },
  {
    href: FB_SHARE_URL,
    style: styles.fb_link,
  },
];

export const Share = () => (
  <div className={styles.container}>
    {LINKS.map((link, key) => (
      <div key={key} className={styles.item}>
        <a className={link.style} href={link.href} />
      </div>
    ))}
  </div>
);
