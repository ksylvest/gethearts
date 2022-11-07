import Image from "next/image";

import APPSTORE from "../public/appstore.svg";

import { DOWNLOAD_URL } from "../config";

import styles from "./download.module.css";

export const Download = () => (
  <a className={styles.container} href={DOWNLOAD_URL}>
    <div className={styles.content}>
      <div className={styles.icon}>
        <Image alt="App Store" src={APPSTORE} width={60} height={60} />
      </div>
      <div className={styles.text}>
        <div className={styles.subtitle}>Available on the Mac</div>
        <div className={styles.title}>App Store</div>
      </div>
    </div>
  </a>
);
