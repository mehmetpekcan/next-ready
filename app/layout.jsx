import { getSession } from "@/lib/session";
import { Header } from "@/components/core/header";

export default async function RootLayout({ children }) {
  const session = await getSession();

  return (
    <html>
      <head />
      <body>
        <Header session={session} />
        {children}
      </body>
    </html>
  );
}
