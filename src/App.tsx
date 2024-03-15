import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'flowbite-react';
import MainCardComponent from './components/MainCard/MainCardComponent';
import DescriptionAndEvolutionsComponent from './components/DescriptionAndEvolutions/DescriptionAndEvolutionsComponent';
import StatsComponent from './components/Stats/StatsComponent';
import SearchComponent from './components/Search/SearchComponent';
import { IPokemonApi } from './interfaces/IPokemonApi';
import { pokemonApi } from './DataServices/DataServices';

function App() {

  // const [pokemonFetch, setPokemonFetch] = useState<IPokemonApi>();
  // useEffect(() => {
  //   const getData = async () => {
  //     const fetechedData = await pokemonApi("1");
  //     setPokemonFetch(fetechedData)
  //     console.log(fetechedData)
  //   }
  //   getData();
  // },[])
  // console.log(pokemonFetch)
  // console.log(pokemonFetch?.abilities)
  // console.log(pokemonFetch?.name)
  // console.log(pokemonFetch?.id)

  const [pokemonName, setPokemonName] = useState<string>();

  const searchHandleClick = () => {
    setPokemonName
  }


  return (
    <div className="bg-ash overflow-x-hidden">
      <div className="font-content text-white h-full w-full flex flex-col items-center md:px-16 py-8 space-y-5 > *">
        <SearchComponent onChangeHandle = {() => searchHandleClick()} />
        <MainCardComponent />
        <div className="flex flex-col  lg:flex-row text-lg md:text-xl px-4  2xl:px-60 space-y-5">
          <DescriptionAndEvolutionsComponent />
          <StatsComponent />
        </div>
      </div>
    </div>

  );
}

export default App;
