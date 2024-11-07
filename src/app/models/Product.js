import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  description:{ type: String, required: true }, 
  image: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
 
});

 const Product =
   mongoose.models.Product || mongoose.model("Product", productSchema);
 export default Product;