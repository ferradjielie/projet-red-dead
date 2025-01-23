import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import CharacterCard from './components/CharacterCard';
import LegendaryAnimals from './components/AnimalsLegendary';
import City from "./components/City";
import State from "./components/State";
import data from './data';
import dataAnimals from './data-legendary-animals';
import Gangs from "./components/Gangs";
import dataGangs from './data-gangs';
import dataCity from './city-data';
import dataState from './states-data';

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

  const gangElements = dataGangs.map((entryGang) => {
    return (
      <Gangs
        key={entryGang.id}
        img={entryGang.img}
        name={entryGang.name}
        resume={entryGang.resume}
        location={entryGang.location}
      />
    );
  });

  const stateElements = dataState.map((entryState) => {
    return (
      <State
        key={entryState.id}
        img={entryState.img}
        name={entryState.name}
        resume={entryState.resume}
      />
    );
  });


  const cityElements = dataCity.map((entryCity) => {
    return (
      <City
        key={entryCity.id}
        img={entryCity.img}
        name={entryCity.name}
        resume={entryCity.resume}
        location={entryCity.location}
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

        <Route path="/other-gangs" element={<div>{gangElements}</div>} />

        <Route path="/City-of-Red-dead-Redemption" element={<div>{cityElements}</div>} />

        <Route path="/State-of-Red-dead-Redemption" element={<div>{stateElements}</div>} />
      
      </Routes>
    </>
  );
}

export default App;
