import "@/styles/reset.css";
import "@/styles/variables.css";
import "@/styles/global.css";

import { getSession } from "@/lib/session";
import { Header } from "@/components/core/header";
import { RootFont } from "@/lib/font";
import { Footer } from "@/components/core/footer";

export default async function RootLayout({ children }) {
  const session = await getSession();

  return (
    <html className={RootFont.className}>
      <head />
      <body className="container">
        <Header session={session} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
