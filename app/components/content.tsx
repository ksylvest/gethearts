import type { ReactNode } from "react";

import styles from "./content.module.css";

export const Content = ({ children }: { children: ReactNode }) => (
  <div className={styles.container}>{children}</div>
);
