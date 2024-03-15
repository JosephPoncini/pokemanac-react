import React from 'react'
import MyDrawer from './MyDrawer'

interface searchProps {
    onChangeHandle : () => void
}

const SearchComponent = (props : searchProps) => {

    


    return (
        <div className="font-content text-white h-full w-full flex flex-col items-center md:px-16 py-8 space-y-5 > *">

            <h1 className="text-3xl  font-title">
                POKÉMANAC
            </h1>
            <h2 className="text-2xl ">
                Choose a Pokémon...
            </h2>
            <input id="search" className="ring-0" value={"pikachu"}></input>

            <div className="buttons flex justify-center items-center flex-col lg:flex-row space-y-8 lg:space-y-0">
                <div>
                    <button id="randomBtn" type="button" className="greenBtn">Random</button>
                </div>
                <div>
                    <button id="searchBtn" type="button" className="blueBtn">Search</button>
                </div>
                <MyDrawer />
            </div>
        </div>

    )
}

export default SearchComponent