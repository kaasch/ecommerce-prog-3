'use client';
import { useAppContext } from '@/app/contexts/AppContext';
import Link from 'next/link';
import Image from 'next/image';
import { FaCartShopping } from 'react-icons/fa6';
import styles from "@/app/components/Navbar/Navbar.module.css";

export default function Navbar() {
  const { cartLength } = useAppContext();
  return (
    <div className={styles.contenedor_nav}>
      <Link href={`/`}>
      <div className={styles.logo}>
        <Image src={`/imgs/logos/nota.svg`} width={44} height={44} alt='Logo' />
      </div>
      </Link>
      <div className={styles.contenedor_menu_nav}>      
      <nav >
        <ul className='flex items-center justify-center space-between gap-16' >
          <li>
            <Link href={`/shop`}>Tienda</Link>
          </li>
          <li>
            <Link href={`/about`}>Acerca</Link>
          </li>
          <li>
            <Link href={`/contact`}>Contacto</Link>
          </li>
          <li>
            <Link href={`/cart`}>Carrito</Link>
          </li>
        </ul>
      </nav>

      <Link href={`/cart`}>
        <div className='relative'>
          <FaCartShopping size={24} />
          {cartLength > 0 && (
            <span className=' absolute top-4 left-4 flex items-center justify-center bg-blue-800 text-white rounded-full w-2 h-3 p-3 text-sm'>
              {' '}
              {cartLength}
            </span>
          )}
        </div>
        
      </Link>
      </div>
    </div>
  );
}
