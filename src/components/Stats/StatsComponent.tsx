import React from 'react'
import { elementType } from '../../interfaces/IElementType'
import TypeComponent from './TypeComponent'
import image from '../../assets/elementTypes/electric.png'

interface StatProps {
    gen: string
    elementTypes: elementType[]
    location: string
    ability: string
    moves: string
}


const StatsComponent = (props: StatProps) => {
    return (
        <div className="lg:w-[50%] space-y-4 ^ *">
            <div className="flex flex-row">
                <div className="w-[30%] flex justify-end">Gen:</div>
                <div id="genTxt" className="w-[70%] ml-4">{props.gen}</div>
            </div>
            <div className="flex flex-row">
                <div className="w-[30%] flex justify-end">Type:</div>
                <div id="typeContainer"
                    className="w-[70%] ml-4 flex flex-col items-baseline md:flex-row space-y-4 ^ * md:space-y-0 ^ *">
                    <TypeComponent elements={props.elementTypes}/>
                </div>
            </div>
            <div className="flex flex-row">
                <div className="w-[30%] flex justify-end">Location:</div>
                <div id="locationTxt" className="w-[70%] ml-4">{props.location}</div>
            </div>
            <div className="flex flex-row">
                <div className="w-[30%] flex justify-end">Abilities:</div>
                <div id="abilitiesTxt" className="w-[70%] ml-4">{props.ability}</div>
            </div>
            <div className="flex flex-col lg:flex-row">
                <div className="w-[30%] flex justify-end mb-4">Moves:</div>
                <div id="movesTxt" className="lg:w-[70%] h-[170px] lg:ml-4 border-2 border-white overflow-y-auto px-2 ">
                    {props.moves}
                </div>
            </div>
        </div>
    )
}

export default StatsComponent