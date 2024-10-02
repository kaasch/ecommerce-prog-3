import Link from "next/link";
import Image from "next/image";
import styles from "@/app/components/FirstSection/FirstSection.module.css";

const FirstSection = ({ sectionThreeText }) => {
  return (
    <section>
      <div>
        <div>
          <Image
            src={`/imgs/icons/charly.svg`}
            width={170}
            height={238}
            alt="section cookie"
          />
          <h3>Música</h3>
          <p>Cada cookie está inspirada en las leyendas del rock. Ofrecemos sabores únicos que rinden homenaje a nuestros íconos musicales.</p>
        </div>
        <div>
          <Image
            src={`/imgs/icons/spinetta.svg`}
            width={170}
            height={238}
            alt="section cookie"
          />
          <h3>Música</h3>
          <p>Cada cookie está inspirada en las leyendas del rock. Ofrecemos sabores únicos que rinden homenaje a nuestros íconos musicales.</p>
        </div>
        <div>
          <Image
            src={`/imgs/icons/cantilo.svg`}
            width={170}
            height={238}
            alt="section cookie"
          />
          <h3>Música</h3>
          <p>Cada cookie está inspirada en las leyendas del rock. Ofrecemos sabores únicos que rinden homenaje a nuestros íconos musicales.</p>
        </div>
        <div></div>
        <div></div>
      </div>
      <div className={styles.contenedor_separador}>
        <div className={styles.bck_separador}>
          <div className={styles.dto}>
            <h2>{sectionThreeText}</h2>
          </div>

          <div className="flex flex-row gap-28 pt-4">
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
    </section>
  );
};

export default FirstSection;
