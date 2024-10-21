import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Icons } from "../icons";

export function SocialNav() {
  return (
    <nav className="flex items-center">
      <Link href={siteConfig.links.github} target="_blank">
        <button>
          <Icons.github className="h-10 w-10" />
        </button>
      </Link>
      <Link href={siteConfig.links.linkedin} target="_blank">
        <button>
          <Icons.linkedin className="h-10 w-10" />
        </button>
      </Link>
    </nav>
  )
}