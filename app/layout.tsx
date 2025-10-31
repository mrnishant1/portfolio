import type { Metadata } from "next";

import "./globals.css";
import { AR_One_Sans } from "next/font/google";


const arOneSans = AR_One_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});


export const metadata = {
  title: "Nishant | Fullstack Developer Portfolio",
  description:
    "Fullstack web developer and solo freelancer specializing in building fast, responsive, and scalable web applications. Skilled in React, Next.js, Node.js, Express, and MongoDB — delivering complete end-to-end web solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${arOneSans.className}`}>{children}</body>
    </html>
  );
}
