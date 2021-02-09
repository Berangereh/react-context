import React from "react";
import ThemeChoice from './ThemeChoice'
import logo from './logo-github.png';

// Composant en deuxième ligne
// Il reçoit dans ses props le thème et la fonction qui permet de le changer
// Notons qu'en vrai il en a rien à foutre il s'en sert pas lui même
// C'est uniquement pour pouvoir le passer au composant ThemeChoice ...
function ToolBar(props) {
    return (
      <div>
          <h1>Portfolio de John Doe</h1>
            <img src={logo} alt="logo" href="https://github.com/benedictebcl" className="logo"/>
        <ThemeChoice />
      </div>
    );
  }

export default ToolBar