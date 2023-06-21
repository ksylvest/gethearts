import { useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";

import styles from "./lightbox.module.css";

const ESC_KEY = "Escape";

export const Lightbox = ({
  alt,
  src,
  onClose,
}: {
  alt: string;
  src: StaticImageData;
  onClose(): void;
}) => {
  const ref = useRef(onClose);

  useEffect(() => {
    ref.current = onClose;
  }, [onClose]);

  useEffect(() => {
    const keyup = (event: KeyboardEvent) => {
      if (event.key !== ESC_KEY) return;
      ref.current();
    };

    document.addEventListener("keyup", keyup);
    return () => {
      document.removeEventListener("keyup", keyup);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.content}>
        <div className={styles.close} onClick={onClose}>
          ×
        </div>
        <div className={styles.photo}>
          <Image
            alt={alt}
            className={styles.photo}
            placeholder="blur"
            src={src}
          />
        </div>
      </div>
    </div>
  );
};
