import Link from "next/link";

function LoggedOut() {
  return (
    <>
      <Link href="/login">Log in</Link>
    </>
  );
}

export { LoggedOut };
