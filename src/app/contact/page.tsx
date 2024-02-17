import Image from "next/image";
import styles from "./contact.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact page",
  description: "Contact page description",
};

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          fill
          alt="Contact page image"
          src="/contact.png"
          sizes="45vw"
          className={styles.img}
        />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name & Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea cols={30} rows={10} placeholder="Message" />
          <button className={styles.formButton}>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
