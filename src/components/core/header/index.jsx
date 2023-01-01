import { Logo } from "@/components/core/logo";

import { LoggedIn } from "./logged-in";
import { LoggedOut } from "./logged-out";

import styles from "./styles.module.scss";

const Header = ({ session }) => {
  return (
    <header className={styles.header}>
      <Logo />
      <nav className={styles.nav}>
        {session ? <LoggedIn user={session.user} /> : <LoggedOut />}
      </nav>
    </header>
  );
};

export { Header };
