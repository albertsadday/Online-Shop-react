import { useContext } from "react";
import { Link } from "react-router-dom";
// iconos
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import { BsCartCheck, BsBoxArrowInRight } from "react-icons/bs";
// componentes
import { CartItem } from "./CartItem";
// context
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";

export const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);

  return (
    <div
      className={`${isOpen ? "right-0" : "-right-full"
        } w-full bg-primary/80 backdrop-blur-lg fixed top-0 h-full shadow-2xl md:w-[50vw] xl:max-w-[40vw] transition-all duration-500 z-30 px-6 lg:px-[40px]`}
    >
      <div className="flex items-center justify-between py-6 border-b border-secondary/50">
        <div className="uppercase text-lg font-semibold text-accent tracking-wider">
          Shopping Cart ({itemAmount})
        </div>
        <div
          onClick={handleClose}
          className="cursor-pointer w-10 h-10 flex justify-center items-center rounded-full bg-accent/20 hover:bg-accent/50 text-accent hover:text-primary transition-all duration-300 shadow-glow-accent transform hover:rotate-180"
        >
          <IoMdArrowForward className="text-3xl" />
        </div>
      </div>
      <div className="flex flex-col gap-y-4 h-[calc(100vh-220px)] overflow-y-auto overflow-x-hidden border-b border-secondary/50 p-4">
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>

      <div className="flex flex-col gap-y-5 py-6">
        <div className="flex w-full justify-between items-center">
          <div className="uppercase font-semibold text-light/80 text-lg">
            <span className="mr-2">Total:</span>$ {parseFloat(total).toFixed(2)}
          </div>
          <div
            onClick={clearCart}
            className="cursor-pointer p-3 bg-accent/20 text-accent w-14 h-14 flex justify-center items-center text-2xl rounded-lg hover:bg-accent/50 hover:text-primary transition-all duration-300 shadow-glow-accent transform hover:scale-110"
          >
            <FiTrash2 />
          </div>
        </div>
        <Link
          to={"/"}
          className="bg-secondary/80 flex p-4 justify-center items-center text-light w-full font-medium rounded-lg hover:bg-secondary transition-all duration-300 shadow-glow-secondary transform hover:scale-105 gap-x-2"
        >
          <BsCartCheck className="text-xl"/> View Cart
        </Link>
        <Link
          to={"/"}
          className="bg-accent flex p-4 justify-center items-center text-primary w-full font-bold rounded-lg hover:bg-accent/80 transition-all duration-300 shadow-glow-accent transform hover:scale-105 gap-x-2"
        >
         <BsBoxArrowInRight className="text-xl"/> Checkout
        </Link>
      </div>
    </div>
  );
};
