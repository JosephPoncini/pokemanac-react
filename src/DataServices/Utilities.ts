import _ from "lodash";
import { IPokemonSprite, IPokemonSpriteArray } from "../interfaces/IEvoChain";
import { IPokemonApi } from "../interfaces/IPokemonApi";
import { PokemonEncounter } from "../interfaces/IPokemonEncounterApi";
import { EvolutionChain, IPokemonEvolutionChainApi } from "../interfaces/IPokemonEvolutionChainApi";
import { IPokemonSpeciesApi } from "../interfaces/IPokemonSpeciesApi";
import { pokemonApi } from "./DataServices";

export function toTitleCase(input: string): string {
    return input.toLowerCase().replace(/(?:^|\s)\w/g, (match) => match.toUpperCase());
}

// Evolution Logic Below Warning
export const GetEvoChain = async (evoChainData: IPokemonEvolutionChainApi, isShiny: boolean) => {
    const firstChain = evoChainData.chain;

    const evoChain: IPokemonSpriteArray[] =
        [
            {
                spriteArray: [],
                arrayKey: 0
            }
        ]

    const evoChainArray = await GetEvoLine(firstChain, evoChain, 0, 0, isShiny)
    evoChainArray.pop();
    console.log(evoChainArray);
    return evoChainArray;
}

export const GetEvoLine = async (evoLineData: EvolutionChain, evoChain: IPokemonSpriteArray[], spriteCount: number, arrayCount: number, isShiny: boolean) => {

    //declaring function
    const getSprite = async (name: string, isShiny: boolean) => {

        const data = await pokemonApi(name);

        let sprite = data.sprites.other["official-artwork"].front_default;
        if (isShiny) {
            sprite = data.sprites.other["official-artwork"].front_shiny;
        } 

        return sprite
    }

    //cloning deep previous pokemon on the chain
    let previousPokemon: IPokemonSpriteArray = _.cloneDeep(evoChain[evoChain.length - 1]);

    //getting elements needed for sprite
    let name = evoLineData.species.name;
    let sprite = await getSprite(name, isShiny);

    //creating the sprite
    let pokemonSprite: IPokemonSprite = {
        sprite: sprite,
        name: name,
        spriteKey: spriteCount
    }

    //adding new sprite
    evoChain[evoChain.length - 1].spriteArray.push(pokemonSprite);


    let nextChain = evoLineData.evolves_to;
    if (nextChain.length > 0) { //do we add another sprite to the same line
        for (const evolution of nextChain) {
            evoChain = await GetEvoLine(evolution, evoChain, spriteCount + 1, arrayCount, isShiny);
        }
    } else { //or do we start a new evo line
        previousPokemon.arrayKey++;
        evoChain.push(previousPokemon);
    }
    return evoChain;
}
// Evolution Logic Above Warning 


export const GetDescription = (pokemonSpecies: IPokemonSpeciesApi) => {
    let randomEntryLocation: number;
    do {
        randomEntryLocation = Math.floor(Math.random() * pokemonSpecies.flavor_text_entries.length);
    } while (pokemonSpecies.flavor_text_entries[randomEntryLocation].language.name != "en")

    return pokemonSpecies.flavor_text_entries[randomEntryLocation].flavor_text.replaceAll("\f", " ").replaceAll("\n", " ");
}

export const GetGeneration = (pokemonSpecies: IPokemonSpeciesApi) => {

    let gen = "??";
    let generation = pokemonSpecies.generation.name;
    switch (generation) {
        case "generation-i":
            gen = "1st";
            break;
        case "generation-ii":
            gen = "2nd";
            break;
        case "generation-iii":
            gen = "3rd";
            break;
        case "generation-iv":
            gen = "4th";
            break;
        case "generation-v":
            gen = "5th";
            break;
        case "generation-vi":
            gen = "6th";
            break;
        case "generation-vii":
            gen = "7th";
            break;
        case "generation-viii":
            gen = "8th";
            break;
        case "generation-ix":
            gen = "9th";
            break;
        default:
            gen = "???";
    }

    return gen;
}

export const GetLocation = (pokemonEncounter: PokemonEncounter[]) => {
    let location = "N/A";

    if (pokemonEncounter[0]) {
        let randomLocationIndex = Math.floor(Math.random() * pokemonEncounter.length);


        location = toTitleCase(pokemonEncounter[randomLocationIndex].location_area.name.replaceAll("-", " ")) + " from " + toTitleCase(pokemonEncounter[randomLocationIndex].version_details[0].version.name);

    }

    return location;
}

export const GetAbilities = (pokemon: IPokemonApi) => {
    let abilities = "";
    if (pokemon.abilities[0]) {
        pokemon.abilities.forEach(x => {
            abilities += x.ability.name + ", ";
        })
    }
    return toTitleCase(abilities.substring(0, abilities.length - 2));

}

export const GetMoves = (pokemon: IPokemonApi) => {
    let moves = "";
    if (pokemon.moves[0]) {
        pokemon.moves.forEach(x => {
            moves += x.move.name + ", ";
        })
    }
    return toTitleCase(moves.substring(0, moves.length - 2));
}