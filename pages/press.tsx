import type { NextPage } from "next";
import Head from "next/head";

import { Wrapper } from "../components/wrapper";

import styles from "./press.module.css";

const EMAIL = "info@neverboredstudios.com";

const FILES = [
  {
    name: "graphics.zip",
    href: "/files/graphics.zip",
  },
  {
    name: "graphics.tar",
    href: "/files/graphics.tar",
  },
];

const Press: NextPage = () => (
  <>
    <Head>
      <title>Hearts: Press</title>
    </Head>
    <Wrapper>
      <div id="reviews">
        <h1>Resources</h1>
        <p>
          We greatly appreciate any reviews. If you do get a chance to evaluate
          our software we have provided the following full resolution graphics
          for your use:
        </p>
        <div className={styles.list}>
          {FILES.map((file, key) => (
            <div key={key} className={styles.item}>
              <a download className={styles.button} href={file.href}>
                {file.name}
              </a>
            </div>
          ))}
        </div>
      </div>
      <div id="press">
        <h1>License</h1>
        <p>
          We offer NFR licenses of our software that. For more information
          please email us at: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </p>
      </div>
    </Wrapper>
  </>
);

export default Press;
