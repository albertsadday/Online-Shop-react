import { useContext } from "react";
// context
import { ProductContext } from "../contexts/ProductContext";
// componentes
import { Hero, Product } from "../components";

export const Home = () => {
  const { products } = useContext(ProductContext);

  const filteredProducts = products.filter(
    (item) =>
      item.category === "men's clothing" || item.category === "women's clothing"
  );

  return (
    <div className="bg-primary text-light">
      <Hero />
      <section className="py-16">
        <div className="container mx-auto">
          <h1 className="uppercase mb-8 font-bold text-3xl text-center text-accent">
            Best Deals
          </h1>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
