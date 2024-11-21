import Image from "next/image";
import Link from "next/link";
import styles from "@/app/components/Hero/Hero.module.css";

const Hero = ({ mainText, secondaryText }) => {
  return (
    <div className={styles.hero_container}>
      <div className={styles.hero_info}>
        <h1>{mainText}</h1>
        <p className={styles.detalle_hero}>{secondaryText}</p>
        <Link href="/shop"><button className={styles.btn_hero}>Quiero Probar!</button></Link>
      </div>

      <Image
        className={styles.hero_img}
        src={`/imgs/cookie/classic-cortada.png`}
        width={0}
        height={0}
        sizes="100vw"
        alt="hero"
      />
    </div>
  );
};

export default Hero;
