'use client';

import ButtonSingle from '@/app/components/ButtonSingle/ButtonSingle';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function ButtonsGrid() {
  const [masas, setMasas] = useState([]);
  const [chips, setChips] = useState([]);
  const [toppings, setToppings] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    setLoading(true)
    try {
      const masaResponse = await axios.get('/api/masa');
      const chipsResponse = await axios.get('/api/chips');
      const toppingResponse = await axios.get('/api/topping');
      setMasas(masaResponse.data.masa);
      setChips(chipsResponse.data.chips);
      setToppings(toppingResponse.data.topping);
      setLoading(false)
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section>
      <div className='mb-12'>
        <h3 className='text-primary-color px-8 py-6 font-medium'>Chips</h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-3'>
          {!loading &&
            chips.map((item) => (
              <ButtonSingle key={item._id} item={item} type='chips' />
            ))}
        </div>
      </div>

      <div className='mb-12'>
        <h3 className='text-primary-color px-8 py-6 font-medium'>Masa</h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-3'>
          {!loading &&
            masas.map((item) => (
              <ButtonSingle key={item._id} item={item} type='masa' />
            ))}
        </div>
      </div>

      <div className='mb-12'>
        <h3 className='text-primary-color px-8 py-6 font-medium'>Toppings</h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-3'>
          {!loading &&
            toppings.map((item) => (
              <ButtonSingle key={item._id} item={item} type='topping' />
            ))}
        </div>
      </div>
    </section>
  );
}
