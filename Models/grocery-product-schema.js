import mongoose from "mongoose";
const schema = mongoose.Schema;

const grocery_product_schema = new schema({
  brand: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  type_of: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
});

const grocery_schema = mongoose.model("grocery", grocery_product_schema);
export default grocery_schema;
