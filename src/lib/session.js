import { unstable_getServerSession } from "next-auth/next";

import { authOptions } from "@/lib/auth";

export async function getSession() {
  // @see: https://next-auth.js.org/configuration/nextjs#in-app-directory
  return await unstable_getServerSession(authOptions);
}
