import { getSingleProducsById } from "@/services/products";
export default function handler(req, res) {
    if(req.method === "GET") {
        const {productDetails} = req.query;
        const product = getSingleProducsById(Number(productDetails));
    return res.status(200).json(product);
    }
    return res.status(404).json({ message: "Not found" });
}

