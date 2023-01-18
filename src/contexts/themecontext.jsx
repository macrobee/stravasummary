import { createContext, useState } from "react";

const themeColors = {
  light: {
    main: "#FC5301",
    background: "#FFFFFF",
    text: "#333333",
    buttonClicked: "#C94100",
  },
  dark: {
    main: "#FC5301",
    background: "#333333",
    text: "#FFFFFF",
    buttonClicked: "#C94100",
  },
};

export const ThemeContext = createContext({
  currentThemeColors: null,
  toggleThemeColors: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [currentThemeColors, setThemeColors] = useState(themeColors.light);
  const toggleThemeColors = () => {
    setThemeColors(
      currentThemeColors === themeColors.light
        ? themeColors.dark
        : themeColors.light
    );
  };
  const value = { currentThemeColors, toggleThemeColors };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
