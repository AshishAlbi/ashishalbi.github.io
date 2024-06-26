import { Paper } from "@mui/material";
import "./App.css";
import ColorProvider from "./components/ColormodeContext";
import Home from "./pages/Home";

function App() {
  return (
    <ColorProvider>
      <Paper elevation={0} sx={{width:'100vw'}}>
        <Home />
      </Paper>
    </ColorProvider>
  );
}

export default App;
