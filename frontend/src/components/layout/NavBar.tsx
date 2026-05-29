import { NavLink } from "react-router";

const navItems = [
  {
    name: "Peliculas",
    href: "/",
  },
  {
    name: "Series",
    href: "/series",
  },
  {
    name: "Mi Lista",
    href: "/my-list",
  },
] as const;

export function NavBar() {
  return (
    <ul>
      {navItems.map(({ name, href }) => (
        <li>
          <NavLink to={href}>{name}</NavLink>
        </li>
      ))}
    </ul>
  );
}
