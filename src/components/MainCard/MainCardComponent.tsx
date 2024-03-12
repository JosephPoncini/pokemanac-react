import React from 'react'

const MainCardComponent = () => {
  return (
    <div>
        
        <div className="flex flex-row items-start">
            <img id="pokemonImage" className="w-[250px] md:w-[300px]" src=".../assets/pikachu.png" alt="pokemon"/>
            <img id="shinyBtn" className="w-8 cursor-pointer" src=".../assets/Sparkle.png" alt="sparkle"/>
        </div>

        <div className="flex flex-row items-baseline justify-between space-x-[30px]">
            <h3 id="indexNumber" className="text-xl">#25</h3>
            <h2 id="pokemonTitle" className="text-2xl ">Pikachu</h2>
            <img className="w-[25px] cursor-pointer" id="heartBtn" src=".../assets/Heart.png" alt="heart"/>
        </div>

    </div>
  )
}

export default MainCardComponent