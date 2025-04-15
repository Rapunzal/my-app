import { useState } from "react";

import "./App.css";
import { Products } from "./components/Products";
import { Routes, Route } from "react-router-dom";
import Counter from "./Counter";
import Navbar from "./components/Navbar";
import Parent from "./components/Parent";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/products" element={<Products />} />
        <Route path="/context" element={<Parent />} />
      </Routes>
    </div>
  );
}

export default App;
