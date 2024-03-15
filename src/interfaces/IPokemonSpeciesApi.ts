interface Color {
    name: string;
    url: string;
}

interface EggGroup {
    name: string;
    url: string;
}

interface PokemonEggGroups {
    egg_groups: EggGroup[];
}

interface EvolutionChain {
    url: string;
}

interface Language {
    name: string;
    url: string;
}

interface Version {
    name: string;
    url: string;
}

interface FlavorTextEntry {
    flavor_text: string;
    language: Language;
    version: Version;
}

interface PokemonFlavorTexts {
    flavor_text_entries: FlavorTextEntry[];
}

interface Language {
    name: string;
    url: string;
}

interface GenusEntry {
    genus: string;
    language: Language;
}

interface PokemonGenera {
    genera: GenusEntry[];
}

interface Generation {
    name: string;
    url: string;
}

interface GrowthRate {
    name: string;
    url: string;
}

interface Language {
    name: string;
    url: string;
}

interface NameEntry {
    language: Language;
    name: string;
}

interface PokemonNames {
    names: NameEntry[];
}

interface Pokedex {
    name: string;
    url: string;
}

interface PokedexNumberEntry {
    entry_number: number;
    pokedex: Pokedex;
}

interface PokemonPokedexNumbers {
    pokedex_numbers: PokedexNumberEntry[];
}

interface Shape {
    name: string;
    url: string;
}

interface Pokemon {
    name: string;
    url: string;
}

interface VarietyEntry {
    is_default: boolean;
    pokemon: Pokemon;
}

interface PokemonVarieties {
    varieties: VarietyEntry[];
}

interface EvolvesFromSpecies {
    name: string;
    url: string;
}

interface Habitat {
    name: string;
    url: string;
}

interface PalParkArea {
    name: string;
    url: string;
}

interface PalParkEncounter {
    area: PalParkArea;
    base_score: number;
    rate: number;
}

interface PokemonPalParkEncounters {
    pal_park_encounters: PalParkEncounter[];
}

interface Language {
    name: string;
    url: string;
  }
  
  interface FormDescription {
    description: string;
    language: Language;
  }
  
  interface PokemonFormDescriptions {
    form_descriptions: FormDescription[];
  }

export interface IPokemonSpeciesApi {
    base_happiness: number;
    capture_rate: number;
    color: Color;
    egg_groups: PokemonEggGroups;
    evolution_chain: EvolutionChain;
    evolves_from_species: EvolvesFromSpecies;
    flavor_text_entries: PokemonFlavorTexts;
    form_descriptions: PokemonFormDescriptions;
    forms_switchable: boolean;
    gender_rate: number;
    genera: PokemonGenera;
    generation: Generation;
    growth_rate: GrowthRate;
    habitat: Habitat;
    has_gender_differences: boolean;
    hatch_counter: number;
    id: number;
    is_baby: boolean;
    is_legendary: boolean;
    is_mythical: boolean;
    name: PokemonNames;
    order: number;
    pal_park_encounters: PokemonPalParkEncounters;
    pokedex_numbers: PokemonPokedexNumbers;
    shape: Shape;
    varieties: PokemonVarieties;
}