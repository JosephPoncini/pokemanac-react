//Local Storage Functions

//Favorites
export const saveToLocalStorage = (pokemon : string) => {

    let favorites = getlocalStorage();

    if (!favorites.includes(pokemon)) {
        favorites.push(pokemon);
    }

    localStorage.setItem("Favorites", JSON.stringify(favorites));
}

export const getlocalStorage= ():string[]  => {

    let localStorageData = localStorage.getItem("Favorites");

    if (localStorageData == null) {
        return [];
    }

    return JSON.parse(localStorageData);

}

export const removeFromLocalStorage = (pokemon : string) => {

    let favorites = getlocalStorage();

    let namedIndex = favorites.indexOf(pokemon);

    favorites.splice(namedIndex, 1);

    localStorage.setItem("Favorites", JSON.stringify(favorites))

}