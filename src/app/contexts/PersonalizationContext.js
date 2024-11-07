'use client';
import { createContext, useContext, useState } from "react";

const PersonalizationContext = createContext();

export function PersonalizationProvider({ children }) {
  const [selectedMasa, setSelectedMasa] = useState(null); //no se va llenando el array, sino que se selecciona una masa sola, semaneja un unico valor. null para que arranque en cero con la imagen de base
  const [selectedChips, setSelectedChips] = useState([]); //acumulativo
  const [selectedToppings, setSelectedToppings] = useState([]); //seleccionado o sino cambia el estado

  const selectMasa = (masa) => setSelectedMasa(masa);
  
  const toggleChip = (chip) => { //array vacio
    setSelectedChips((prev) => //recibe la info de selectedchip (prev) y devuelve un nuevo array para el state
      prev.includes(chip) //verifica si chip ya existe en el array selectedchips
      //si TRUE es para eliminar. se filtra el array prev para sacar el chip actual y dsp se crea uno nuevo
      //si es FALSE es para agregar, entonces toma los elementos del array previo y los nuevos y agrega con el spread operator
      ? prev.filter((c) => c !== chip) : [...prev, chip]
    );
  };

  const toggleTopping = (topping) => {
    setSelectedToppings((prev) =>
      prev.includes(topping)
     ? prev.filter((t) => t !== topping) : [...prev, topping]
    );
  };

  return (
    <PersonalizationContext.Provider 
    value={{
    selectedMasa,
     selectMasa,
      selectedChips, 
      toggleChip, 
      selectedToppings, 
      toggleTopping }}>
      {children}
    </PersonalizationContext.Provider>
  );
}

export function usePersonalizationContext() {
    const context = useContext(PersonalizationContext);
    if (!context) {
      throw new Error(
        'usePersonalizationContext debe usarse dentro del PersonalizationContextProvider'
      );
    }
    return context;
}
