import { Link } from "react-router-dom";
// imagenes
import model from "../img/model.png";

// agregue

import React from 'react'

import { Button } from 'primereact/button';
        


export const Hero = () => {
  return (
    <>
      <section className="h-[600px] bg-hero bg-no-repeat bg-center bg-cover py-24 mt-20">
        <div className="container mx-auto flex justify-around h-full">
          {/* texto */}
          <div className="flex flex-col justify-center">
            <div className="font-semibold flex items-center uppercase">
              <div className="w-10 h-[100px] bg-blue-500 mr-3"></div>
              lo mejor para ti
            </div>
            <h1 className="w-full text-[50px] leading-[1.1] font-light mb-4 uppercase">
              las mejores ofertas con clase y estilo{" "}
              <span className="font-semibold">para Hombres y Mujeres</span>
            </h1>
            <Link
              to={"/products"}
              className="self-start uppercase font-semibold border-b-2 border-primary"
            >

<div className="card flex justify-content-center">
  <Button label="Novedades" className="p-button-raised p-button-rounded p-button-text" />
</div>
          

            </Link>
          </div>
          {/* imagen */}
          <div className="hidden lg:block lg:w-1/2 lg:mr-20">
            <img className="lg:w-full" src={model} alt="Imagen de portada" />
          </div>
        </div>
      </section>
    </>
  );
};
