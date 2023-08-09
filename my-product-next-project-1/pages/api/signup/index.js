import { getAllAccounts ,signUp } from "@/services/products";

  //   sign-up
  export default function handler(req, res) {
  if(req.method === "GET") {
    const mydata = getAllAccounts();
  //   console.log(mydata)
    res.status(200).json(mydata);
  }

     if (req.method === "POST") {
        const {name, email,password} = req.body;
        const updatedProducts = signUp(name, email,password);
        return res.status(201).json(updatedProducts);
      }
}

