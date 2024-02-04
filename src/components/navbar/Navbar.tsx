"use client";

import { useState } from "react";
import { links } from "./links";
import { NavItem } from "./navItem/NavItem";
import styles from "./navbar.module.css";
import Link from "next/link";

//temporary
const isAdmin = true;
const session = true;

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Logo
      </Link>
      <div className={`${styles.links} ${openMenu && styles.mobileLinks}`}>
        {links.map((link) => (
          <NavItem key={link.path} {...link} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavItem path="/admin" title="Admin" />}
            <button
              className={`${styles.logoutBt} ${
                openMenu && styles.mobileLogoutBt
              }`}
            >
              Logout
            </button>
          </>
        ) : (
          <NavItem path="/login" title="Login" />
        )}
      </div>
      <button
        className={styles.menuBt}
        onClick={() => setOpenMenu((prev) => !prev)}
      >
        Menu
      </button>
    </div>
  );
};
