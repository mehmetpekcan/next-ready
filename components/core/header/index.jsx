import React from "react";
import Link from "next/link";

import { LoggedIn } from "./logged-in";
import { LoggedOut } from "./logged-out";

import styles from "./styles.module.css";

const Header = ({ session }) => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        {session ? <LoggedIn user={session.user} /> : <LoggedOut />}
      </nav>
    </header>
  );
};

export { Header };
