'use client'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { LanguagePicker } from "./toggleLanguage";
import { ModeToggle } from "./toggleTheme";
import { Chip } from "@heroui/react";
import React from "react";
// import Login from "./Login";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Nosotros",
    "Soluciones",
    "Agendar una reunion",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="border-2 border-blue-400" maxWidth="2xl">
      <NavbarContent className="" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
          
        />
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">CRAWL-METRIX</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4 " justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Nosotros
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page" href="#">
            Soluciones
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4 " justify="end">
         <NavbarItem>
           <LanguagePicker></LanguagePicker>
         </NavbarItem>
         <NavbarItem>
           <ModeToggle />
         </NavbarItem>
          <NavbarItem>
           <Button
             showAnchorIcon
             as={Link}
             color="primary"
             href="https://github.com/heroui-inc/heroui"
             variant="shadow"
           >
             Agendar una reunion
           </Button>
           {/* <Button as={Link} color="primary" href="#" variant="flat">
             Agendar una reunion
           </Button> */}
         </NavbarItem>
       </NavbarContent>
      {/* hidden */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}