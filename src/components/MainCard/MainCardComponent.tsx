import React, { useState } from 'react'

interface IMainCardProps {
  pokemonImg : string
  onClickShinyHandle : ()=>void
  shiny : string
  pokemonID : number
  pokemonName : string
  onClickHeartHandle : ()=>void  
  heart:string
}

const MainCardComponent = (props:IMainCardProps) => {

  return (
    <div>
        <div className="flex flex-row items-start">
            <img id="pokemonImage" className="w-[250px] md:w-[300px]" src={props.pokemonImg} alt="pokemon"/>
            <img onClick={()=>props.onClickShinyHandle()} id="shinyBtn" className="w-8 cursor-pointer" src={props.shiny} alt="sparkle"/>
        </div>

        <div className="flex flex-row items-baseline justify-between space-x-[30px]">
            <h3 id="indexNumber" className="text-xl">#{props.pokemonID}</h3>
            <h2 id="pokemonTitle" className="text-2xl ">{props.pokemonName}</h2>
            <img onClick={()=>props.onClickHeartHandle()} className="w-[25px] cursor-pointer" id="heartBtn" src={props.heart} alt="heart"/>
        </div>
    </div>
  )
}

export default MainCardComponent