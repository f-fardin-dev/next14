import Image from "next/image";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>Creative Thoughts Agency</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
          accusamus doloremque a, eaque odio rem aut quis.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <Image
          alt="Brands image"
          src="/brands.png"
          width={500}
          height={50}
          className={styles.brandsImg}
        />
      </div>
      <div className={styles.heroContainer}>
        <Image
          alt="Hero image"
          src="/hero.gif"
          fill
          priority
          sizes="45vw"
          className={styles.heroImg}
        />
      </div>
    </div>
  );
}
