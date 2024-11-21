"use client";

import Image from "next/image";
import styles from "@/app/personalized/personalized.module.css";
import ButtonsGrid from "@/app/components/ButtonsGrid/ButtonsGrid";
import { usePersonalizationContext } from "@/app/contexts/PersonalizationContext";
import { useAppContext } from "@/app/contexts/AppContext";

function PersonalizedSingle() {
  const {
    selectedMasa,
    selectedChips,
    selectedToppings,
    cookieName,
    setCookieName,
    personName,
    setPersonName

  } = usePersonalizationContext();

  const {setUserCookies} = useAppContext();

  const handleCookieName = (event) => {
    setCookieName(event.target.value); // actualiza name en el contextPersonalization
  };

  const handlePersonName = (event) => {
    setPersonName(event.target.value);     
  };

  const submitPersonalization = () => {
    setUserCookies([cookieName, personName, selectedMasa, selectedChips, selectedToppings]) //almacena en el appContext
    
  }

  return (
    <div className="flex flex-col">
      <div className={styles.textos}>
        <h1>Creá tu propia Cookie</h1>
        <input
          className={styles.input}
          type="text"
          placeholder="Nombre de la cookie..."
          value={cookieName} // se asocia el valor del input al estado del contexto
          onChange={handleCookieName} // se actualiza el state
          required
        />
         <input
          className={styles.input_dos}
          type="text"
          placeholder="Nombre del artista..."
          value={personName}
          onChange={handlePersonName} 
          required
        />
      </div>
  
      <div className="flex gap-16 items-center justify-evenly">
        <div className="relative">
          <Image
            src={`/imgs/personalizada/masa/${
              selectedMasa ? selectedMasa.image : "nada.png"
            }`} //si selectedmasa es true mostrar eso y sino nada
            alt="cookie nada"
            width={380}
            height={360}
          />

          {selectedChips.map((chip, index) => (
            <Image
              key={index}
              src={`/imgs/personalizada/chips/${chip.image}`}
              alt={chip.name}
              width={380}
              height={360}
              className="absolute top-0 left-0"
            />
          ))}
          {selectedToppings.map((topping, index) => (
            <Image
              key={index}
              src={`/imgs/personalizada/topping/${topping.image}`}
              alt={topping.name}
              width={380}
              height={360}
              className="absolute top-0 left-0"
            />
          ))}
        </div>
        <div className="flex flex-col gap-6">
          <div className={styles.custom}>
            <ButtonsGrid/>
          </div>
          <div>
            <button className={styles.btn} onClick={submitPersonalization}>Siguiente</button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default PersonalizedSingle;
