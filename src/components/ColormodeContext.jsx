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
    [],
  );
  const theme = useMemo(
    () =>
      createTheme({
        palette: { mode: colorMode },
      }),
    [colorMode],
  );
  return (
    <ColorModeContext.Provider value={color}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default ColorProvider;
