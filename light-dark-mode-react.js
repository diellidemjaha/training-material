import React, { createContext, useState, useContext } from "react";

// 1. Krijo Context
const ThemeContext = createContext();

// 2. Krijo Provider
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Përdor useContext
function ThemedComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const style = {
    background: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    padding: "20px",
    textAlign: "center"
  };

  return (
    <div style={style}>
      <h2>Aktualisht: {theme} mode</h2>
      <button onClick={toggleTheme}>Ndrysho Temën</button>
    </div>
  );
}

// 4. App kryesor
function App() {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
}

export default App;
