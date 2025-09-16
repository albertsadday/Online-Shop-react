import { Link } from "react-router-dom";
// imagenes
import model from "../img/model.png";

export const Hero = () => {
  return (
    <section className="h-[650px] bg-primary bg-no-repeat bg-center bg-cover py-24 mt-16 relative overflow-hidden">
       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary via-primary/50 to-transparent z-10"></div>
      <div className="container mx-auto flex justify-around h-full relative z-20">
        {/* texto */}
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase text-accent">
            <div className="w-10 h-[2px] bg-accent mr-3 shadow-glow-accent"></div>
            Exclusive Collection for Leaders
          </div>
          <h1 className="text-[55px] leading-[1.1] font-light mb-4 uppercase text-light">
            Dress your power, <br />
            <span className="font-semibold text-accent">build your future</span>
          </h1>
          <Link
            to={"/products"}
            className="self-start uppercase font-semibold border-b-2 border-accent text-light hover:text-accent hover:border-light transition-all duration-300 transform hover:translate-x-2"
          >
            Discover the collection
          </Link>
        </div>
        {/* imagen */}
        <div className="hidden lg:block lg:w-1/2 lg:mr-20">
          <img className="lg:w-full animate-pulse-slow" src={model} alt="Imagen de portada" />
        </div>
      </div>
    </section>
  );
};
