import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Starter App",
  description: "A simple starer app for frontend development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="/icon?<generated>"
        type="image/<generated>"
        sizes="<generated>"
      />
      <link
        rel="icon"
        type="image/svg+xml"
        href="/images/favicon.svg"
        sizes="any"
      />

      <body className={inter.className}>{children}</body>
    </html>
  );
}
