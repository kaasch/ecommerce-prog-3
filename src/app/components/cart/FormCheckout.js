"use client";
import { useForm } from "react-hook-form";
import styles from '@/app/components/cart/FormCheckout.module.css'
import Image from "next/image";
import Link from "next/link";

const FormCheckout = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div >
      <div className="flex text-center items-center gap-3 mb-7">
      <h6 className="text-gray-900 font-medium">Información</h6>
      <Image src={`/imgs/icons/flecha2.svg`} width={10} height={10} alt="flecha"/>
      <h6 className="text-gray-700 font-normal" >Pago</h6>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.contenedor}>
       
        <div>
          <label></label>
          <input className={styles.input} type="text" placeholder="E-mail" {...register("mail", { required: true })} />
        </div>
        <div className={styles.contenedor_nombre}>
          <label></label>
          <input className={styles.input}  type="text" placeholder="Nombre" {...register("nombre", { required: true })} />
          <label></label>
          <input className={`${styles.input} ${styles.input_otro}`}  type="text" placeholder="Apellido" {...register("apellido")} />
        </div>
        <div>
          <label></label>
          <select className={styles.input}  {...register("pais")}>
            <option value="ar">Argentina</option>
            <option value="es">España</option>
            <option value="it">Italia</option>
            <option value="fr">Francia</option>
          </select>
        </div>
        <div className={styles.contenedor_lugar}>
          <label></label>
          <input className={styles.input} type="text" placeholder="Ciudad" {...register("ciudad")} />
          <input className={`${styles.input} ${styles.input_otro}`}type="text" placeholder="Localidad" {...register("localidad")} />
          <input className={`${styles.input} ${styles.input_otro}`}type="text" placeholder="Código postal" {...register("localidad")} />
        </div>       

        <div>
          <label></label>
          <input className={styles.input}  type="text" placeholder="Dirección" {...register("direccion")} />
        </div>

        <div>
          <label></label>
          <input className={styles.input}  type="text" placeholder="Piso departamento, casa" {...register("depto")} />
        </div>

        <div>
          <label></label>
          <input className={styles.input}  type="text" placeholder="Telefono" {...register("tel")} />
        </div>

        <div className={styles.btns}>

          <div className="flex flex-row gap-3 items-center">
          <Image className={styles.icon}src={`/imgs/icons/flecha.svg`} width={10} height={10} alt="flecha"/> 
          <Link href='/shop'><button className={styles.btn_volver} > Volver a la tienda</button></Link>
          </div>

        <input className={styles.btn}  type="submit" value="Siguiente"></input>
        </div>
        
         </div>
      </form>
    </div>
  );
};

export default FormCheckout;
