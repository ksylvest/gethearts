import type { Metadata, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import APP from "@/public/app.jpg";

import styles from "./styles.module.css";

export const metadata: Metadata = {
  title: "Hearts",
};

const Home: NextPage = () => (
  <div className={styles.app}>
    <a href="http://storage.gethearts.com/preview.mp4">
      <Image
        alt="Preview"
        priority
        placeholder="blur"
        src={APP}
        height={575}
        width={1000}
      />
    </a>
  </div>
);

export default Home;
