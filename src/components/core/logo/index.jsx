import Link from "next/link";
import styles from "./styles.module.scss";

function Logo() {
  return (
    <Link className={styles.logo} href="/">
      next<span className={styles.primary}>ready</span>
    </Link>
  );
}

export { Logo };
