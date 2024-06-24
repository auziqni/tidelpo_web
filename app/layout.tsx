import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { inter, grenze, overlock, slackey } from "@/styles/fonts";
import { twMerge } from "tailwind-merge";

export const metadata: Metadata = {
  title: "Tidelpo",
  description: "Alat Mnitoring Tiang Listrik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={twMerge(
            inter.className,
            grenze.variable,
            overlock.variable,
            slackey.variable
          )}
        >
          {" "}
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
