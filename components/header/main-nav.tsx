"use client";

import { siteConfig } from "@/config/site";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "../icons";

export function MainNav() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center space-x-6">
      <Link href="/" className="flex flex-row items-center">
        <Icons.logo className="h-10 w-10 dark:stroke-slate-50" />
        <span className="font-bold">{siteConfig.name}</span>
      </Link>
      <Link
        href="/blog"
        className={` ${pathname === "/blog" ? "text-primary font-bold" : "text-sm font-medium transtion-colors hover:text-primary"}`}
      >
        Blog
      </Link>
      {/* <Link
        href="/about"
        className={pathname === "/about" ? "text-primary font-bold" : "text-sm font-medium transtion-colors hover:text-primary"}
      >
        About
      </Link> */}
    </nav>
  )
}