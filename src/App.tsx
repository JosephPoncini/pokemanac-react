import React, { useEffect, useState } from 'react';
import './App.css';

import MainCardComponent from './components/MainCard/MainCardComponent';
import DescriptionAndEvolutionsComponent from './components/DescriptionAndEvolutions/DescriptionAndEvolutionsComponent';
import StatsComponent from './components/Stats/StatsComponent';
import SearchComponent from './components/Search/SearchComponent';
import { IPokemonApi } from './interfaces/IPokemonApi';
import { pokemonApi, pokemonEncounterApi, pokemonEvolutionChainApi, pokemonSpeciesApi } from './DataServices/DataServices';

import pikachuImg from "./assets/pikachu.png";
import shinyEmpty from "./assets/Sparkle.png";
import shinyFilled from "./assets/SparkleShiny.png";
import heartEmpty from "./assets/Heart.png";
import heartFilled from "./assets/HeartFilled.png";

import _ from 'lodash';
import { elementType } from './interfaces/IElementType';

import { GetAbilities, GetDescription, GetEvoChain, GetGeneration, GetLocation, GetMoves, toTitleCase } from './DataServices/Utilities';
import { GetTypes } from './DataServices/ImageUtilities';
import { getlocalStorage, removeFromLocalStorage, saveToLocalStorage } from './DataServices/LocalSotrage';
import { FavoriteComponentProps } from './interfaces/IFavoriteComponent';
import { IPokemonEvolutionChainApi } from './interfaces/IPokemonEvolutionChainApi';
import { IPokemonSpriteArray } from './interfaces/IEvoChain';

