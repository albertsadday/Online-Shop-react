import { useContext } from "react";
import { useParams } from "react-router-dom";
// context
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";

export const ProductDetails = () => {
  // obtener el id del producto por medio de la url
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  // Obtener el producto basado en el id
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center bg-primary text-accent">
        Loading...
      </section>
    );
  }

  // Desestructurar el producto
  const { title, price, description, image } = product;

  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center bg-primary">
      <div className="container mx-auto">
        {/* Contenedor con efecto glass */}
        <div className="bg-glass backdrop-blur-md rounded-xl p-8 shadow-lg">
          <div className="flex flex-col lg:flex-row items-center">
            {/* imagen */}
            <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
              <img
                className="max-w-[200px] lg:max-w-xs rounded-lg shadow-lg shadow-secondary/50"
                src={image}
                alt={title}
              />
            </div>
            {/* texto */}
            <div className="flex-1 text-center lg:text-left text-light">
              <h1 className="text-[26px] font-bold mb-2 max-w-[450px] mx-auto lg:mx-0 text-accent">
                {title}
              </h1>
              <div className="text-2xl text-accent font-semibold mb-6">
                $ {price}
              </div>
              <p className="mb-8 font-light">{description}</p>
              <button
                onClick={() => addToCart(product, product.id)}
                className="bg-accent flex p-4 justify-center items-center text-primary w-auto font-bold rounded-md hover:bg-accent/80 transition-all duration-300 shadow-glow-accent transform hover:scale-105"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
