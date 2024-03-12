import React from 'react'

const TitleAndSearchBarComponent = () => {
  return (
    <div>
        
        <h1 className="text-3xl  font-title">
            POKÉMANAC
        </h1>
        <h2 className="text-2xl ">
            Choose a Pokémon...
        </h2>
        <input id="search" className="ring-0"></input>

    </div>
  )
}

export default TitleAndSearchBarComponent