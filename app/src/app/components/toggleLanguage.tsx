"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  // DropdownMenuLabel,
  // DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { type Locale } from "@/lib/locales";
import { GlobeIcon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import React from "react";

export const LanguagePicker: React.FC = () => {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('Navbar');

  function handleLocaleChange(newLocale: Locale): void {
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button type="button" variant="outline" size="icon" className="hover:bottom-0.5 hover:relative">
          <GlobeIcon className="size-5" />
          {/* { locale } */}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="center" className="font-medium bg-white text-black dark:text-white dark:bg-black">
        <DropdownMenuCheckboxItem
          checked={locale === "en"}
          onClick={() => {
            handleLocaleChange("en");
          }}
        >
          {t('changeLanguage.languages.english')}
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={locale === "es"}
          onClick={() => {
            handleLocaleChange("es");
          }}
        >
          {t('changeLanguage.languages.spanish')}
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};