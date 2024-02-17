import Image from "next/image";
import styles from "./about.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About page",
  description: "About page description",
};

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className={styles.description}>
          {`We specialize in crafting digital ideas that are not only bigger,
          bolder, and braver but also better. Firmly believing in the
          flexibility and precision of good ideas, we proudly serve as the
          world's leading team in consulting and finance solutions. Explore our
          extensive range of web and software development services.`}
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h5>10 K+</h5>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h5>234 K+</h5>
            <p>People reached</p>
          </div>
          <div className={styles.box}>
            <h5>5 K+</h5>
            <p>Services and plugins</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          fill
          alt="about page image"
          src="/about.png"
          sizes="vw"
          className={styles.img}
        />
      </div>
    </div>
  );
};

export default AboutPage;
