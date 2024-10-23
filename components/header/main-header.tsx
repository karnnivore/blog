import { ThemeToggle } from "../theme-toggle";
import { MainNav } from "./main-nav";
import { SocialNav } from "./social-nav";

export function Header() {
  return (
    <header className="sticky top-0 px-6 w-full border-b border-border backgrop-blur opacity-80 bg-white dark:bg-slate-800 dark:border-slate-600">
      <div className="flex h-14 items-center w-full">
        <MainNav/>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <SocialNav/>
          <ThemeToggle/>
        </div>
      </div>
    </header>
  )
}