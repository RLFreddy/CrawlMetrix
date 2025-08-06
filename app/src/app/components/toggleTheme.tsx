"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTranslations } from "next-intl"

export function ModeToggle() {
  const { setTheme } = useTheme()
  const t = useTranslations('Navbar');
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button type="button" variant="outline" size="icon" className="hover:bottom-0.5 hover:relative">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="font-medium bg-white text-black dark:text-white dark:bg-black">
        <DropdownMenuItem onClick={() => setTheme("light")}>
        { t('changeTheme.themes.light') }
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          { t('changeTheme.themes.dark') }
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
           { t('changeTheme.themes.system') }
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
