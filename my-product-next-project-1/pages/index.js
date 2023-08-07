import { useState, useEffect } from "react"
import Products from "./products/Products";
export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((p) => setProducts(p.products));
  }, []);
  return (
   <div className="allProducts">
     {products.map(product => <Products key={product.id} img = {product.images[0]} title = {product.title} stock = {product.stock} price={product.price} /> )}
   </div>
  )
}
