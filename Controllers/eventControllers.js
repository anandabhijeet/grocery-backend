import grocery_schema from "../Models/grocery-product-schema.js";
import category_schema from "../Models/grocery-category.js";

export const getGroceries = (req, res) => {
 try{
    grocery_schema.find((error, data) => {
        if (error)
          res.status(404).json({
            message: "Not found",
          });
    
        res.status(200).json({
          message: "success",
          data: data,
        });
      });
 }catch(error){
    res.status(404).send(error);
 }
};

export const getCategories = (req, res)=>{
  try{
    category_schema.find((error, data)=>{
      if(error){
        res.status(404).json({
          message: "Not Found"
        })
      }

      res.status(200).json({
        data:data
      })
    })

  }catch(error){
    res.status(404).send(error)
  }
}
