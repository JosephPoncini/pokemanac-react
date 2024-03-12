import React from 'react'

const DescriptionAndEvolutionsComponent = () => {
    return (
        <div className="lg:w-[45%] flex flex-col justify-between">
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
                        <div><img className="w-[75px]" src=".../assets/pichu.gif" alt="pokemon sprite" /></div>
                        <div className="flex justify-center">Pichu</div>
                    </div>
                    <div className="flex items-center mx-5">
                        <div className="text-3xl">={">"}</div>
                    </div>
                    <div className="flex flex-col justify-end">
                        <div><img className="w-[75px]" src=".../assets/pikachu.gif" alt="pokemon sprite" /></div>
                        <div className="flex justify-center">Pikachu</div>
                    </div>
                    <div className="flex items-center mx-5">
                        <div className="text-3xl">={">"}</div>
                    </div>
                    <div>
                        <div><img className="w-[75px]" src=".../assets/raichu.gif" alt="pokemon sprite" /></div>
                        <div className="flex justify-center">Raichu</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DescriptionAndEvolutionsComponent