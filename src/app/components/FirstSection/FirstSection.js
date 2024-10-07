import Link from "next/link";
import Image from "next/image";
import styles from "@/app/components/FirstSection/FirstSection.module.css";

const FirstSection = ({ sectionThreeText }) => {
  return (
    <section>
      <div className={styles.contenedor_separador}>
        <div className={styles.bck_separador}>
          <div className={styles.dto}>
            <h2>{sectionThreeText}</h2>
          </div>

          <div className="flex flex-row gap-28 pt-4 max-[768px]:flex-col">
            <Image
              src={`/imgs/cookie/banana.png`}
              width={273}
              height={238}
              sizes="100vw"
              alt="section cookie"
            />
            <Image
              src={`/imgs/cookie/arandano.png`}
              width={256}
              height={238}
              sizes="100vw"
              alt="section cookie"
            />

            <Image
              src={`/imgs/cookie/choco.png`}
              width={278}
              height={238}
              sizes="100vw"
              alt="section cookie"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-10 py-14">
        <div className={styles.contenedor_cantantes}>
          <div className={styles.contenedor_cantante}>
            <Image
              src={`/imgs/icons/charly.svg`}
              width={170}
              height={238}
              alt="section cookie"
            />
            <h3>Música</h3>
            <p>
              Cada cookie está inspirada en las leyendas del rock. Ofrecemos
              sabores únicos que rinden homenaje a nuestros íconos musicales.
            </p>
          </div>
          <div className={styles.contenedor_cantante}>
            <Image
              src={`/imgs/icons/spinetta.svg`}
              width={126}
              height={238}
              alt="section cookie"
            />
            <h3>Calidad</h3>
            <p>
              Desde la selección de las materias primas hasta el proceso de
              horneado, cada cookie está hecha para ser riquísima.
            </p>
          </div>
          <div className={styles.contenedor_cantante}>
            <div className="flex ">
                  <Image
              src={`/imgs/icons/cantilo.svg`}
              width={131}
              height={238}
              alt="section cookie"
            />
            </div>
        
            <h3>Artesanal</h3>
            <p>
              Cada una de nuestras cookies está hecha a mano, con dedicación y,
              por sobre todo, mucho amor.
            </p>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default FirstSection;
