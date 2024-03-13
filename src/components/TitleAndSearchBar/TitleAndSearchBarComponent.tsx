import React from 'react'

const TitleAndSearchBarComponent = () => {
  return (
    <div className="font-content text-white h-full w-full flex flex-col items-center md:px-16 py-8 space-y-5 > *">
        
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