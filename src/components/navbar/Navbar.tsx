import { links } from "./links";
import { NavItem } from "./navItem/NavItem";
import styles from "./navbar.module.css";

//temporary
const isAdmin = true;
const session = true;

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.links}>
        {links.map((link) => (
          <NavItem key={link.path} {...link} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavItem path="/admin" title="Admin" />}
            <button className={styles.logoutBt}>Logout</button>
          </>
        ) : (
          <NavItem path="/login" title="Login" />
        )}
      </div>
    </div>
  );
};
