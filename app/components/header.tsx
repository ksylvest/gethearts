import Image from "next/image";
import Link from "next/link";

import LOGO from "@/public/logo.svg";

import { Download } from "./download";
import { Wrapper } from "./wrapper";

import styles from "./header.module.css";

export const Header = () => (
  <header className={styles.container}>
    <Wrapper>
      <div className={styles.content}>
        <Link href="/">
          <Image alt="Hearts" src={LOGO} width={274} height={100} />
        </Link>
        <Download />
      </div>
    </Wrapper>
  </header>
);
