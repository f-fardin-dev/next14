"use client";

import Link from "next/link";
import styles from "./navItem.module.css";
import { usePathname } from "next/navigation";

interface NavItemProps {
  title: string;
  path: string;
}

export const NavItem = ({ path, title }: NavItemProps) => {
  const pathName = usePathname();

  return (
    <Link
      key={path}
      href={path}
      className={`${styles.nav} ${pathName === path && styles.active}`}
    >
      {title}
    </Link>
  );
};
