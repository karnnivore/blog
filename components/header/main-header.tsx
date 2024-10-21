import { ThemeToggle } from "../theme-toggle";
import { MainNav } from "./main-nav";
import { SocialNav } from "./social-nav";

export function Header() {
  return (
    <header className="sticky top-0 px-4 w-full border-b border-border bg-background/60 backgrop-blur dark:bg-slate-800">
      <div className="flex h-14 max-w-screen-2xl items-center">
        <MainNav/>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <SocialNav/>
          <ThemeToggle/>
        </div>
      </div>
    </header>
  )
}