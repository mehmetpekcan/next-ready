"use client";
import Link from "next/link";
import { signOut } from "next-auth/react";

function LoggedIn({ user }) {
  return (
    <>
      <p>
        {user.name} ({user.email})
      </p>
      <Link href="/admin/create">New post</Link>
      <Link href="/admin/drafts">My drafts</Link>
      <button onClick={() => signOut({ callbackUrl: "/" })}>Log out</button>
    </>
  );
}

export { LoggedIn };
