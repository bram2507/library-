import { ReactElement, useState } from "react";
import {
  Navbar,
  NavbarMenu,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

const menuItems = [
  "Profile",
  "Dashboard",
  "Activity",
  "Analytics",
  "System",
  "Deployments",
  "My Settings",
  "Team Settings",
  "Help & Feedback",
  "Log Out",
];

const menuButton = ["Login", "SignUp"];

const navItems = ["Feature", "Customers", "Integrations"];

const navbar = (props: Object): ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      {navBarContent(isMenuOpen)}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navbarItemLink(navItems)}
      </NavbarContent>
      <NavbarContent justify="end">
        {navbarItemButton(menuButton)}
        {/* <NavbarItem className="hidden lg:flex">
          <Button as={Link} color="secondary" href="#" variant="flat">
            Login
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem> */}
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
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
};

const navBarContent = (isMenuOpen: boolean): ReactElement => {
  return (
    <NavbarContent>
      {navbarMenuToggle(isMenuOpen)}
      {navBrand("Library")}
    </NavbarContent>
  );
};

const navbarMenuToggle = (isMenuOpen: boolean): ReactElement => {
  return (
    <NavbarMenuToggle
      aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      className="sm:hidden"
    />
  );
};
const navBrand = (brandName: string) => {
  return (
    <NavbarBrand>
      <p className="font-bold text-inherit">{brandName}</p>
    </NavbarBrand>
  );
};

const navbarItemLink = (navItems: string[]): ReactElement[] => {
  {
    let href: string = "#";
    return navItems.map((item) => {
      return <NavbarItem>{link(item, href)}</NavbarItem>;
    });
  }
};

const link = (item: String, href: string): ReactElement => {
  return (
    <Link color={"foreground"} href={href}>
      {item}
    </Link>
  );
};

const navbarItemButton = (menuButton: string[]): ReactElement => {
  return (
    <NavbarItem className="hidden lg:flex">
      {menuButton.map((button, index) => {
        return navbarButton(button, index);
      })}
    </NavbarItem>
  );
};

const navbarButton = (button: string, index: number): ReactElement => {
  if (index === 0) {
    return (
      <Button
        className="mx-2 hidden lg:flex"
        as={Link}
        color="secondary"
        href={button}
        variant="flat"
      >
        {button}
      </Button>
    );
  } else {
    return (
      <Button
        className="mx-2 md:inline-flex"
        as={Link}
        color="primary"
        href="#"
        variant="flat"
      >
        Sign Up
      </Button>
    );
  }
};

export default navbar;
