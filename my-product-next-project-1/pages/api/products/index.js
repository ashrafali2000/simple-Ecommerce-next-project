import { getAllProducs, addProduct,getCommentById } from "@/services/products"

export default function handler(req, res) {
    if(req.method === "GET") {
        const product = getAllProducs();
        res.status(200).json(product);
    }
    // if (req.method === "POST") {
    //     const {title,description,price, discountPercentage, rating,stock,brand,category,images } = req.body;
    //     const updatedProducts = addProduct(title,description,price, discountPercentage, rating,stock,brand,category,images);
    //     return res.status(201).json(updatedProducts);
    //   }
    if (req.method === "POST") {
        const {myKey,comment } = req.body;
        const updatedProducts = getCommentById(myKey,comment);
        // console.log(id, comment);
        return res.status(201).json(updatedProducts);
      }
      return res.status(404).json({message:"NOT  FOND"});
  }