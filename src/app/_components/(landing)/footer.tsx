import { Facebook, Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <div className="bg-black z-10 grid grid-cols-1 md:grid-cols-4 w-full min-h-96 mt-48 items-start  gap-10 md:gap-16 p-10 md:p-24 text-sm">
      {/* Section 1 */}
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 justify-start items-center">
          <Image
            src="/semra-logo.jpg"
            width={120}
            height={50}
            alt="logo"
            className="rounded-md"
          />
        </div>

        <p className="text-white">
          To be a renowned Centre for Islamic excellence and broad teaching in
          Nigeria and beyond.
        </p>

        <div className="flex gap-4">
          <Facebook size={20} color="#FD9822" />
          <Instagram size={20} color="#FD9822" />
          <Youtube size={20} color="#FD9822" />
        </div>
      </div>
      {/* Section 2 */}
      <div>
        <h1 className="text-white text-base font-bold pb-4">Useful Links</h1>
        <Link href={"/about"}>
          <p className="text-white">About Us</p>
        </Link>
        <Link href={"/#donate"}>
          <p className="text-white">Donate</p>
        </Link>
        <Link href={"/events"}>
          <p className="text-white">Events</p>
        </Link>
        <Link href={"/contact"}>
          <p className="text-white">Contact</p>
        </Link>
      </div>

      {/* Section 3 */}
      <div>
        <h1 className="text-white text-base  font-bold pb-4">Contact Us</h1>
        <p className="text-white">Email: semra.suncity@gmail.com</p>
        <p className="text-white">
          Phone: <a href="tel:+2348078785032">+234-807-878-5032</a>
        </p>
        <p className="text-white">
          Address: No. 2, Niger Crescent, off Main street, Suncity Estate, Abuja
        </p>
      </div>

      {/* Section 4 */}
      <div>
        <h1 className="text-white text-base  font-bold pb-4">
          Sign up for our news
        </h1>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="email" placeholder="Email" className="bg-white" />
          <Button type="submit" className="bg-semraYellow text-white">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
}
