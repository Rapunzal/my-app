import { useContext, useState } from "react";

import "./App.css";
import { Products } from "./components/Products";
import { Routes, Route } from "react-router-dom";
import Counter from "./Counter";
import Navbar from "./components/Navbar";
import Parent from "./components/Parent";
import { ThemeContext } from "./context/CounterContext";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      style={{
        fontSize: theme === "light" ? "20px" : "40px",
        backgroundColor: theme === "light" ? "#fff" : "#000",
        color: theme === "light" ? "blue" : "yellow",
      }}
    >
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
