import Image from "next/image";
import styles from "./contact.module.css";

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          fill
          alt="Contact page image"
          src="/contact.png"
          objectFit="contain"
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
