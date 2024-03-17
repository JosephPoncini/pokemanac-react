import bugTypeImg from '../assets/elementTypes/bug.png'
import darkTypeImg from '../assets/elementTypes/dark.png'
import dragonTypeImg from '../assets/elementTypes/dragon.png'
import electricTypeImg from '../assets/elementTypes/electric.png'
import fairyTypeImg from '../assets/elementTypes/fairy.png'
import fightingTypeImg from '../assets/elementTypes/fighting.png'
import flyingTypeImg from '../assets/elementTypes/flying.png'
import ghosetTypeImg from '../assets/elementTypes/ghost.png'
import grassTypeImg from '../assets/elementTypes/grass.png'
import groundTypeImg from '../assets/elementTypes/ground.png'
import iceTypeImg from '../assets/elementTypes/ice.png'
import normalTypeImg from '../assets/elementTypes/normal.png'
import poisonTypeImg from '../assets/elementTypes/poison.png'
import psychicTypeImg from '../assets/elementTypes/psychic.png'
import rockTypeImg from '../assets/elementTypes/rock.png'
import waterTypeImg from '../assets/elementTypes/water.png'
import steelTypeImg from '../assets/elementTypes/steel.png'
import { elementType } from '../interfaces/IElementType'
import { IPokemonApi } from '../interfaces/IPokemonApi'
import { toTitleCase } from './Utilities'

const imageKey = {
    bug: bugTypeImg,
    dark: darkTypeImg,
    dragon: dragonTypeImg,
    electric: electricTypeImg,
    fairy: fairyTypeImg,
    fighting: fightingTypeImg,
    flying: flyingTypeImg,
    ghost: ghosetTypeImg,
    grass: grassTypeImg,
    ground: groundTypeImg,
    ice: iceTypeImg,
    normal: normalTypeImg,
    poison: poisonTypeImg,
    psychic: psychicTypeImg,
    rock: rockTypeImg,
    water: waterTypeImg,
    steel: steelTypeImg,
};

export const GetTypes = (pokemon:IPokemonApi) => {
    let typeArray:elementType[] = [];
    let counter = 0;
  
    if (pokemon.types.length > 0) {
        pokemon.types.forEach(x => {
            let element = x.type.name as keyof typeof imageKey;
            let elementUrl = imageKey[element];
            let elementType : elementType = {
              element : toTitleCase(element),
              elementUrl : elementUrl,
              elementKey : counter
            }
            counter++;
            typeArray.push(elementType);
        })
    }
    // console.log(typeArray);
    return typeArray;
  }