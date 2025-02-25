import { useState } from "react";

function CharacterQuote({ quote }) {
  const [showQuote, setShowQuote] = useState(false);

  // Fonction pour basculer la citation
  const toggleQuote = () => setShowQuote(!showQuote);   // cette foncton signfie montre moi la citation si celle n'est pas afficher et vice versa

  return (
    <div>
      {/* Le bouton qui va basculer la citation */}
      <button onClick={toggleQuote}>
        {showQuote ? "Cacher la citation" : "Afficher la citation  du personnage"}
      </button>

      {/* Affichage de la citation seulement si showQuote est true */}
      {showQuote && <p>{quote}</p>}
    </div>
  );
}

export default CharacterQuote;
