import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ManageProducts from "./Components/ManageProducts";
import ListProduct from "./Components/ListProduct";

function App() {
  const [products, setProducts] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ManageProducts setProducts={setProducts} products={products} />}/>
        <Route path="/list" element={<ListProduct products={products} />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
