import { useState } from "react";
import { motion } from "framer-motion";

function CharacterQuote({ quote }) {
  const [showQuote, setShowQuote] = useState(false);

  // Fonction pour basculer l'affichage de la citation
  const toggleQuote = () => setShowQuote(!showQuote);

  return (
    <div className="text-center">
      <button
        onClick={toggleQuote}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4"
      >
        {showQuote ? "Cacher la citation" : "Afficher la citation du personnage"}
      </button>

      {showQuote && (
        <motion.div
          initial={{ opacity: 0, y: -10 }} // Départ invisible et légèrement remonté
          animate={{ opacity: 1, y: 0 }} // Apparition en fondu et descente
          exit={{ opacity: 0, y: -10 }} // Disparition en fondu et remontée
          transition={{ duration: 0.5 }} // Durée de l'animation
          className="mt-4 p-4 bg-gray-200 rounded-lg shadow-lg"
        >
          <p>{quote}</p>
        </motion.div>
      )}
    </div>
  );
}

export default CharacterQuote;
