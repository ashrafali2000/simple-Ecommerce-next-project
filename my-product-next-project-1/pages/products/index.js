import CardsAllProduct from "../cardsAllProducts/CardsAllProduct"
import Link from "next/link"
import { useState, useEffect } from "react";
export default function Prodcuts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch("/api/AllProducts/")
        .then((res) => res.json())
        .then((p) => setProducts(p.products));
        // console.log(p.products);
    }, []);
    {/* All card rendering */}
    return(
<div className="allProducts-Container ">
  <div><Link href={"#"}  className="inline-block  rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700">New Products</Link></div>
   <div className="allProducts">
     {products.map(product => <CardsAllProduct key={product.id} img = {product.images[0]} title = {product.title} stock = {product.stock} price={product.price} myKey={product.id}/> )}
   </div>
   </div>
    )
}