import React, { useContext } from "react";
import ThemeContext from './ThemeContext'



// Composant en fin de chaine
// Il reçoit dans ses props le thème et la fonction qui permet de le changer
function ThemeChoice(props) {
    const { theme, updateTheme } = useContext(ThemeContext);
  
    const handleChange = (event) => {
      const value = event.currentTarget.value;
      updateTheme(value);
    };
  
    return (
      <select name="theme" defaultValue={theme} onChange={handleChange}>
        <option value="dark">Sombre</option>
        <option value="light">Clair</option>
      </select>
    );
  }

export default ThemeChoice