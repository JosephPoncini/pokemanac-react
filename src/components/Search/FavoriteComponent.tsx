import { IconButton } from '@material-tailwind/react'
import React from 'react'
import { getlocalStorage } from '../../DataServices/LocalSotrage'
import { FavoriteComponentProps } from '../../interfaces/IFavoriteComponent';
import { toTitleCase } from '../../DataServices/Utilities';


const FavoriteComponent = (props: FavoriteComponentProps) => {

    let favorites: string[] = getlocalStorage();

    return (
        <div id="favoritesContainer" className="border-black border-b-2">{
            favorites.map(favorite => {

                let nameIdArray = favorite.split(",");
                if (nameIdArray.length > 0) {
                    // console.log(nameIdArray)
                    let name = nameIdArray[0];
                    let id = nameIdArray[1];
                    return (
                        <div key={id} className="flex justify-between border-black border-t-2 px-2 ">
                            <div className='cursor-pointer flex justify-between items-center w-[87%]'>
                                <div onClick={() => props.onClickSearch(name)} className=" font-content text-black">{toTitleCase(name)}</div>
                                <div onClick={() => props.onClickSearch(name)} className=" font-content text-black">#{id}</div>
                            </div>

                            {/* <strong className="exit text-red-600">X</strong> */}
                            <IconButton variant="text" color="blue-gray" onClick={() => props.onClickDelete(name + "," + id)} placeholder={undefined}>
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