function App() {
  const [currentPokemonData, setCurrentPokemonData] = useState<IPokemonApi>()
  const [currentPokemonEvoData, setCurrentPokemonEvoData] = useState<IPokemonEvolutionChainApi>()

  const [isShiny, setIsShiny] = useState<boolean>(false);
  const [isHeart, setisHeart] = useState<boolean>(false);

  const [shiny, setShiny] = useState(shinyEmpty);
  const [heart, setHeart] = useState(heartEmpty);

  const [searchInput, setSearchInput] = useState<string>("pikachu");
  const [pokemonName, setPokemonName] = useState<string>("pikachu");
  const [pokemonID, setPokemonID] = useState<number>(25);
  const [pokemonImg, setPokemonImg] = useState<string>(pikachuImg)
  const [searchValue, setSearchValue] = useState<string>("pikachu")

  const [pokemonEvoChain, setPokemonEvoChain] = useState<IPokemonSpriteArray[]>([{ spriteArray: [], arrayKey: 0 }])

  const [descriptionText, setDescriptionText] = useState<string>("");
  const [generationText, setGenerationText] = useState<string>("");
  const [locationText, setLocationText] = useState<string>("");
  const [abilitiesTxt, setAbilitiesText] = useState<string>("");
  const [movesText, setMovesText] = useState<string>("");
  const [types, setTypes] = useState<elementType[]>([{ element: "", elementUrl: "", elementKey: 0 }]);

  const [favoritesArray, setFavoritesArray] = useState<string[]>(getlocalStorage())

  const changeShiny = () => {
    if (isShiny) {
      setIsShiny(false);
      setShiny(shinyEmpty);
    } else {
      setIsShiny(true);
      setShiny(shinyFilled);
    }
  }

  const changeHeart = () => {
    if (isHeart) {
      setisHeart(false);
      setHeart(heartEmpty);
      removeFromLocalStorage(pokemonName + "," + pokemonID)
      setFavoritesArray(getlocalStorage());
    } else {
      setisHeart(true);
      setHeart(heartFilled);
      saveToLocalStorage(pokemonName + "," + pokemonID)
      setFavoritesArray(getlocalStorage());
    }
  }

  const searchBtn = () => {
    setSearchValue(searchInput);
  }

  const randomBtn = () => {
    let randNum = Math.ceil(Math.random() * 918);
    setSearchValue(`${randNum}`);
  }

  const searchUp = (search: string) => {
    setSearchValue(search)
  }

  const deleteFavorite = (pokemon: string) => {
    removeFromLocalStorage(pokemon);
    setFavoritesArray(getlocalStorage());
  }

  //Load out List

  useEffect(() => {
    const getData = async () => {
      const pokemonData = await pokemonApi(searchValue.toLowerCase());
      const pokemonSpeciesData = await pokemonSpeciesApi(searchValue.toLowerCase());
      const pokemonEvoChainData = await pokemonEvolutionChainApi(pokemonSpeciesData.evolution_chain.url)
      const pokemonEncounterData = await pokemonEncounterApi(searchValue.toLowerCase())
      // console.log(pokemonData);

      setPokemonEvoChain(await GetEvoChain(pokemonEvoChainData, isShiny))


      setCurrentPokemonData(pokemonData);
      setCurrentPokemonEvoData(pokemonEvoChainData);

      setPokemonID(pokemonData.id);
      if (isShiny) {
        setPokemonImg(pokemonData.sprites.other["official-artwork"].front_shiny);
      } else {
        setPokemonImg(pokemonData.sprites.other["official-artwork"].front_default);
      }

      setPokemonName(pokemonData.name)
      setSearchInput(pokemonData.name)
      setDescriptionText(GetDescription(pokemonSpeciesData))
      setGenerationText(GetGeneration(pokemonSpeciesData))
      setLocationText(GetLocation(pokemonEncounterData))
      setAbilitiesText(GetAbilities(pokemonData))
      setMovesText(GetMoves(pokemonData))
      setTypes(GetTypes(pokemonData))
    }
    // console.log(searchInput)
    if (searchInput) {
      getData();
    }

  }, [searchValue])

  useEffect(() => {
    const changeShiny = async () => {
      if (currentPokemonData) {
        if (isShiny) {
          setPokemonImg(currentPokemonData.sprites.other["official-artwork"].front_shiny);
        } else {
          setPokemonImg(currentPokemonData.sprites.other["official-artwork"].front_default);
        }
      }

      if (currentPokemonEvoData) {
        setPokemonEvoChain(await GetEvoChain(currentPokemonEvoData, isShiny))
      }
    }

    changeShiny();

  }, [isShiny])

  useEffect(() => {
    //check Favorites
    let favorites: string[] = getlocalStorage();
    if (favorites.includes(pokemonName + "," + pokemonID)) {
      setHeart(heartFilled);
      setisHeart(true);
    } else {
      setHeart(heartEmpty);
      setisHeart(false);
    }
  }, [pokemonName])

  useEffect(() => {
  }, [favoritesArray])

  const favoriteComponentPropHandles: FavoriteComponentProps = {
    onClickDelete: deleteFavorite,
    onClickSearch: searchUp
  }

  return (

      <div className="bg-ash h-[100vh] overflow-hidden">
        <div className="overflow-y-auto font-content text-white h-full w-full flex flex-col items-center md:px-16 py-8 space-y-5 > *">
          <SearchComponent onChangeHandle={setSearchInput} value={searchInput} searchBtnHandle={searchBtn} randomBtnHandle={randomBtn} favoriteComponentProps={favoriteComponentPropHandles} />
          <MainCardComponent pokemonImg={pokemonImg} onClickShinyHandle={() => changeShiny()} shiny={shiny} pokemonID={pokemonID} pokemonName={toTitleCase(pokemonName)} onClickHeartHandle={() => changeHeart()} heart={heart} />
          <div className="flex flex-col  lg:flex-row text-lg md:text-xl px-4  2xl:px-60 space-y-5">
            <DescriptionAndEvolutionsComponent EvolutionArray={pokemonEvoChain} descriptionText={descriptionText} ClickHandle={searchUp} />
            <StatsComponent gen={generationText} elementTypes={types} location={locationText} ability={abilitiesTxt} moves={movesText} />
          </div>
        </div>
      </div>



  );
}

export default App;
