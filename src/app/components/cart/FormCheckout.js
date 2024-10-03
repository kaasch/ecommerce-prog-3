"use client";
import { useForm } from "react-hook-form";
import styles from "@/app/components/cart/FormCheckout.module.css";
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
    <div>
      <div className="flex text-center items-center gap-3 mb-7">
        <h6 className="text-gray-900 font-medium">Información</h6>
        <Image
          src={`/imgs/icons/flecha2.svg`}
          width={10}
          height={10}
          alt="flecha"
        />
        <h6 className="text-gray-700 font-normal">Pago</h6>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.contenedor}>
          <div>
            <input
              className={`${styles.input} ${errors.mail ? styles.error : ""}`}
              type="text"
              placeholder="E-mail"
              {...register("mail", { required: true,  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i})}
            />
            {errors.mail?.type=== 'pattern' && <p>El formato del E-mail es incorrecto</p>}
            {errors.mail?.type=== 'required' && <p>El campo de E-mail está vacío</p> }
          </div>
          <div className={styles.contenedor_nombre}>
            <div className="flex flex-col w-full">
              <input
              className={`${styles.input} ${errors.mail ? styles.error : ""}`}
              type="text"
              placeholder="Nombre"
              {...register("nombre", { required: true })}/>
              {errors.nombre?.type=== 'required' && <p>El campo de nombre está vacío</p>}
            
            </div>
            <div className="flex flex-col ml-4 w-full">
              <input
              className={`${styles.input} ${errors.mail ? styles.error : ""}`}
              type="text"
              placeholder="Apellido"
              {...register("apellido", {required: true})}
            />
            {errors.apellido?.type=== 'required' && <p>El campo de Apellido está vacío.</p>}
            </div>
            
            
          </div>
          <div>
            <select className={styles.input} {...register("pais")}>
              <option value="ar">Argentina</option>
              <option value="es">España</option>
              <option value="it">Italia</option>
              <option value="fr">Francia</option>
            </select>
          </div>
          <div className={styles.contenedor_lugar}>
            <div className="flex flex-col w-full">
              <input
              className={`${styles.input} ${errors.mail ? styles.error : ""}`}
              type="text"
              placeholder="Ciudad"
              {...register("ciudad", {required: true})}
            />
            {errors.ciudad?.type=== 'required' && <p>El campo de Ciudad está vacío.</p>}
            </div>
            
            <div className="flex flex-col w-full ml-4">
            <input
              className={`${styles.input} ${errors.mail ? styles.error : ""}`}
              type="text"
              placeholder="Localidad"
              {...register("localidad" , { required: true })}
            />
            {errors.localidad?.type=== 'required' && <p>El campo de Localidad está vacío.</p>}
            </div>
            
            <div className="flex flex-col w-full ml-4">
              <input
              className={`${styles.input} ${errors.mail ? styles.error : ""}`}
              type="text"
              placeholder="Código postal"
              {...register("codigo", {required: true, pattern: /^[0-9]\d*$/})}
            />
            {errors.codigo?.type=== 'pattern' && <p>Debe escribir un número.</p>}
            {errors.codigo?.type=== 'required' && <p>El campo de Código postal está vacío.</p>}
            </div>
            
          </div>

          <div>
            <input
              className={`${styles.input} ${errors.mail ? styles.error : ""}`}
              type="text"
              placeholder="Dirección"
              {...register("direccion" , { required: true })}
            />
            {errors.direccion?.type=== 'required' && <p>El campo de Dirección está vacío.</p>}
          </div>

          <div>
            <input
              className={`${styles.input} ${errors.mail ? styles.error : ""}`}
              type="text"
              placeholder="Piso, departamento, casa"
              {...register("depto" , { required: true, pattern: /^[0-9]\d*$/})}
            />
            {errors.depto?.type=== 'required' && <p>El campo de Piso, departamento, casa está vacío.</p>}
            {errors.depto?.type=== 'pattern' && <p>Debe poner el número de piso y el número de departamento.</p>}
          </div>

          <div>
            <input
              className={`${styles.input} ${errors.mail ? styles.error : ""}`}
              type="text"
              placeholder="Teléfono"
              {...register("tel" , { required: true, pattern:/^\(?\d{2}\)?[\s\.-]?\d{4}[\s\.-]?\d{4}$/})}
            />
            {errors.tel?.type=== 'pattern' && <p>El formato del Número de teléfono es incorrecto.</p>}
            {errors.tel?.type=== 'required' && <p>El campo de Teléfono está vacío.</p>}
          </div>

          <div className={styles.btns}>
            <div className="flex flex-row gap-3 items-center">
              <Image
                className={styles.icon}
                src={`/imgs/icons/flecha.svg`}
                width={10}
                height={10}
                alt="flecha"
              />
              <Link href="/shop">
                <button className={styles.btn_volver}>
                  {" "}
                  Volver a la tienda
                </button>
              </Link>
            </div>

            <input
              className={styles.btn}
              type="submit"
              value="Siguiente"
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormCheckout;
