'use client'

import Image from "next/image";
import styles from "@/app/personalized/personalized.module.css";
import ButtonsGrid from "@/app/components/ButtonsGrid/ButtonsGrid";
import { usePersonalizationContext } from '@/app/contexts/PersonalizationContext';

function PersonalizedSingle() {
  const { selectedMasa, selectedChips, selectedToppings } = usePersonalizationContext();

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
        <div className="relative">
          <Image
            src={`/imgs/personalizada/masa/${selectedMasa ? selectedMasa.image : 'nada.png'}`} //si selectedmasa es true mostrar eso y sino nada
            alt="cookie nada"
            width={417}
            height={395}
            className="w-4/5"
          />
           {selectedChips.map((chip, index) => (
            <Image
              key={index}
              src={`/imgs/personalizada/chips/${chip.image}`}
              alt={chip.name}
              width={50}
              height={50}
              className="absolute top-0 left-0"
            />
          ))}
          {selectedToppings.map((topping, index) => (
            <Image
              key={index}
              src={`/imgs/personalizada/toppings/${topping.image}`}
              alt={topping.name}
              width={50}
              height={50}
              className="absolute top-0 left-0"
            />
          ))}
        </div>
        <div className="flex flex-col gap-6">
          <div className={styles.custom}>
            <ButtonsGrid/>
          </div>
          <div>
           <button className={styles.btn}>Siguiente</button> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalizedSingle;
