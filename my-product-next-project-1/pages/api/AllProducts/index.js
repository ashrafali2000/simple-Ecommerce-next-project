import { getAllProducs1,getCommentById1 } from "@/services/products"

export default function handler(req, res) {
    // render all products as a cards
    if(req.method === "GET") {
        const product = getAllProducs1();
        res.status(200).json(product);
    }
    if (req.method === "POST") {
        const {myKey,comment } = req.body;
        const updatedComments = getCommentById1(myKey,comment);
        // console.log(id, comment);
        return res.status(201).json(updatedComments);
      }
      return res.status(404).json({message:"NOT  FOND"});
}

  
