import React from 'react'
import { TypeProp } from '../../interfaces/IElementType'
import images from '../../assets/elementTypes/electric.png'


const TypeComponent = (props : TypeProp) => {

    return (
        <div id="typeContainer"
            className="w-[70%] ml-4 flex flex-col items-baseline md:flex-row space-y-4 ^ * md:space-y-0 ^ *">
                {props.elements.map( x => {
                    return(
                        <img key={x.elementKey} className="h-[30px]" src={x.elementUrl} alt={x.element} />
                    )
                })}
        </div>
    )
}

export default TypeComponent