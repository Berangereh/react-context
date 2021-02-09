import React from "react";
import ikea from "./ikea.png";
import amazon from "./amazon.png";

// Composant en deuxième ligne
// Il reçoit dans ses props le thème et la fonction qui permet de le changer
// Notons qu'en vrai il en a rien à foutre il s'en sert pas lui même
// C'est uniquement pour pouvoir le passer au composant ThemeChoice ...
function Home(props) {
    return (
      <div>
            <h2>Bonjour, je m'appelle John Doe. Bienvenue sur mon portfolio !</h2>
            <p>Depuis quelques mois, j'apprends le développement web grâce à The Hacking Projet. J'ai ainsi pu apprendre à utiliser Ruby, Rails, JavaScript et React.</p>
            <p>Vous pourrez trouver ci-dessous la liste de mes projets. J'en ai réalisé certains lors de ma formation chez The Hacking Project, et d'autres sont des projets personnels.</p>
           <div className="card-group">
                <div className="card" style={{width: 500}}>
                    <h3>Projet n°1</h3>
                    <img src={ikea} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
                <div className="card" style={{width: 500}}>
                    <h3>Projet n°2</h3>
                    <img src={amazon} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
                <div className="card" style={{width: 500}}>
                    <h3>Projet n°3</h3>
                    
                    <div className="card-body">
                        <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>

            </div>
            <div className="container">
            <form>
                <p>Vous souhaitez discuter avec moi, que ce soit pour me proposer un poste ou pour passer le temps pendant ce confinement ? Remplissez le formulaire ci-dessous, je vous contacterai dès que je le peux.</p>
                <div className="mb-3">
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
            
      </div>
    );
  }

export default Home