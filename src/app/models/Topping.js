import mongoose, { Schema } from "mongoose";

const toppingSchema = new Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
  });
  
  const Topping = mongoose.models.Topping || mongoose.model("Topping", toppingSchema);
 export default Topping;