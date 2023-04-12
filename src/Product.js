import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export function Product() {
  const [product, setProduct] = useState({});
  let param = useParams();

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/" + param.id)
      .then(res => setProduct(res.data))
      .catch(error => console.log(error.message));
  }, []);

  return (
    <div className="container">
      <h4>Product Details #{product.id}</h4>
      <ul>
        <li>{product.title}</li>
        <li>{product.description}</li>
        <li>{product.price}</li>
        <li>{product.discountPercentage}</li>
        <li>{product.rating}</li>
        <li>{product.stock}</li>
        <li>{product.brand}</li>
        <li>{product.category}</li>
      </ul>
    </div>
  );
}
