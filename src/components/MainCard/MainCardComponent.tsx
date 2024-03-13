import React, { useState } from 'react'
import pokemonImg from "./pikachu.png";
import shinyEmpty from "./Sparkle.png";
import shinyFilled from "./SparkleShiny.png";
import heartEmpty from "./Heart.png";
import heartFilled from "./HeartFilled.png";

const MainCardComponent = () => {
  const [isShiny, setIsShiny] = useState<boolean>(false);
  const [shiny, setShiny] = useState(shinyEmpty);

  const [isHeart, setisHeart] = useState<boolean>(false);
  const [heart, setHeart] = useState(heartEmpty);

  const changeShiny = () => {
    if(isShiny){
      setIsShiny(false);
      setShiny(shinyEmpty);
    }else{
      setIsShiny(true);
      setShiny(shinyFilled);
    }
  }

  const changeHeart = () => {
    if(isHeart){
      setisHeart(false);
      setHeart(heartEmpty);
    }else{
      setisHeart(true);
      setHeart(heartFilled);
    }
  }


  return (
    <div>
        <div className="flex flex-row items-start">
            <img id="pokemonImage" className="w-[250px] md:w-[300px]" src={pokemonImg} alt="pokemon"/>
            <img onClick={()=>changeShiny()} id="shinyBtn" className="w-8 cursor-pointer" src={shiny} alt="sparkle"/>
        </div>

        <div className="flex flex-row items-baseline justify-between space-x-[30px]">
            <h3 id="indexNumber" className="text-xl">#25</h3>
            <h2 id="pokemonTitle" className="text-2xl ">Pikachu</h2>
            <img onClick={()=>changeHeart()} className="w-[25px] cursor-pointer" id="heartBtn" src={heart} alt="heart"/>
        </div>
    </div>
  )
}

export default MainCardComponent