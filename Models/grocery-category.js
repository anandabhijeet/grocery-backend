import mongoose from "mongoose";
const schema = mongoose.Schema;

const grocery_category_schema = new schema({
    category:{
        type: String,
        require: true
    }
})

const category_schema = mongoose.model("category", grocery_category_schema);
export default category_schema;