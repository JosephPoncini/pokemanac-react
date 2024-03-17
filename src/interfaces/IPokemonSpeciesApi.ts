interface Color {
    name: string;
    url: string;
}

interface EggGroup {
    name: string;
    url: string;
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


interface Language {
    name: string;
    url: string;
}

interface GenusEntry {
    genus: string;
    language: Language;
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


interface Pokedex {
    name: string;
    url: string;
}

interface PokedexNumberEntry {
    entry_number: number;
    pokedex: Pokedex;
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


interface Language {
    name: string;
    url: string;
  }
  
  interface FormDescription {
    description: string;
    language: Language;
  }
  
export interface IPokemonSpeciesApi {
    base_happiness: number;
    capture_rate: number;
    color: Color;
    egg_groups: EggGroup[];
    evolution_chain: EvolutionChain;
    evolves_from_species: EvolvesFromSpecies;
    flavor_text_entries: FlavorTextEntry[];
    form_descriptions: FormDescription[];
    forms_switchable: boolean;
    gender_rate: number;
    genera: GenusEntry[];
    generation: Generation;
    growth_rate: GrowthRate;
    habitat: Habitat;
    has_gender_differences: boolean;
    hatch_counter: number;
    id: number;
    is_baby: boolean;
    is_legendary: boolean;
    is_mythical: boolean;
    name: NameEntry[];
    order: number;
    pal_park_encounters: PalParkEncounter[];
    pokedex_numbers: PokedexNumberEntry[];
    shape: Shape;
    varieties: VarietyEntry[];
}