import CharacterQuote from "./CharacterQuote";


//import legendaryBear from '../assets/ours-legendaire.webp';
 function CharacterCard(props) {
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
       
        </article>

     


     
     


     </main>

        
    )
}

export default CharacterCard;