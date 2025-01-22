
//import legendaryBear from '../assets/ours-legendaire.webp';
 function CharacterCard(props) {
    return (
        
     <main >
       <article className="card-chararcter-content">
            <img className="icon-style"
                src={props.img.src} 
                alt={props.img.alt} 
        
           />
            <span> {props.name} </span>
            <p> {props.resume}</p>
       
        </article>

     


     
     


     </main>

        
    )
}

export default CharacterCard;