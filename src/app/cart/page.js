import ProductsCheckout from "@/app/components/cart/ProductsCheckout";
import FormCheckout from "@/app/components/cart/FormCheckout";

const page = () => {
  return (
    <section className=" mt-4 mb-12">
  
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-6 ml-28">
            <FormCheckout />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <ProductsCheckout />
          </div>
        </div>
      
    </section>
  );
};

export default page;
