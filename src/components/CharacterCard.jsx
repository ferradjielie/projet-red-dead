import CharacterQuote from "./CharacterQuote";
import { Link } from "react-router-dom";


//import legendaryBear from '../assets/ours-legendaire.webp';
 function CharacterCard(props) {
    if (!props.id) {
        return <p>Identifiant manquant pour ce personnage</p>;  // Message d'erreur si l'ID n'est pas défini
      }
    return (
        
     <main >
      
       <article className="card-chararcter-content">
       

       <hr />
            <img className="icon-style"
                src={props.img.src} 
                alt={props.img.alt} 
        
           />
            <span className="name"> {props.name} </span>
            <CharacterQuote quote={props.quote} />
            <p> {props.resume}</p>
            <Link to={`/character/${props.id}`}>Voir plus</Link> {/* Lien vers la page détail */}
          
        </article>

     


     
     


     </main>

        
    )
}

export default CharacterCard;