import React from 'react'
import pichu from "./pichu.gif";
import pikachu from "./pikachu.gif";
import raichu from "./raichu.gif";

const DescriptionAndEvolutionsComponent = () => {
    return (
        <div className="lg:w-[50%] flex flex-col justify-between">
            <div id="descriptionTxt" className="text-xl mb-4">
                When several of these POKéMON gather, their electricity could build and cause lightning storms.
            </div>
            <div className="hidden text-xl underline lg:block ">
                Evolutions
            </div>
            <div id="evolutionContainer"
                className="flex flex-col justify-start w-[90vw] md:w-[95%] h-[260px] lg:ml-4 border-2 border-white overflow-y-auto space-y-5 ^ * p-2">
                <div className="flex flex-row justify-center">
                    <div className="flex flex-col justify-end">
                        <div><img className="w-[75px]" src={pichu} alt="pokemon sprite" /></div>
                        <div className="flex justify-center">Pichu</div>
                    </div>
                    <div className="flex items-center sm:mx-5">
                        <div className="text-3xl">={">"}</div>
                    </div>
                    <div className="flex flex-col justify-end">
                        <div><img className="w-[75px]" src={pikachu} alt="pokemon sprite" /></div>
                        <div className="flex justify-center">Pikachu</div>
                    </div>
                    <div className="flex items-center sm:mx-5">
                        <div className="text-3xl">={">"}</div>
                    </div>
                    <div>
                        <div><img className="w-[75px]" src={raichu} alt="pokemon sprite" /></div>
                        <div className="flex justify-center">Raichu</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DescriptionAndEvolutionsComponent