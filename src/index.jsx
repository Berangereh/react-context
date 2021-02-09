import React, { useState } from "react";
import ReactDOM from "react-dom";

import ThemeContext from "./ThemeContext";
import ToolBar from './ToolBar';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';


import "./styles.css";




function App() {
  // Le thème est en fait une classe CSS qui englobera notre app
  // Ca change juste le couleur de la typo ...
  const [theme, setTheme] = useState("light");

  const contextValue = {
    theme,
    updateTheme: setTheme
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <div className={theme}>
        <ToolBar />
        <p>Theme utilisé : {theme}</p>
        <Home />
      </div>
    </ThemeContext.Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
