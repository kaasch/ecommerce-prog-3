import Inner from '@/app/components/Inner';
import ProductCard from '@/app/components/ProductCard/ProductCard';
import { getAllProductsDB } from '@/app/actions';
import styles from "@/app/components/ProductsGrid/ProductsGrid.module.css";

export default async function ProductsGrid() {
  const response = await getAllProductsDB()
  return (
    <section className={styles.contenedor}>
      <Inner>
        <h2 className={styles.titulo_cart}>Nuestros Productos</h2>
        <div className={styles.grilla_productos}>
          {response.products && response.products.map((item, index) => (
            <ProductCard key={index} item={item} />
          ))}
        </div>
      </Inner>
    </section>
  );
}
