"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/#" },
  { name: "Pricing", href: "/#" },
  { name: "Features", href: "/#" },
];

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="container mx-auto mt-10">
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
            {navLinks.map((link, index) => {
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
          </ul>
        </div>

        <Button>Download</Button>
      </div>

      <div></div>
    </nav>
  );
};
