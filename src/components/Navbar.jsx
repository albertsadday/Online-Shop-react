import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <nav className="flex items-center gap-6 font-semibold text-lg text-light">
      <Link
        className={`relative ${pathname === "/" ? "text-accent" : "hover:text-accent"
          } transition-all duration-300 group`}
        to={"/"}
      >
        Home
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
      </Link>
      <Link
        className={`relative ${pathname === "/products" ? "text-accent" : "hover:text-accent"
          } transition-all duration-300 group`}
        to={"/products"}
      >
        Products
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
      </Link>
      <Link
        className={`relative ${pathname === "/contact" ? "text-accent" : "hover:text-accent"
          } transition-all duration-300 group`}
        to={"/contact"}
      >
        Contact
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
      </Link>
    </nav>
  );
};
