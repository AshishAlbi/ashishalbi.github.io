import { ThemeProvider, createTheme } from "@mui/material/styles";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const useColorMode = () => useContext(ColorModeContext);

function ColorProvider({ children }) {
  const [colorMode, setColorMode] = useState("");

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setColorMode(mediaQuery.matches?'dark':'light')
    const handleChange = (e) => {
      setColorMode(e.matches?'dark':'light')
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  const color = useMemo(
    () => ({
      toggleColorMode: () => {
        setColorMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  const darkTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: "dark",
          background: { default: "black", paper: "black" },
        },
      }),
    [colorMode]
  );
  const lightTheme = useMemo(
    () => createTheme({ palette: { mode: "light" } }),
    [colorMode]
  );

  return (
    <ColorModeContext.Provider value={color}>
      <ThemeProvider theme={colorMode == "light" ? lightTheme : darkTheme}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default ColorProvider;
