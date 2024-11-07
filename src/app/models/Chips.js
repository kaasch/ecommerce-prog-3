import mongoose, { Schema } from "mongoose";

const chipsSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
});

 const Chips =
   mongoose.models.Chips || mongoose.model("Chips", chipsSchema);
 export default Chips;