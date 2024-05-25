// src/contexts/AppContext.js
import React, { createContext, useState } from "react";

// Create the context with a default value
export const AppContext = createContext();

// Create a provider component
export const AppContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // Default to light theme

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
