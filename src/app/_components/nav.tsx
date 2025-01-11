'use client';

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Facebook, Instagram, Locate, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

// Icons
import { siFacebook } from 'simple-icons';
import { MobileNav } from "./mobileNav";

export default function Nav() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <>
      <div className=" hidden md:flex fixed inset-x-0 top-0 z-50 bg-black px-4 h-[40px] items-center w-screen  justify-between px-[10%]">
        <div className="flex justify-center items-end gap-2 md:gap-6">
          {/* <Image
            src="/icons/palestine.avif"
            width={30}
            height={30}
            alt="Palastine flag"
          />
          <p className="text-[12px] text-white">May Allah protect Palestine</p> */}
        </div>
        <div className="flex justify-center gap-2 md:gap-8">
          <span className="text-[12px] text-white flex gap-1 items-center md:gap-4">
            <Phone fill="white" color="black" size={"14px"} />{" "}
            <a className="" href="tel:+2349096381736">
              +234 909 628 1736
            </a>
          </span>

          <span className="text-[12px] text-white flex gap-1 items-center md:gap-2">
            <Mail fill="white" color="black" size={"14px"} />{" "}
            <a className="" href="mailto:semra@gmail.com">
              semra@gmail.com
            </a>
          </span>

          <span className="text-[12px] text-white flex gap-1 items-center md:gap-2">
            <MapPin fill="white" color="black" size={"14px"} />{" "}
            <a className="" href="mailto:semra@gmail.com">
              semra@gmail.com
            </a>
          </span>
        </div>

        <div className="flex justify-center gap-1 md:gap-2">
          <span className="text-[12px] text-white">
            <Facebook fill="white" size={"16px"} />
          </span>
          <span className="text-[12px] text-white">
            <Instagram fill="white" color="black" size={"16px"} />
          </span>
          <span className="text-[12px] text-white">
            <Twitter fill="white" size={"16px"} />
          </span>
        </div>
      </div>
      <NavigationMenu className="fixed inset-x-0 top-0 md:top-[40px] z-50 bg-white w-screen">
        <NavigationMenuList className="flex justify-between h-14 p-4 items-center w-screen">
          <Link href="/" className="flex items-center" prefetch={false}>
            <div className="flex gap-4 justify-start items-center">
              <Image src="/icon.png" width={30} height={30} alt="logo" />
              <h1 className="text-black text-xl font-medium">SEMRA</h1>
            </div>
            <span className="sr-only">Semra home</span>
          </Link>

          <div className="hidden md:flex gap-4">
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} ${
                    pathname == "/about" && "text-semraGreen"
                  }`}
                >
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/events" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} ${
                    pathname == "/events" && "text-semraGreen"
                  }`}
                >
                  Events
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} ${
                    pathname == "/contact" && "text-semraGreen"
                  } text-base`}
                >
                  Contact us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </div>

          <div className="flex md:hidden gap-4">
            <MobileNav />
          </div>

          <div className="hidden md:flex">
            <Button onClick={() => router.push('/#donate')} className="bg-semraYellow rounded-md text-sm text-white hover:bg-semraYellow/80">
              Donate Now
            </Button>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}


