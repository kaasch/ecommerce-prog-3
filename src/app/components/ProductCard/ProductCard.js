import Image from "next/image";
import Link from "next/link";
import styles from "@/app/components/ProductCard/ProductCard.module.css";

const ProductCard = ({ item }) => {
  return (
    <div className={styles.contenedor}>
      <div className={styles.contenedor_img}>
        <Image
          className={styles.img}
          src={`/imgs/cookie/${item.image}`}
          alt={item.name}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className={styles.contenedor_texto}>
        <h3 className={styles.titulo_item}>{item.name}</h3>
      <p className={styles.descripcion_item}>{item.description}</p>
      <h5 className={styles.precio_item}>{`$${item.price},00`}</h5>
      <Link className={styles.btn} href={`/product/${item._id}`}>Ver el producto</Link>
      </div>
      
    </div>
  );
};

export default ProductCard;
