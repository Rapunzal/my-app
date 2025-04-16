import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { CounterProvider, ThemeProvider } from "./context/CounterContext.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <CounterProvider>
      <BrowserRouter>
        <StrictMode>
          <App />
        </StrictMode>
      </BrowserRouter>
    </CounterProvider>
  </ThemeProvider>
);
