import { links } from "./links";
import { NavItem } from "./navItem/NavItem";
import styles from "./navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.links}>
        {links.map((link) => (
          <NavItem key={link.path} {...link} />
        ))}
      </div>
    </div>
  );
};
