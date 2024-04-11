import { createContext } from "react";
import all_product from "../data/all_product";

const ThemeContext = createContext(null);

export function DataContext({ children }) {
  return (
    <ThemeContext.Provider value={all_product}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
