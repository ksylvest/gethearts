import { copyFile } from "fs";
import { COMPANY_URL } from "@/config";

import styles from "./copy.module.css";

export const Copy = () => (
  <div className={styles.container}>
    <a className={styles.link} href={COMPANY_URL}>
      Copyright 2023 NeverBored Studios All Rights Reserved
    </a>
  </div>
);
