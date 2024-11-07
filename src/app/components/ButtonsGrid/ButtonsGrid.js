
import ButtonSingle from '@/app/components/ButtonSingle/ButtonSingle';
import { getAllChipsDB, getAllMasaDB, getAllToppingDB } from '@/app/actions';

export default async function ButtonsGrid() {
    const  masaResponse = await getAllMasaDB()
    const  chipsResponse = await getAllChipsDB()
    const  toppingResponse = await getAllToppingDB()

  console.log("masa",await getAllMasaDB(), "chips",chipsResponse, "topping",toppingResponse)
  return (
    <section>
      <div className="mb-12">
        <h3 className="text-primary-color px-8 py-6 font-medium">Chips</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-3">
          {chipsResponse.chips && chipsResponse.chips.map((item) => (
            <ButtonSingle key={item._id} item={item} type="chips" />     
          ))}
        </div>
      </div>

       <div className="mb-12">
        <h3 className="text-primary-color px-8 py-6 font-medium">Masa</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-3">
          {masaResponse.masa && masaResponse.masa.map((item) => (
            <ButtonSingle key={item._id} item={item} type="masa"/>     
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h3 className="text-primary-color px-8 py-6 font-medium">Toppings</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-3">
          {toppingResponse && toppingResponse.topping.map((item) => (
            <ButtonSingle key={item._id} item={item} type="topping"/>     
          ))}
        </div>
      </div> 
    </section>
  );
}