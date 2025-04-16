import { createContext, useState } from "react";

const CounterContext = createContext({
  count: 0,
  setCount: () => {},
});

const ThemeContext = createContext({
  theme: "light",
  setTheme: () => {},
});

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
};
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { CounterContext, CounterProvider, ThemeContext, ThemeProvider };
