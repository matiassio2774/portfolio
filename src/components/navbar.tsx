import { Navbar as HeroUINavbar, NavbarContent } from "@heroui/navbar";

import { ThemeSwitch } from "@/components/theme-switch";

export const Navbar = () => {
  return (
    <HeroUINavbar position="sticky">
      <NavbarContent className="pl-4 basis-1" justify="end">
        <ThemeSwitch />
      </NavbarContent>
    </HeroUINavbar>
  );
};
