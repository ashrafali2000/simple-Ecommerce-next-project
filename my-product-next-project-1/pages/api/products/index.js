import { getAllProducs, addProduct } from "@/services/products"

export default function handler(req, res) {
    if(req.method === "GET") {
        const product = getAllProducs();
        res.status(200).json(product);
    }
    if (req.method === "POST") {
        const {title,description,price, discountPercentage, rating,stock,brand,category,images } = req.body;
        const updatedProducts = addProduct(title,description,price, discountPercentage, rating,stock,brand,category,images);
        return res.status(201).json(updatedProducts);
      }
    //   if(req.method === "PUT"){
    //    const product = getCommentById()
    //   }
      return res.status(404).json({message:"NOT FOND"});
  }