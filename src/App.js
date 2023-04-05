import logo from "./logo.svg";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then(res => setProducts(res.data.products))
      .catch(error => console.log(error.message));
  }, []);

  //Async and Await
  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      let res = await axios.post("https://dummyjson.com/products/add", {
        title: formData.get("title")
      });
      setProducts([res.data, ...products]);
    } catch (err) {
      console.log(err.message);
    }

    form.reset();
    form.querySelector("input").focus();
  };

  //Promise
  /*const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    axios
      .post("https://dummyjson.com/products/add", {
        title: formData.get("title")
      })
      .then(res => setProducts([res.data, ...products]))
      .catch(err => console.log(err.message));

    form.reset();
    form.querySelector("input").focus();
  };*/

  return (
    <div>
      <h1>List products with their posts</h1>

      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" />
          <button type="submit">Ajouter un produit</button>
        </form>
      </div>

      <ul>
        {products.map(product => (
          <DisplayUser product={product} key={product.id} />
        ))}
      </ul>
    </div>
  );
}

function DisplayUser({ product }) {
  return <li>{product.title}</li>;
}

export default App;
