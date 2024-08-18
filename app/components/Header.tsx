import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "~/components/UI/navigation-menu";
import { Link } from "@remix-run/react";
export default function Header() {
  const navbarItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "Blog",
      href: "/blog",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navbarItems.map((item) => (
          <NavigationMenuItem key={item.name}>
            <Link to={item.href}>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {item.name}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
