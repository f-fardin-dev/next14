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
    <nav className={styles.container}>
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
      <div
        className={styles.menuBtContainer}
        onClick={() => setOpenMenu((prev) => !prev)}
      >
        <div
          className={`${styles.menuBt} ${openMenu && styles.menuBtOpen}`}
        ></div>
      </div>
    </nav>
  );
};
