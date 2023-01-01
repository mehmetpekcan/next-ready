import Link from "next/link";

import styles from "./styles.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      Made by&nbsp;
      <Link href="https://twitter.com/_pekcanmehmet" target="_blank">
        Mehmet Pekcan
      </Link>
      . Source code is available on&nbsp;
      <Link href="https://github.com/mehmetpekcan/next-ready">GitHub</Link>
    </footer>
  );
}

export { Footer };
