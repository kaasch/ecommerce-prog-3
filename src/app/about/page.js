import { getAllProductsDB } from "@/app/actions";
import Image from "next/image";

const About = async () => {
  const products = await getAllProductsDB();
  console.log(products);
  return (
    <div className="flex gap-14 flex-col mb-16 items-center">
      <h1 className="text-center mt-5 font-semibold text-3xl text-primary-color">
        Acerca de nosotros
      </h1>
      <div className="flex flex-col gap-16">
        <div className="flex flex-row-reverse gap-20 justify-center items-center">
          <Image
            className="w-96"
            src={`/imgs/nosotros/about1.png`}
            width={525}
            height={300}
            alt="about-1"
          />
          <p className="w-1/3 leading-7 text-base">
            Todo arrancó en 2020 con una idea simple pero que nos copaba: hacer
            cookies que no solo fueran riquísimas, sino que también tuvieran esa
            onda de la música y la cultura argentina. Lo que empezó como un
            proyecto casero, inspirado en esas canciones que siempre nos
            acompañan, y en esos momentos compartidos con amigos y familia, se
            fue transformando en un emprendimiento que quiere ganarse un lugar
            en el corazón (y el estómago) de todos.
          </p>
        </div>
        <div className="flex gap-20 justify-center items-center">
          <Image
            className="w-96"
            src={`/imgs/nosotros/about2.png`}
            width={525}
            height={300}
            alt="about-1"
          />
          <p className="w-1/3 leading-7 text-base">
          Con el tiempo, fuimos sumando una gran cantidad de clientes leales, amantes de nuestras cookies artesanales. Personas que aprecian que cada ingrediente está elegido con el mismo detalle con el que un músico compone su mejor tema. Y el boca a boca nos fue trayendo más gente, algo que nos demuestra el cariño y la confianza que la comunidad tiene en Kalu Cookies.
          </p>
        </div>
        <div className="flex flex-row-reverse gap-20 justify-center items-center">
          <Image
            className="w-96"
            src={`/imgs/nosotros/about3.png`}
            width={525}
            height={300}
            alt="about-1"
          />
          <p className="w-1/3 leading-7 text-base">
          Nos encanta compartir nuestra pasión por las cookies y la música con todos ustedes. Seguimos poniéndole calidad y onda a cada galleta que horneamos, porque al final, todo esto es parte de nuestra propia música. ¡Gracias por sumarte a este viaje con nosotros!
          </p>
        </div>
      </div>
      <h1 className="text-center leading-loose tracking-wider mt-5 font-semibold text-2xl text-primary-color w-1/2">
      ¡Gracias por ser parte de nuestra historia y por permitirnos ser parte de sus momentos especiales!
      </h1>
    </div>
  );
};

export default About;
