import React from 'react'
import MyDrawer from './MyDrawer'
import { FavoriteComponentProps } from '../../interfaces/IFavoriteComponent'


interface searchProps {
    onChangeHandle : React.Dispatch<React.SetStateAction<string>>
    value: string
    searchBtnHandle : () => void
    randomBtnHandle : () => void
    favoriteComponentProps:FavoriteComponentProps
}



const SearchComponent = (props:searchProps) => {

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            props.searchBtnHandle();
        }
    };

    return (
        <div className="font-content text-white h-full w-full flex flex-col items-center md:px-16 py-8 space-y-5 > *">

            <h1 className="text-3xl  font-title">
                POKÉMANAC
            </h1>
            <h2 className="text-2xl ">
                Choose a Pokémon...
            </h2>
            <input id="search" className="ring-0" onChange={(e)=> props.onChangeHandle(e.target.value)} value={props.value} onKeyDown={handleKeyDown}></input>

            <div className="buttons flex justify-center items-center flex-col lg:flex-row space-y-8 lg:space-y-0">
                <div>
                    <button onClick={props.randomBtnHandle} id="randomBtn" type="button" className="greenBtn">Random</button>
                </div>
                <div>
                    <button onClick={props.searchBtnHandle} id="searchBtn" type="button" className="blueBtn">Search</button>
                </div>
                <MyDrawer favoriteComponentProps={props.favoriteComponentProps}/>
            </div>
        </div>

    )
}

export default SearchComponent