import { getAllProducs1 } from "@/services/products"

export default function handler(req, res) {
    // render all products as a cards
    if(req.method === "GET") {
        const product = getAllProducs1();
        res.status(200).json(product);
    }
}