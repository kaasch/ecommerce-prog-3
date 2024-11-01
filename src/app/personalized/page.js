// 'use client'
import Image from "next/image";
import styles from "@/app/personalized/personalized.module.css";

function Personalized() {
  return (
    <div>
      <div className={styles.textos}>
          <h1>Creá tu propia Cookie</h1>  
          <input
          className={styles.input}
        type="text"
        placeholder="Nombre de la cookie..."
      />
      </div>
      <div className="flex gap-16 items-center justify-evenly">
        <div>
          <Image
            src={`/imgs/personalizada/masa/nada.png`}
            alt="cookie nada"
            width={417}
            height={395}
            className="w-4/5"
          />
        </div>
        <div className="flex flex-col gap-6">
          <div className={styles.custom}>
            <h4>Masa</h4>
          </div>
          <div>
           <button className={styles.btn}>Siguiente</button> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personalized;
