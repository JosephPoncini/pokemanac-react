import { IPokemonApi } from "../interfaces/IPokemonApi";
import { IPokemonEncounterApi } from "../interfaces/IPokemonEncounterApi";
import { IPokemonEvolutionChainApi } from "../interfaces/IPokemonEvolutionChainApi";
import { IPokemonSpeciesApi } from "../interfaces/IPokemonSpeciesApi";




export const pokemonApi = async (pokemon: string) => {
    const promise = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon);
    const data : IPokemonApi = await promise.json();
    return data;
}

export const pokemonSpeciesApi = async (pokemon: string) => {
    const promise = await fetch("https://pokeapi.co/api/v2/pokemon-species/" + pokemon);
    const data : IPokemonSpeciesApi = await promise.json();
    return data;
}

export const pokemonEncounterApi = async (pokemon: string) => {
    const promise = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon + "/encounters");
    const data : IPokemonEncounterApi = await promise.json();
    return data;
}

export const pokemonEvolutionChainApi = async (url: string) => {
    const promise = await fetch(url);
    const data : IPokemonEvolutionChainApi = await promise.json();
    return data;
}