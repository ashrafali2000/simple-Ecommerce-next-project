import { getAllProducs } from "@/services/products"

export default function handler(req, res) {
    if(req.method === "GET") {
        const product = getAllProducs();
        res.status(200).json(product);
    }
  }