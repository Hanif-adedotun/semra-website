import { Card, CardContent } from "@/components/ui/card";
import { LucidePhoneCall, MailsIcon, MapIcon } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact us",
};

const Icon = ({ color }: { color: string }) => (
  <svg
    width="175"
    height="175"
    viewBox="0 0 268 175"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M115.522 0C138.516 0 158.553 12.6601 169.044 31.3902C176.023 28.6279 183.631 27.1099 191.593 27.1099C221.261 27.1099 246.007 48.1863 251.675 76.1832C261.411 85.6326 267.461 98.8591 267.461 113.499C267.461 142.215 244.182 165.494 215.466 165.494C206.203 165.494 197.506 163.072 189.974 158.826C179.081 168.75 164.598 174.8 148.702 174.8C129.129 174.8 111.699 165.627 100.476 151.346C89.8531 160.181 76.1978 165.494 61.3016 165.494C27.4457 165.494 0 138.048 0 104.192C0 71.787 25.144 45.2544 56.9865 43.0401C64.758 18.1028 88.026 0 115.522 0Z"
      fill={color ? color : "#019247"}
    />
  </svg>
);

export default function Contact() {
  return (
    <div className="w-screen min-h-max flex items-center justify-center py-20">
      <div>
        <h2 className="font-semibold text-3xl text-center mb-20">Contact Us</h2>
        <Card className="grid grid-row-3 md:grid-cols-3 gap-4 md:gap-48 border-0 shadow-none">
          {/* Phone Number */}
          <CardContent className="flex flex-col items-center">
            <div className="relative">
              <Icon color="#E6F8EF" />
              <MailsIcon
                color="black"
                size={50}
                className="absolute left-[62.5px] top-[62.5px]"
              />
            </div>
            <Link
              href="mailto:hello@semra.com.ng"
              className="hover:text-semraGreen"
            >
              hello@semra.com.ng
            </Link>
            <Link
              href="https://www.semra.com.ng"
              className="hover:text-semraGreen"
            >
              www.semra.com.ng
            </Link>
          </CardContent>

          {/* Address */}
          <CardContent className="flex flex-col items-center text-center">
            <div className="relative">
              <Icon color="#FF98224D" />
              <MapIcon
                color="black"
                size={50}
                className="absolute left-[62.5px] top-[62.5px]"
              />
            </div>
            <Link
              href="https://maps.app.goo.gl/wYpZTfN2cwf5JVkP6"
              className="hover:text-semraGreen"
            >
              No. 2, Niger Crescent, off Main street, Suncity Estate, Abuja
            </Link>
          </CardContent>

          {/* Phone */}
          <CardContent className="flex flex-col items-center">
            <div className="relative">
              <Icon color="#0192474D" />
              <LucidePhoneCall
                color="black"
                size={50}
                className="absolute left-[62.5px] top-[62.5px]"
              />
            </div>
            <Link href="tel:09011111111" className="hover:text-semraGreen">
              +234 888 888 8888
            </Link>
            <Link href="tel:09011111111" className="hover:text-semraGreen">
              +234 888 888 8888
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
