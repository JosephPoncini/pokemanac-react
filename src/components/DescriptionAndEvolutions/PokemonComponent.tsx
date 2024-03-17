import React, { useEffect, useState } from 'react'
import { pokemonApi } from '../../DataServices/DataServices';
import { IPokemonApi } from '../../interfaces/IPokemonApi';
import { IPokemonSprite } from '../../interfaces/IEvoChain';
import { toTitleCase } from '../../DataServices/Utilities';


interface PokemonComponentProps {
    Sprite : IPokemonSprite
    ClickHandle : (search: string) => void
}

const PokemonComponent = (props: PokemonComponentProps) => {

    return (
        <div className="flex flex-col justify-end cursor-pointer" onClick={()=>props.ClickHandle(props.Sprite.name)}>
            <div><img className="w-[75px]" src={props.Sprite.sprite} alt="pokemon sprite" /></div>
            <div className="flex justify-center">{toTitleCase(props.Sprite.name)}</div>
        </div>
    )
}

export default PokemonComponent