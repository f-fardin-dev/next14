import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerLogo}>Logo</div>
      <div className={styles.footerText}>
        Creative thoughts agency © All rights reserved.
      </div>
    </footer>
  );
};
