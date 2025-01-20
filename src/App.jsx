import { useState } from 'react'
import Header from './components/Header'
import CharacterCard from './components/CharacterCard'
import data from './data';


import './App.css'

function App() {
 // const [count, setCount] = useState(0)
 const entryElements = data.map((entry) => { 
  return (
  
  <CharacterCard 
        key={entry.id}
        img={entry.img}
        name={entry.name}
        resume={entry.resume}
    
    />
  )

})

  return (
    <>
      <Header/>
       {entryElements}
    </>
  )
}

export default App
