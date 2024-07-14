import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { House, LucidePhoneCall, MailsIcon, MapIcon } from "lucide-react";
import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not Found",
};


export default function NotFound() {
  return (
    <div className="w-screen min-h-max flex flex-col items-center justify-center gap-20 py-36 overflow-x-none">
      <h2 className="font-semibold text-[50px] md:text-[100px] text-center text-black">
        404: Page not found
      </h2>
      <Link href="/">
        <Button className="bg-semraGreen hover:bg-semraGreen/80 py-8 px-12 text-white text-xl font-semibold flex items-center justify-center gap-4">
          <House size={24} />
          <span>Go Back Home</span>
        </Button>
      </Link>
    </div>
  );
}
