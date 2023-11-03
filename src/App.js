import { HashRouter, Routes, Route } from "react-router-dom";
import Mainbody from "./components/Mainbody";
import Layout from "./components/Layout";
import { createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { ColorModeContext } from "./context/ColorModeContext";

const switchtheme = (theme) => {
  return createTheme({
    palette: {
      mode : theme
    }
  })
}

function App() {

  const [theme, setTheme] = useState('light')

  return (
    <ColorModeContext.Provider value={setTheme}>
      <ThemeProvider theme={switchtheme(theme)}>
        <HashRouter>
            <Routes>
              <Route path="/" element={<Layout/>}>
                <Route path="" element={<Mainbody/>}></Route>
              </Route>
            </Routes>
        </HashRouter>
        </ThemeProvider>
      </ColorModeContext.Provider>
  );
}

export default App;
