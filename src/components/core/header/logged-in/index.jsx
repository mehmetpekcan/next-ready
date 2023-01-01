"use client";
import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";

import styles from "./styles.module.scss";

function LoggedIn({ user }) {
  return (
    <>
      <Link href="/admin/create">New post</Link>
      <Link href="/admin/drafts">My drafts</Link>
      <button onClick={() => signOut({ callbackUrl: "/" })}>Log out</button>
      <span className={styles.userImageWrapper}>
        <Image src={user.image} alt={user.name} fill />
      </span>
    </>
  );
}

export { LoggedIn };
