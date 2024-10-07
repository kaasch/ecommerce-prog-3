"use client";
import { useAppContext } from "@/app/contexts/AppContext";
import Image from "next/image";
import styles from "@/app/components/cart/ProductsCheckout.module.css";

const ProductsCheckout = () => {
  const {
    cart,
    handleRemoveProduct,
    subtotal,
    discountAmount,
    totalWithDiscount,
    cartLength
  } = useAppContext();

  return (
    <div>
      {cartLength === 0 ? ( <div className="p-8 bg-gray-100 ml-2 mr-12 rounded-xl max-[768px]:ml-12">
        <div className="text-center text-slate-500">
          <p>El carrito está vacío</p>
          </div>
          </div>
      ) : (
        <div className={styles.contenedor_carrito}>
          <div>
            {cart.map((product) => (
              <div key={product.id} className={styles.contenedor}>
                <div className={styles.contenedor_producto}>
                  <Image
                    src={`/imgs/cookie/${product.image}`}
                    alt={product.name}
                    width={60}
                    height={60}
                  />
                  <div className={styles.contenedor_info_gral}>
                    <div className={styles.contenedor_info}>
                      <h3>{`${product.quantity} x `}</h3>
                      <h3>{product.name}</h3>
                    </div>
                    <div>
                      <p className="font-medium">
                        ${product.price * product.quantity}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    className={styles.btn_delete}
                    onClick={() => handleRemoveProduct(product.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-3">
              <div className="flex justify-between pl-8 pr-8 font-normal text-slate-400">
                <p>Subtotal</p>
                <p>${subtotal},00</p>
              </div>
              <div className={styles.discount}>
                <p>Descuento</p>
                <p>- ${discountAmount},00</p>
              </div>
            </div>

            <div className={styles.total}>
              <p>Total</p>
              <p>${totalWithDiscount},00</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsCheckout;
