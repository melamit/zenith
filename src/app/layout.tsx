import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Melamit",
  description:
    "Hi in there! I hope you'll find whatever you are searching for.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
