"use client";

import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";

import styles from "./carousel.module.css";

import { Lightbox } from "./lightbox";
import { Wrapper } from "./wrapper";

import SAMPLES_ORIGINAL_1 from "@/public/carousel/original-1.png";
import SAMPLES_ORIGINAL_2 from "@/public/carousel/original-2.png";
import SAMPLES_ORIGINAL_3 from "@/public/carousel/original-3.png";
import SAMPLES_ORIGINAL_4 from "@/public/carousel/original-4.png";
import SAMPLES_THUMB_1 from "@/public/carousel/thumb-1.jpg";
import SAMPLES_THUMB_2 from "@/public/carousel/thumb-2.jpg";
import SAMPLES_THUMB_3 from "@/public/carousel/thumb-3.jpg";
import SAMPLES_THUMB_4 from "@/public/carousel/thumb-4.jpg";

type Sample = {
  original: StaticImageData;
  thumb: StaticImageData;
  alt: string;
};

const SAMPLES: Sample[] = [
  {
    original: SAMPLES_ORIGINAL_1,
    thumb: SAMPLES_THUMB_1,
    alt: "Sample #1",
  },
  {
    original: SAMPLES_ORIGINAL_2,
    thumb: SAMPLES_THUMB_2,
    alt: "Sample #2",
  },
  {
    original: SAMPLES_ORIGINAL_3,
    thumb: SAMPLES_THUMB_3,
    alt: "Sample #3",
  },
  {
    original: SAMPLES_ORIGINAL_4,
    thumb: SAMPLES_THUMB_4,
    alt: "Sample #4",
  },
];

export const Carousel = () => {
  const [selection, setSelection] = useState<Sample | undefined>();
  const onClose = () => setSelection(undefined);

  return (
    <>
      {selection && (
        <Lightbox
          src={selection.original}
          alt={selection.alt}
          onClose={onClose}
        />
      )}
      <div className={styles.container}>
        <Wrapper>
          <div className={styles.content}>
            {SAMPLES.map((sample, index) => (
              <div
                key={index}
                className={styles.entry}
                onClick={() => setSelection(sample)}
              >
                <div className={styles.zoom}>+</div>
                <div className={styles.thumb}>
                  <Image
                    alt={sample.alt}
                    placeholder="blur"
                    src={sample.thumb}
                    width={220}
                    height={160}
                  />
                </div>
              </div>
            ))}
          </div>
        </Wrapper>
      </div>
    </>
  );
};
