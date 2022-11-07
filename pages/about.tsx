import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import AVATAR_KEVIN from "../public/avatars/kevin.jpg";
import AVATAR_THOMAS from "../public/avatars/thomas.jpg";

import { Wrapper } from "../components/wrapper";

import styles from "./about.module.css";

const About: NextPage = () => (
  <>
    <Head>
      <title>Hearts: About</title>
    </Head>

    <Wrapper>
      <div id="overview">
        <h1>Overview</h1>
        <p>
          Hearts is a game where players must evade taking points (Hearts and
          the Queen of Spades) or boldly attempt to collect all points and shoot
          the moon! The game originated in Spain in the 1700’s, and requires a
          mix of memory and strategy to be played well.
        </p>
        <p>
          Hearts requires four players (our game provides three computers to
          play against) and a standard deck of 52-cards (we use one of the
          digital variety). At the start of a round all cards are dealt. Each
          player is then required to pass three cards to a neighbour (left,
          right, across, and then no pass). Once the cards are passed the player
          with the lowest card (the Two of Clubs) plays first. Each trick
          players must follow suit if possible. The player with the highest card
          matching the suit led takes the trick and must lead the next card.
        </p>
        <p>
          Points are totalled when all the cards have been played. Each Heart is
          worth 1 point and the Queen of Spades is worth 26 points. If a player
          collects all the point cards, each other player receives 26 points.
          Round are repeated until a player exceeds 100 points, at which point
          the winner is the player with the lowest score.
        </p>
      </div>
      <div id="developers">
        <h1>Developers</h1>
        <p>
          This app took form in the labs of{" "}
          <a href="https://neverboredstudios.com/">NeverBored Studios</a> in
          Waterloo, Ontario. The project was created by two developers who
          greatly appreciate your support and hope you enjoy our software:
        </p>
        <div className={styles.developer}>
          <div className={styles.developer_avatar}>
            <Image
              src={AVATAR_KEVIN}
              alt="Kevin Sylvestre"
              title="Kevin Sylvestre"
              placeholder="blur"
              width={300}
              height={300}
            />
          </div>
          <div className={styles.developer_bio}>
            <h2>Kevin Sylvestre</h2>
            <p>
              Kevin was born in Whitehorse, Yukon and moved to Waterloo, Ontario
              to complete a bachelors degree in computer science from the
              University of Waterloo. He is a passionate Ruby on Rails and Cocoa
              developer with a flair for style. Kevin has created a number of
              open source Rails and iOS libraries and is an active member of the
              development community. In addition to programming, Kevin enjoys
              wind-surfing, snow-boarding and playing soccer.
            </p>
          </div>
        </div>
        <div className={styles.developer}>
          <div className={styles.developer_avatar}>
            <Image
              src={AVATAR_THOMAS}
              alt="Thomas Ang"
              title="Thomas Ang"
              placeholder="blur"
              width={300}
              height={300}
            />
          </div>
          <div className={styles.developer_bio}>
            <h2>Thomas Ang</h2>
            <p>
              Thomas recently completed a masters degree in mathematics at the
              University of Waterloo where he wrote is thesis in algorithms and
              complexity. He is an expert tester and debugger and has a great
              business sense and also dabbles in artificial intelligence. In the
              past Thomas has done software development for Electronic Arts,
              GEOREF Systems Ltd., and the University of Waterloo. In his spare
              time he plays soccer and is currently working on finishing is
              first novel.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  </>
);

export default About;
