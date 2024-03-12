import React from 'react'

const ButtonsComponent = () => {
    return (
        
        <div className="buttons flex justify-center items-center flex-col lg:flex-row space-y-8 lg:space-y-0">
            <div>
                <button id="randomBtn" type="button" className="greenBtn">Random</button>
            </div>
            <div>
                <button id="searchBtn" type="button" className="blueBtn">Search</button>
            </div>
            <div>
                <button id="favoritesBtn" type="button" className="redBtn" data-drawer-target="drawer-example"
                    data-drawer-show="drawer-example" aria-controls="drawer-example">Favorites</button>
            </div>

        </div>

    )
}

export default ButtonsComponent