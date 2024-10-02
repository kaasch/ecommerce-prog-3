'use client'
import React from 'react';
import { useAppContext } from '@/app/contexts/AppContext';
import Hero from '@/app/components/Hero/Hero';
import FirstSection from '@/app/components/FirstSection/FirstSection';
// import SectionCard from '@/app/components/SectionCard/SectionCard';


export default function Home() {
  const {cart} = useAppContext();
  console.log(cart)
  return (
    <div>
      <Hero mainText={'Probá el sabor más rico en un bocado'} secondaryText={'Nuestras galletas están hechas con los mejores ingredientes que se siente en cada mordida. Perfectas para darte un gustito o para compartir con quienes más querés!'} />
      {/* <SectionCard  key={index} item={item} /> */}
      <FirstSection sectionThreeText={'Obtené un 10% de descuento en tu primera compra!'}/>
    </div>
  );
}
