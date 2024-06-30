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
import Link from "next/link";

// Icons
import { siFacebook } from 'simple-icons';

export default function Nav() {
  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 bg-black px-4 h-[40px] items-center w-screen flex justify-between px-[10%]">
        <div className="flex justify-center gap-2 sm:gap-8">
          <span className="text-[12px] text-white flex gap-1 items-center sm:gap-2"><Phone fill='white' color="black" size={'14px'}/> <a className="" href="tel:+2349096381736">+234 909 628 1736</a></span>

          <span className="text-[12px] text-white flex gap-1 items-center sm:gap-2"><Mail fill='white' color="black" size={'14px'}/> <a className="" href="mailto:semra@gmail.com">semra@gmail.com</a></span>

          <span className="text-[12px] text-white flex gap-1 items-center sm:gap-2"><MapPin fill='white' color="black" size={'14px'}/> <a className="" href="mailto:semra@gmail.com">semra@gmail.com</a></span>
        </div>

        <div className="flex justify-center gap-1 sm:gap-2">
          <span className="text-[12px] text-white"><Facebook fill='white' size={'16px'}/></span>
          <span className="text-[12px] text-white"><Instagram fill='white' color="black" size={'16px'}/></span>
          <span className="text-[12px] text-white"><Twitter fill='white' size={'16px'}/></span>
        </div>
      </div>
      <NavigationMenu className="fixed inset-x-0 top-[40px] z-50 bg-white w-screen">
        <NavigationMenuList className="flex justify-between h-14 p-4 items-center w-screen">
          <Link href="#" className="flex items-center" prefetch={false}>
            <h3>SEMRA</h3>
            <span className="sr-only">Semra home</span>
          </Link>

          <div className="hidden md:flex gap-4">
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Events
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </div>

          <div>
            <Button className="bg-semraYellow rounded-md text-white hover:opacity-90">
              Donate Now
            </Button>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}
