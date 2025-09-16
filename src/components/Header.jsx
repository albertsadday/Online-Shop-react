import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// contexts
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
// componentes
import { Navbar } from "./Navbar";
// iconos
import { BsBag } from "react-icons/bs";
// logo
import Logo from "../img/logo.svg";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  // event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  return (
    <header
      className={`${isActive ? "bg-glass backdrop-blur-md py-4 shadow-lg" : "bg-primary py-6"
        } fixed w-full z-20 transition-all duration-300`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        {/* Logo */}
        <Link to={"/"}>
          <div>
            <img className="w-[40px]" src={Logo} alt="Logo" />
          </div>
        </Link>

        {/* Menu & Cart */}
        <div className="flex items-center gap-10">
          <div className="hidden md:block">
            <Navbar />
          </div>
          <div
            className="cursor-pointer flex relative group"
            onClick={() => setIsOpen(!isOpen)}
          >
            <BsBag className="text-3xl text-light group-hover:text-accent transition-all duration-300" />
            <div className="bg-accent absolute -right-3 -bottom-3 text-[12px] w-[22px] h-[22px] text-primary font-bold rounded-full flex justify-center items-center group-hover:scale-110 transition-all duration-300 shadow-glow-accent">
              {itemAmount}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
