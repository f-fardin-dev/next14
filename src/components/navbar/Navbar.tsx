import styles from "./navbar.module.css";
import Link from "next/link";
import { ResponsiveNav } from "./responsiveNav/ResponsiveNav";
import { auth } from "@app/auth";

export const Navbar = async () => {
  const session = await auth();
  return (
    <nav className={styles.container}>
      <Link href="/" className={styles.logo}>
        Logo
      </Link>
      <ResponsiveNav session={session} />
    </nav>
  );
};
