import React, { useState } from 'react'
import PokemonComponent from './PokemonComponent'
import ArrowComponent from './ArrowComponent'
import pichu from "./pichu.gif";
import pikachu from "./pikachu.gif";
import raichu from "./raichu.gif";
import { IPokemonSpriteArray } from '../../interfaces/IEvoChain';

interface EvolutionLineComponentProps {
    SpriteArray : IPokemonSpriteArray
    ClickHandle : (search: string) => void
    key: number
}

const EvolutionLineComponent = (props: EvolutionLineComponentProps) => {

    return (
        <div className="flex flex-row justify-center">
            {props.SpriteArray.spriteArray.map(pokemonSprite => {
                if (pokemonSprite.spriteKey > 0) {
                    return (
                        <div key={pokemonSprite.spriteKey} className="flex flex-row justify-center">
                            <ArrowComponent />
                            <PokemonComponent Sprite={pokemonSprite} ClickHandle={props.ClickHandle} />
                        </div>
                    )
                } else {
                    return (
                        <div key={pokemonSprite.spriteKey} className="flex flex-row justify-center">
                            <PokemonComponent Sprite={pokemonSprite} ClickHandle={props.ClickHandle} />
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default EvolutionLineComponent