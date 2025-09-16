import { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";

export const CartItem = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);
  const { id, title, image, price, amount } = item;

  return (
    <div className="flex gap-x-4 py-3 lg:px-6 border-b border-secondary/50 w-full font-light text-light bg-glass backdrop-blur-sm rounded-lg mb-2 shadow-lg">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px] rounded-md shadow-md shadow-secondary/50" src={image} alt={title} />
        </Link>
        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase font-semibold max-w-[240px] text-accent hover:underline"
            >
              {title}
            </Link>
            <div
              onClick={() => removeFromCart(id)}
              className="text-2xl cursor-pointer p-1 rounded-full bg-primary/50 hover:bg-accent/50 text-light hover:text-primary transition-all duration-300 shadow-glow-accent"
            >
              <IoMdClose />
            </div>
          </div>

          <div className="flex gap-x-2 h-[40px] text-sm items-center">
            <div className="flex flex-1 max-w-[120px] items-center h-full border border-secondary rounded-md overflow-hidden">
              <div
                onClick={() => decreaseAmount(id)}
                className="flex-1 h-full flex justify-center items-center cursor-pointer hover:bg-secondary/70 transition-all duration-300 transform hover:scale-110"
              >
                <IoMdRemove size={20}/>
              </div>
              <div className="h-full flex justify-center items-center px-3 text-lg font-bold text-accent">
                {amount}
              </div>
              <div
                onClick={() => increaseAmount(id)}
                className="flex-1 h-full flex justify-center items-center cursor-pointer hover:bg-secondary/70 transition-all duration-300 transform hover:scale-110"
              >
                <IoMdAdd size={20}/>
              </div>
            </div>

            <div className="flex-1 flex items-center justify-center text-base font-medium">
              $ {price}
            </div>

            <div className="flex-1 flex justify-end items-center text-lg font-bold text-accent">{`$ ${parseFloat(
              price * amount
            ).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
