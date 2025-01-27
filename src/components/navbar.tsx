import { Kbd } from "@heroui/kbd";
import { Input } from "@heroui/input";
import { Navbar as HeroUINavbar, NavbarContent } from "@heroui/navbar";

import { ThemeSwitch } from "@/components/theme-switch";
import { SearchIcon } from "@/components/icons";

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="flex-shrink-0 text-base pointer-events-none text-default-400" />
      }
      type="search"
    />
  );

  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="pl-4 sm:hidden basis-1" justify="end">
        <ThemeSwitch />
      </NavbarContent>
    </HeroUINavbar>
  );
};
