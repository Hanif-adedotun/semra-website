import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Nav from "./_components/nav";
import { Footer } from "./_components/(landing)/footer";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";

// const poppins = Poppins({ weight:"300" ,subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "SEMRA",
  description: "Suncity Estate Muslim Resident association",
  icons: [{ rel: "icon", url: "/semra-logo.jpg" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${raleway.className} mt-[80px] bg-white`}>
        <Nav />
        <Toaster richColors />
        {children}
        <Analytics />
      </body>
      <Footer />
    </html>
  );
}
