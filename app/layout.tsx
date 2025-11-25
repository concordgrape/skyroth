import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Sky Roth - Portfolio",
  description: "Porfolio website created and operated by Sky Roth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Analytics />
        <>
        {children}
        </>
      </body>
    </html>
  );
}
