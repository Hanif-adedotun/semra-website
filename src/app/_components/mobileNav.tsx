"use client";
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
import React from "react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { AlignJustify } from "lucide-react";

export function MobileNav() {
  const router = useRouter();
  return (
    <NavigationMenuItem className="">
      <NavigationMenuTrigger>
        <div className="flex gap-2 items-center">
          <AlignJustify size={28} />
        </div>
        {/* Menu */}
      </NavigationMenuTrigger>

      <NavigationMenuContent className="bg-white relative w-screen">
        <ul className="grid grid-cols-1 gap-3 p-4">
          <ListItem key={"Home"} title={"Home"} href={"/"}>
            {""}
          </ListItem>

          <ListItem key={"About"} title={"About"} href={"/about"}>
            {""}
          </ListItem>

          <ListItem key={"Events"} title={"Events"} href={"/events"}>
            {""}
          </ListItem>

          <ListItem key={"Academy"} title={"Islamic Academy"} href={"/academy"}>
            {""}
          </ListItem>

          <ListItem key={"Articles"} title={"Articles"} href={"/articles"}>
            {""}
          </ListItem>

          <ListItem key={"contact"} title={"Contact us"} href={"/contact"}>
            {""}
          </ListItem>

          <ListItem key={"contact"}>
            <Button
              onClick={() => router.push("/#donate")}
              className="bg-semraYellow w-full rounded-md text-sm text-white hover:bg-semraYellow/80"
            >
              Donate Now
            </Button>
          </ListItem>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium text-center leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
