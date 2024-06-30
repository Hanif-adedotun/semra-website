import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

// const poppins = Poppins({ weight:"300" ,subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "SEMRA",
  description: "Suncity Estate Muslim Resident association",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
