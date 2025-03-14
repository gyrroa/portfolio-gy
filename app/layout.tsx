import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio | Gyrro Acquiat",
  description: "Personal portfolio of Gyrro Acquiat, Software Developer",
  generator: "v0.dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

import "./globals.css";
