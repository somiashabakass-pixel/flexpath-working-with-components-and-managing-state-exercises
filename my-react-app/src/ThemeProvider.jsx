import { useState } from "react";
import ThemeContext from "./ThemeContext";

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    // ThemeContext.Provider makes the theme available to ALL children
    // Any component inside ThemeProvider can read theme + toggleTheme
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* children means whatever we wrap inside <ThemeProvider> */}
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
