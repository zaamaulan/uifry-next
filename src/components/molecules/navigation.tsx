"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

type NavLink = {
  name: string;
  href: string;
};

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/#" },
  { name: "Pricing", href: "/#" },
  { name: "Features", href: "/#" },
];

export const Navigation = () => {
  return (
    <nav className="container relative mx-auto max-md:p-4 md:mt-10">
      <div className="flex items-center justify-between max-md:hidden">
        <div className="flex items-center gap-x-10">
          <Link href="/">
            <Image
              src="/logo-black.svg"
              alt="logo"
              width={117}
              height={34.41}
              priority
            />
          </Link>

          <ul className="flex space-x-4">
            <Navlink links={navLinks} />
          </ul>
        </div>

        <Button>Download</Button>
      </div>

      <div className="flex items-center justify-between md:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu />
            <span className="sr-only">Menu</span>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle className="hidden">
                Are you absolutely sure?
              </SheetTitle>
              <SheetDescription className="hidden">
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>

            <div className="flex flex-col gap-6">
              <Image
                src="/logo-black.svg"
                alt="logo"
                width={117}
                height={34.41}
                priority
              />
              <ul className="flex flex-col gap-4">
                <Navlink links={navLinks} />
              </ul>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

const Navlink = ({ links }: { links: NavLink[] }) => {
  const pathname = usePathname();

  return (
    <>
      {links.map((link, index) => {
        const active =
          pathname === link.href
            ? "text-carnation-400 font-bold"
            : "font-medium";

        return (
          <li key={index}>
            <Link
              href={link.href}
              className={cn("text-xl font-bold text-black", active)}
            >
              {link.name}
            </Link>
          </li>
        );
      })}
    </>
  );
};
