import { ThemeProvider, createTheme } from "@mui/material/styles";
import { createContext, useContext, useMemo, useState } from "react";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const useColorMode = () => useContext(ColorModeContext);

function ColorProvider({ children }) {
  const [colorMode, setColorMode] = useState("light");
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
