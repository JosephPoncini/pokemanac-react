import React, { useState } from 'react'
import EvolutionLineComponent from './EvolutionLineComponent'
import { IPokemonSpriteArray } from '../../interfaces/IEvoChain'

interface IDescriptionAndEvolutionsProps {
    EvolutionArray : IPokemonSpriteArray[]
    descriptionText : string
    ClickHandle : (search: string) => void
}

const DescriptionAndEvolutionsComponent = (props: IDescriptionAndEvolutionsProps) => {
    return (
        <div className="lg:w-[50%] flex flex-col justify-between">
            <div id="descriptionTxt" className="text-xl mb-4">
                {props.descriptionText}
            </div>
            <div className="hidden text-xl underline lg:block ">
                Evolutions
            </div>
            <div id="evolutionContainer"
                className="flex flex-col justify-start w-[90vw] md:w-[95%] h-[260px] lg:ml-4 border-2 border-white overflow-y-auto space-y-5 ^ * p-2">
                    {props.EvolutionArray.map(pokemonSpriteArray => {
                        return <EvolutionLineComponent key={pokemonSpriteArray.arrayKey} SpriteArray={pokemonSpriteArray} ClickHandle={props.ClickHandle} />
                    })}

            </div>
        </div>
    )
}

export default DescriptionAndEvolutionsComponent