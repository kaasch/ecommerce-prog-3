'use client'
import { useAppContext } from '@/app/contexts/AppContext'
import styles from '@/app/components/AddToCart/AddToCart.module.css'

const AddToCart = ({name, price, id, image}) => {
  const {handleAddToCart} =useAppContext();

  return (
    <>
    <button onClick={()=> handleAddToCart(name, price, image, id, 1)} className={styles.btn}>Agregar al carrito</button>
    </>
  )
}

export default AddToCart