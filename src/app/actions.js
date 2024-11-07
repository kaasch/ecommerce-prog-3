import axios from 'axios';
import Product from "@/app/models/Product";
import Chips from "@/app/models/Chips"
import Masa from "@/app/models/Masa"
import Topping from "@/app/models/Topping"
import dbConnect from '@/app/database/dbConnect'

const getAllProducts = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/products');
    return response.data.products;
  } catch (error) {
    console.log(error);
  }
};

const getOneProduct = async (id) => {
 
  try {
    const response = await axios.post('http://localhost:3000/api/products', {
      id,
    });
    return response.data.products;
  } catch (error) {
    console.log(error);
  }
};

export async function getAllProductsDB() {
  await dbConnect();
  try {
    const products = await Product.find().sort({ name: "asc" });
   
    return { products: JSON.parse(JSON.stringify(products)) };
  } catch (error) {
    
    return { products: [], category: null };
  }
}

export async function getOneProductDB(id){
  await dbConnect();
  try{
    const product = await Product.findById(id)
    return{product: JSON.parse(JSON.stringify(product))};
  } catch(error){
    console.log(error);
    return null;
  }
}

export async function getAllMasaDB() {
  await dbConnect();
  try {
    const masa = await Masa.find();
    console.log("Data fetched from Masa collection:", masa); 
    return { masa: JSON.parse(JSON.stringify(masa)) };
  } catch (error) {
    console.error("Error fetching Masa data:", error); 
    return { masa: [], category: null };
  }
}



export async function getAllChipsDB() {
  await dbConnect();
  try {
    const chips = await Chips.find();
   
    return { chips: JSON.parse(JSON.stringify(chips)) };
  } catch (error) {
    
    return { chips: [], category: null };
  }
}


export async function getAllToppingDB() {
  await dbConnect();
  try {
    const topping = await Topping.find();
   
    return { topping: JSON.parse(JSON.stringify(topping)) };
  } catch (error) {
    
    return { topping: [], category: null };
  }
}
export { getAllProducts, getOneProduct };
