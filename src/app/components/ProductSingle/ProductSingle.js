import Image from 'next/image'
import styles from "@/app/components/ProductSingle/ProductSingle.module.css";
import AddToCart from '@/app/components/AddToCart/AddToCart';
import Link from 'next/link';

const ProductSingle = ({product}) => {
    const {image, name, price, description, _id} = product
  return (
    <section>
      <div className='flex flex-col'>      
 <div className="flex flex-row gap-3 items-center mb-6 ml-56">
          <Image className={styles.icon}src={`/imgs/icons/flecha.svg`} width={10} height={10} alt="flecha"/> 
          <Link href='/shop'><button className={styles.btn_volver} > Seguir comprando</button></Link>
          </div>
      <div className={styles.contenedor}>
        
       
     
         <div className={styles.contenedor_foto}>
         <Image
          className={styles.img}
          src={`/imgs/cookie/${image}`}
          alt={name}
          width={400}
          height={400}
        />
        </div> 
       
        <div className={styles.contenedor_info}>
          <h1 className={styles.nombre}>{name}</h1>
          <p className={styles.descripcion}>{description}</p>
          <h3 className={styles.precio}>{`$${price},00`}</h3>
          <AddToCart price= {price} name={name} image={image} id={_id} />
        </div>
      </div>
     </div>
    </section>
  )
}

export default ProductSingle;