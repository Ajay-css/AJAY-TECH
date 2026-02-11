import React from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Moon, Sun, Menu } from "lucide-react"

const Navbar = () => {
  const setTheme = (theme) => {
    document.documentElement.classList.remove("light", "dark")
    document.documentElement.classList.add(theme)
    localStorage.setItem("theme", theme)
  }

  const menus = ["Home", "Services", "Projects", "About"]

  return (
    <nav className="fixed top-4 left-1/2 z-50 w-[95%] -translate-x-1/2">
      <div className="flex items-center justify-between rounded-full border border-border bg-background/80 px-6 py-3 backdrop-blur-xl shadow-lg">

        {/* Left - Logo */}
        <h1 className="text-xl font-extrabold tracking-wide">
          <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-lime-400 bg-clip-text text-transparent">
            AJAY
          </span>
          <span className="ml-2 text-white/90 dark:text-white">
            TECH
          </span>
        </h1>

        {/* Center - Menu (Desktop) */}
        <div className="hidden md:flex items-center gap-6 rounded-full border border-white/20 bg-white/20 px-8 py-2 backdrop-blur-lg dark:bg-white/10">
          {menus.map((menu) => (
            <a
              key={menu}
              href="#"
              className="text-sm font-medium text-black/80 transition hover:text-black dark:text-white/80 dark:hover:text-white"
            >
              {menu}
            </a>
          ))}
        </div>

        {/* Right - Actions */}
        <div className="flex items-center gap-3">

          {/* Theme Toggle */}
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Sun className="h-5 w-5 dark:hidden" />
                <Moon className="h-5 w-5 hidden dark:block" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}

          {/* Contact Button */}
          <Button className="hidden md:inline-flex rounded-full px-6">
            Contact Us
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost" className="md:hidden">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 pt-10">
                {menus.map((menu) => (
                  <a
                    key={menu}
                    href="#"
                    className="text-lg font-medium"
                  >
                    {menu}
                  </a>
                ))}
                <Button className="rounded-full">Contact Us</Button>
              </div>
            </SheetContent>
          </Sheet>

        </div>
      </div>
    </nav>
  )
}

export default Navbar