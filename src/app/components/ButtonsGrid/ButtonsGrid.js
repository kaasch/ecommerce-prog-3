"use client";

import ButtonSingle from "@/app/components/ButtonSingle/ButtonSingle";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ButtonsGrid() {
  const [masas, setMasas] = useState([]);
  const [chips, setChips] = useState([]);
  const [toppings, setToppings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [step, setStep] = useState(0);

  const handlePrev = () => {
    if(step > 0) setStep( step - 1)
  }
  const handleNext = () => {
    if (step < 2 ) setStep( step + 1)
  }



  const getData = async () => {
    setLoading(true);
    try {
      const masaResponse = await axios.get("/api/masa");
      const chipsResponse = await axios.get("/api/chips");
      const toppingResponse = await axios.get("/api/topping");
      setMasas(masaResponse.data.masa);
      setChips(chipsResponse.data.chips);
      setToppings(toppingResponse.data.topping);
      setLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className=" flex justify-center text-center">

      {step === 0 && (
        <div className="mb-2">
          <div className="py-2 flex justify-center text-center">
             <button onClick={() => handlePrev()} disable={true} className="cursor-not-allowed">       
         <Image
          src={`/imgs/personalizada/flechas/prev-disabled.svg`}
          alt={"prev flecha"}
          width={10}
          height={10}
        /></button>
        <h3 className="text-primary-color px-8 py-6 font-medium">Masas</h3>
        <button onClick={() => handleNext()}>     
          <Image
          src={`/imgs/personalizada/flechas/next.svg`}
          alt={"next flecha"}
          width={10}
          height={10}
        /></button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-3">
            {!loading &&
              masas.map((item) => (
                <ButtonSingle key={item._id} item={item} type="masa" />
              ))}
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="mb-2">
        <div className="flex justify-center text-center">
           <button onClick={() => handlePrev()}>       
       <Image
        src={`/imgs/personalizada/flechas/prev.svg`}
        alt={"prev flecha"}
        width={10}
        height={10}
      /></button>
      <h3 className="text-primary-color px-8 py-6 font-medium">Chips </h3>
      <button onClick={() => handleNext()}>     
        <Image
        src={`/imgs/personalizada/flechas/next.svg`}
        alt={"next flecha"}
        width={10}
        height={10}
      /></button>
        </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-3">
            {!loading &&
              chips.map((item) => (
                <ButtonSingle key={item._id} item={item} type="chips" />
              ))}
          </div>
        </div>
      )}
      {step === 2 && (
        <div className="mb-2">
          <div className="flex justify-center text-center">
             <button onClick={() => handlePrev()}>       
         <Image
          src={`/imgs/personalizada/flechas/prev.svg`}
          alt={"prev flecha"}
          width={10}
          height={10}
        /></button>
        <h3 className="text-primary-color px-8 py-6 font-medium">Toppings </h3>
        <button onClick={() => handleNext()}  className="cursor-not-allowed">     
          <Image
          src={`/imgs/personalizada/flechas/next-disabled.svg`}
          alt={"next flecha"}
          width={10}
          height={10}
        /></button>
          </div>
        
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-3">
            {!loading &&
              toppings.map((item) => (
                <ButtonSingle key={item._id} item={item} type="topping" />
              ))}
          </div>
        </div>
      )}
    </section>
  );
}
