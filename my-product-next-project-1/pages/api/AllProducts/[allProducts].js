import { getOneProductsById1 } from "@/services/products";
export default function handler(req, res) {
    if(req.method === "GET") {
        const {allProducts} = req.query;
        const product = getOneProductsById1(Number(allProducts));
        
    return res.status(200).json(product);
    }
    return res.status(404).json({ message: "Not found" });
}