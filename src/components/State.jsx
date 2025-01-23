function State(props) {
    return ( 
        <article className="card-chararcter-content">
        <img className="icon-style"
            src={props.img.src} 
            alt={props.img.alt} 
        
        />
       <span className="name"> {props.name} </span>
       <p> {props.resume}</p>
       
    
    
    
        </article>
    
        )
}
export default State