import { IconButton } from '@material-tailwind/react'
import React from 'react'
import { getlocalStorage } from '../../DataServices/LocalSotrage'
import { FavoriteComponentProps } from '../../interfaces/IFavoriteComponent';


const FavoriteComponent = (props: FavoriteComponentProps) => {

    let favorites: string[] = getlocalStorage();

    return (
        <div id="favoritesContainer" className="border-black border-b-2">{
            favorites.map(favorite => {

                let nameIdArray = favorite.split(",");
                if (nameIdArray.length > 0) {
                    let name = nameIdArray[0];
                    let id = nameIdArray[1];

                    return (
                        <div className="favoriteExample flex justify-between border-black border-t-2 px-2">
                            <div onClick={() => props.onClickSearch} className="fpokemon">{name}</div>
                            <div onClick={() => props.onClickSearch} className="fpokemonId">#{id}</div>
                            {/* <strong className="exit text-red-600">X</strong> */}
                            <IconButton variant="text" color="blue-gray" onClick={() => props.onClickDelete} placeholder={undefined}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="red"
                                    className="h-5 w-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </IconButton>
                        </div>
                    )
                }


            })}
        </div>
    )
}

export default FavoriteComponent