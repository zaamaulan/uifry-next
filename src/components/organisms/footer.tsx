import Image from "next/image";
import Link from "next/link";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { MailIcon, TelephoneIcon } from "../atoms/icon";

const footerLinks = [
  {
    title: "Links",
    items: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/#" },
      { name: "Bookings", href: "/#" },
      { name: "Blog", href: "/#" },
    ],
  },
  {
    title: "Legal",
    items: [
      { name: "Terms of Use", href: "/#" },
      { name: "Privacy Policy", href: "/#" },
      { name: "Cookie Policy", href: "/#" },
    ],
  },
  {
    title: "Product",
    items: [
      { name: "Take Tour", href: "/#" },
      { name: "Reviews", href: "/#" },
      { name: "Live Chat", href: "/#" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="container mx-auto my-28 grid gap-x-16 gap-y-6 max-lg:p-4 md:grid-cols-[.5fr_1fr_.5fr]">
      <ul className="space-y-4">
        <li>
          <Link href="/">
            <Image
              src="/logo-black.svg"
              alt="logo"
              width={117}
              height={34.41}
            />
          </Link>
        </li>
        <li className="flex items-center gap-x-2">
          <MailIcon />
          <a href="mailto:help@frybix.com" className="font-medium">
            help@frybix.com
          </a>
        </li>
        <li className="flex items-center gap-x-2">
          <TelephoneIcon />
          <a href="tel:+123445667889" className="font-medium">
            +1 234 456 678 89
          </a>
        </li>
      </ul>

      <div className="flex flex-wrap gap-x-16 gap-y-6 md:grid md:grid-cols-3">
        {footerLinks.map((link, index) => (
          <ul key={index} className="space-y-4">
            <h4 className="text-3xl font-medium">{link.title}</h4>
            {link.items.map((item, itemIndex) => (
              <li key={itemIndex}>
                <Link href={item.href} className="font-medium">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>

      <div className="space-y-4">
        <h4 className="text-3xl font-medium">Newsletter</h4>
        <p className="font-medium">Stay up to date</p>
        <div className="inline-grid p-2 md:grid-cols-2">
          <Input
            type="email"
            placeholder="Your email"
            className="size-[auto] h-[60px] border-none font-medium focus:!ring-transparent"
          />
          <Button type="submit">Subscribe</Button>
        </div>
      </div>
    </footer>
  );
};
