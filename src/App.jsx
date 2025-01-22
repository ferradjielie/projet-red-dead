import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import CharacterCard from './components/CharacterCard';
import LegendaryAnimals from './components/AnimalsLegendary';
import data from './data';
import dataAnimals from './data-legendary-animals';

import './App.css';

function App() {
  // Liste des personnages
  const entryElements = data.map((entry) => {
    return (
      <CharacterCard
        key={entry.id}
        img={entry.img}
        name={entry.name}
        resume={entry.resume}
      />
    );
  });

  // Liste des animaux légendaires
  const animalsElements = dataAnimals.map((entryAnimals) => {
    return (
      <LegendaryAnimals
        key={entryAnimals.id}
        img={entryAnimals.img}
        name={entryAnimals.name}
        resume={entryAnimals.resume}
        location={entryAnimals.location}
      />
    );
  });

  return (
    <>
      <Header />
      <Routes>
        {/* Route pour la page d'accueil avec les personnages */}
        <Route path="/" element={<div>{entryElements}</div>} />
        
        {/* Route pour la page des animaux légendaires */}
        <Route path="/legendary-animals" element={<div>{animalsElements}</div>} />
      </Routes>
    </>
  );
}

export default App;
