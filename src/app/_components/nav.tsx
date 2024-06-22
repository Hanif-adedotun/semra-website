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
import Link from "next/link";

export default function Nav() {
  return (
     <>
     <div className="fixed inset-x-0 top-0 z-50 bg-black px-4 h-[40px] items-center w-screen"> 
          <span className="text-small text-white">Contact details</span>
     </div>
    <NavigationMenu className="fixed inset-x-0 top-[40px] z-50 bg-white shadow-sm w-screen">
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
            <Button className="bg-semraYellow rounded-md text-white">Donate Now</Button>
          </div>
      </NavigationMenuList>
    </NavigationMenu>
    </>
  );
}
