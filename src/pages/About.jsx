// imagenes
import Nosotros from "../img/about.jpg";

export const About = () => {
  return (
    <section className="text-justify max-w-[1100px] mx-auto mt-[120px] sm:mt-10 py-12 px-5">
      <div className="flex flex-col justify-center gap-3">
        <h2 className="text-3xl mb-3 font-bold text-primary uppercase">
          Nosotros
        </h2>
        <div className="flex items-center justify-center gap-5">
          <p className="text-primary">
            Bienvenido a AluraGeek, nos apasiona la moda y nos esforzamos por ofrecer una selección única de prendas de vestir y accesorios de alta calidad para hombres y mujeres de todas las edades. Nuestra tienda en línea combina estilo, comodidad y tendencias actuales para brindarte una experiencia de compra excepcional
            <br />
            <br />
            ¡Gracias por tu cálida bienvenida! 🛍️ En AluraGeek, no solo ofrecemos moda de alta calidad, sino que también nos apasiona cada detalle de lo que hacemos. Queremos que te sientas como parte de nuestra comunidad apasionada por el estilo y la elegancia. Así que, adelante, explora nuestros productos con entusiasmo y si necesitas algo, no dudes en contactarnos. ¡Estamos aquí para ti! 😊👗👔👠
          </p>
          <img
            className="hidden lg:block lg:w-[450px] rounded-lg"
            src={Nosotros}
            alt="Imagen nosotros"
          />
        </div>
      </div>
      {/* mision y vision */}
      <div className="flex items-center justify-center gap-10 my-10">
        <div>
          <h3 className="text-3xl mb-3 font-bold text-primary uppercase">
            Misión
          </h3>
          <p className="text-primary">
          Nuestra pasión por la moda va más allá de las tendencias. Nos esforzamos por seleccionar cuidadosamente cada prenda, considerando la calidad, el estilo y la comodidad. Creemos que la moda no debe comprometer la sostenibilidad, por lo que también nos dedicamos a promover prácticas responsables en la industria.

Cuando eliges AluraGeek, no solo estás comprando ropa; estás invirtiendo en una experiencia. Nuestro servicio al cliente excepcional garantiza que cada cliente se sienta valorado y escuchado. Queremos que encuentres tu ropa predilecta con confianza y satisfacción.


          </p>
        </div>
        <div>
          <h3 className="text-3xl mb-3 font-bold text-primary uppercase">
            Visión
          </h3>
          <p className="text-primary">
          Estilo para Todos: La moda convencional puede ser exclusiva, pero nosotros creemos en la inclusividad. Ofrecemos una amplia gama de tallas, estilos y géneros para que todos encuentren algo que refleje su personalidad y se sientan empoderados.
          </p>
        </div>
      </div>
    </section>
  );
};
