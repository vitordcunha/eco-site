import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const NunitoSans = localFont({
  src: "./fonts/NunitoSans.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Eco Site",
  description: "Echo energy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${NunitoSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
