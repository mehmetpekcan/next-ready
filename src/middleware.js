// When we export by default it makes sure that every page states in `matcher` below,
// will be protected by `next-auth` middleware.
// @see: https://next-auth.js.org/configuration/nextjs#middleware
export { default } from "next-auth/middleware";

export const config = { matcher: ["/admin/(.*)"] };
