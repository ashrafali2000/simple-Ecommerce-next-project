import { getAllProducs, addProduct} from "@/services/products"

export default function handler(req, res) {
    // render all products as a cards
    if(req.method === "GET") {
        const product = getAllProducs();
        res.status(200).json(product);
    }
    // creating products
    if (req.method === "POST") {
        const {title,description,price, discountPercentage, rating,stock,brand,category,images } = req.body;
        const updatedProducts = addProduct(title,description,price, discountPercentage, rating,stock,brand,category,images);
        return res.status(201).json(updatedProducts);
      }

        return res.status(404).json({message:"NOT  FOND"});
  }