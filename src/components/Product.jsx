import { useContext } from "react";
import { Link } from "react-router-dom";
// iconos
import { BsPlus, BsEyeFill } from "react-icons/bs";
// context
import { CartContext } from "../contexts/CartContext";

export const Product = ({ product }) => {
  // Desestructuración de product
  const { addToCart } = useContext(CartContext);
  const { id, image, category, title, price } = product;

  return (
    <div className="bg-glass backdrop-blur-md rounded-xl shadow-lg overflow-hidden group transition duration-300 transform hover:-translate-y-2">
      <div className="h-[300px] mb-4 relative">
        <div className="w-full h-full flex justify-center items-center">
          {/* imagen */}
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-500"
              src={image}
              alt={title}
            />
          </div>
          {/* Botones */}
          <div className="absolute top-4 right-4 p-2 flex flex-col items-center justify-center gap-y-3 opacity-0 group-hover:opacity-100 transition-all duration-500">
            <button onClick={() => addToCart(product, id)} className="transition-transform transform hover:scale-110">
              <div className="flex justify-center items-center text-primary w-12 h-12 bg-accent rounded-full shadow-glow-accent">
                <BsPlus className="text-3xl" />
              </div>
            </button>
            <Link
              to={`/product/${id}`}
              className="w-12 h-12 bg-secondary rounded-full flex justify-center items-center text-light drop-shadow-xl shadow-glow-secondary transition-transform transform hover:scale-110"
            >
              <BsEyeFill />
            </Link>
          </div>
        </div>
      </div>
      {/* Categoria, titulo y precio */}
      <div className="p-4">
        <div className="text-sm capitalize text-light/60 mb-1">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-2 text-accent hover:underline transition-all">{title}</h2>
        </Link>
        <div className="font-bold text-lg text-accent">$ {price}</div>
      </div>
    </div>
  );
};
