import { getAllAccounts } from "@/services/products";
export default function handler(req, res) {
    if(req.method === "GET") {
      const mydata = getAllAccounts();
    //   console.log(mydata)
      res.status(200).json(mydata);
    }
}