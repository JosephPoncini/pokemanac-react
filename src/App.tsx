import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'flowbite-react';
import TitleAndSearchBarComponent from './components/TitleAndSearchBar/TitleAndSearchBarComponent';
import ButtonsComponent from './components/Buttons/ButtonsComponent';
import MainCardComponent from './components/MainCard/MainCardComponent';
import DescriptionAndEvolutionsComponent from './components/DescriptionAndEvolutions/DescriptionAndEvolutionsComponent';
import StatsComponent from './components/Stats/StatsComponent';

function App() {
  return (
    <div className="bg-ash overflow-x-hidden">
      <div className="font-content text-white h-full w-full flex flex-col items-center md:px-16 py-8 space-y-5 > *">
        <TitleAndSearchBarComponent />
        <ButtonsComponent />
        <MainCardComponent />
        <div className="flex flex-col  lg:flex-row text-lg md:text-xl px-4  2xl:px-60 space-y-5">
          <DescriptionAndEvolutionsComponent/>
          <StatsComponent/>
        </div>
      </div>
    </div>

  );
}

export default App;
