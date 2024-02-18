"use client";

import { useState } from "react";
import { links } from "../links";
import { NavItem } from "../navItem/NavItem";
import { handleLogout } from "@app/actions";
import styles from "./responsiveNav.module.css";
import { Session } from "next-auth";
import { IUser } from "@app/types/user.interface";

interface ResponsiveNavProps {
  session: Session | null;
}

export const ResponsiveNav = ({ session }: ResponsiveNavProps) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <div className={`${styles.links} ${openMenu && styles.mobileLinks}`}>
        {links.map((link) => (
          <NavItem key={link.path} {...link} />
        ))}
        {session?.user ? (
          <>
            {(session?.user as IUser)?.isAdmin && (
              <NavItem path="/admin" title="Admin" />
            )}
            <form action={handleLogout}>
              <button
                className={`${styles.logoutBt} ${
                  openMenu && styles.mobileLogoutBt
                }`}
              >
                Logout
              </button>
            </form>
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
    </>
  );
};
