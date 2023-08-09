import { getCommentBySingleId,getCommentById } from "@/services/products";
// export default function handler(req, res) {
//     if(req.method === "GET") {
//         const {productDetails} = req.query;
//         const product = getCommentById(Number(productDetails));
//     return res.status(200).json(product);
//     }
//     return res.status(404).json({ message: "Not found" });
// }



export default function handler(req, res) {
    if(req.method === "GET") {
        const {productDetails} = req.query;
        const product = getCommentBySingleId(Number(productDetails));
        
    return res.status(200).json(product);
    }
    return res.status(404).json({ message: "Not found" });
}

