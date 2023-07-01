import React, { useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Products from "./Components/Products/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
