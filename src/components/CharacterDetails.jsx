import { useParams } from "react-router-dom";
import { useState } from "react";
import characters from "../data";

const CharacterDetails = () => {
  const { id } = useParams();
  const character = characters.find((char) => char.id === parseInt(id));
  const [showMore, setShowMore] = useState(false);

  if (!character) {
    return <h2>Personnage non trouvé</h2>;
  }

  return (
    <div>
      <article className="card-chararcter-content">
        <h1>{character.name}</h1>
        <img src={character.img.src} alt={character.img.alt} />
        <p className="character-text">{character.resume}</p>
        <p className="character-text">
          {showMore ? character.history : character.history.substring(0, 150) + "..."}
          <button onClick={() => setShowMore(!showMore)}>
            {showMore ? "Lire moins" : "Lire plus"}
          </button>
        </p>
      </article>
    </div>
  );
};

export default CharacterDetails;
