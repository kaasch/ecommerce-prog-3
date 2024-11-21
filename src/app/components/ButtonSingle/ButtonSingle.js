'use client'
import Image from 'next/image'
import { usePersonalizationContext } from '@/app/contexts/PersonalizationContext';

const ButtonSingle = ({item, type}) => {
  const { selectMasa, toggleChip, toggleTopping } = usePersonalizationContext();

  const handleClick = () => { //fc verifica el valor de type y de acuerdo a eso ejecuta diferentes funciones
    if (type === 'masa') selectMasa(item);
    else if (type === 'chips') toggleChip(item);
    else if (type === 'topping') toggleTopping(item);
  };


  return (
    <div 
    onClick={handleClick}
    className='flex flex-col justify-center text-center items-center gap-2 rounded-md py-2 px-5 hover:bg-zinc-400 transition-all cursor-pointer'>
    <Image
    src={`/imgs/personalizada/${type}/${item.image}`}
    alt={item.name}
    width={80}
    height={80}
  />
  <h5 className='font-normal text-zinc-700 text-sm'>{item.name}</h5>
  </div>
  )
}

export default ButtonSingle