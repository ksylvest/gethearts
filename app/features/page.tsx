import type { Metadata, NextPage } from "next";

import { Wrapper } from "@/app/components/wrapper";

import styles from "./styles.module.css";

export const metadata: Metadata = {
  title: "Hearts: Features",
};

const Features: NextPage = () => (
  <Wrapper>
    <div id="current">
      <h1>Current</h1>
      <p>
        Hearts for macOS is an easy to play but difficult to perfect card game.
        The game is available through the Mac App Store. Download it today!
      </p>
      <div className={styles.list}>
        <div className={styles.item}>
          <h2>Great Experience</h2>
          <p>
            Our application is easy to use for both experts and beginners. We
            provide a detailed help section for those new to Hearts and a
            natural interface that won’t hold you back.
          </p>
        </div>
        <div className={styles.item}>
          <h2>Rich Animations</h2>
          <p>
            Our application includes beautiful animations for cards being dealt,
            played and moved throughout the game. When paired with our sound
            effects they lead to a well flowing game.
          </p>
        </div>
        <div className={styles.item}>
          <h2>Computers Players</h2>
          <p>
            You can switch the names of the computers, but they will still be
            challenging opponents. Our artificial intelligence knows how to beat
            the best of players so good luck.
          </p>
        </div>
      </div>
    </div>
    <div id="request">
      <h1>Request</h1>
      <p>
        Have an idea for a feature? We would love to hear about it. If you want
        to see things like online multiplayer, graphic customization, or
        different rules send us an email and we will do our best to add it into
        our next release.
      </p>
    </div>
  </Wrapper>
);

export default Features;
