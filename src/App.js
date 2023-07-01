import React, { useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Products from "./Components/Products/Products";
import AddProduct from "./Components/AddProduct/addProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/products/add" element={<AddProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
