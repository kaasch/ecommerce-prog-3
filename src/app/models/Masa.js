import mongoose, { Schema } from "mongoose";

const masaSchema = new Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
  });
  
  const Masa = 
    mongoose.models.Masa || mongoose.model("Masa", masaSchema);
 export default Masa;

