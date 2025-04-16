import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext, ThemeProvider } from "../context/CounterContext";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const changeTheme = () => {
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <div>
      <button className="btn" onClick={changeTheme}>
        Change Theme
      </button>
      <ul className="nav">
        <li>
          <Link to="/">Counter</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/context">Context</Link>
        </li>
        <li>
          <Link to="/reducer">Context</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
