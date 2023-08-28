import { getAllProducs, addProduct,getCommentById, getAllAccounts } from "@/services/products"

export default function handler(req, res) {
    // render all products as a cards
    if(req.method === "GET") {
        const product = getAllProducs();
        res.status(200).json(product);
    }
    
 // creating comment
    if (req.method === "POST") {
        const {myKey,comment } = req.body;
        const updatedComments = getCommentById(myKey,comment);
        return res.status(201).json(updatedComments);
      }
        return res.status(404).json({message:"NOT  FOND"});
  }


