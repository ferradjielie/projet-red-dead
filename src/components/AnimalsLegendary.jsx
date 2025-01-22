function LegendaryAnimals(props) {
    
    return(
    <div>
            <article className="card-chararcter-content">
        <img className="icon-style"
            src={props.img.src} 
            alt={props.img.alt} 
        
        />
       <span> {props.name} </span>
       <p> {props.resume}</p>
       <p>{props.location}</p>
       
       
       

    </article>
     

    </div>
     )
}
export default LegendaryAnimals