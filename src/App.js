import React, {useEffect, useState} from "react";
import './App.css';
import Button from './Button';
import searchProducts from "./searchProducts";

var count = 0;

function App() {
  const [divs, setDivs] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => searchProducts().then(p => setProducts(p.data)), []);

  function createDiv() {
    setDivs(divs.concat([<div key={count}>div #{count++}</div>]))
  }
  return (
    <div>
      <Button onClick={() => createDiv()}>hola</Button>
      {divs}
      {products.map(product => <div style={{display: "block"}} key={product.id}>{product.attributes.titles.en_jp}</div>)}
    </div>
  );
}
export default App;