interface Ability {
    name: string;
    url: string;
}

interface AbilityEntry {
    ability: Ability;
    is_hidden: boolean;
    slot: number;
}

interface PokemonCries {
    cries: {
        latest: string;
        legacy: string;
    };
}

interface PokemonForm {
    name: string;
    url: string;
}

interface Version {
    name: string;
    url: string;
}

interface GameIndex {
    game_index: number;
    version: Version;
}

interface Move {
    name: string;
    url: string;
}

interface MoveLearnMethod {
    name: string;
    url: string;
}

interface VersionGroup {
    name: string;
    url: string;
}

interface VersionGroupDetail {
    level_learned_at: number;
    move_learn_method: MoveLearnMethod;
    version_group: VersionGroup;
}

interface MoveEntry {
    move: Move;
    version_group_details: VersionGroupDetail[];
}

interface Species {
    name: string;
    url: string;
}

interface Sprites {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    other: {
        dream_world: {
            front_default: string | null;
            front_female: string | null;
        };
        home: {
            front_default: string | null;
            front_female: string | null;
            front_shiny: string | null;
            front_shiny_female: string | null;
        };
        "official-artwork": {
            front_default: string;
            front_shiny: string;
        };
        showdown: {
            back_default: string | null;
            back_female: string | null;
            back_shiny: string | null;
            back_shiny_female: string | null;
            front_default: string | null;
            front_female: string | null;
            front_shiny: string | null;
            front_shiny_female: string | null;
        };
    };
    versions: {
        "generation-i": {
            "red-blue": {
                back_default: string | null;
                back_gray: string | null;
                back_transparent: string | null;
                front_default: string | null;
                front_gray: string | null;
                front_transparent: string | null;
            };
            yellow: {
                back_default: string | null;
                back_gray: string | null;
                back_transparent: string | null;
                front_default: string | null;
                front_gray: string | null;
                front_transparent: string | null;
            };
        };
        "generation-ii": {
            crystal: {
                back_default: string | null;
                back_shiny: string | null;
                back_shiny_transparent: string | null;
                back_transparent: string | null;
                front_default: string | null;
                front_shiny: string | null;
                front_shiny_transparent: string | null;
                front_transparent: string | null;
            };
            gold: {
                back_default: string | null;
                back_shiny: string | null;
                front_default: string | null;
                front_shiny: string | null;
                front_transparent: string | null;
            };
            silver: {
                back_default: string | null;
                back_shiny: string | null;
                front_default: string | null;
                front_shiny: string | null;
                front_transparent: string | null;
            };
        };
        "generation-iii": {
            emerald: {
                front_default: string | null;
                front_shiny: string | null;
            };
            "firered-leafgreen": {
                back_default: string | null;
                back_shiny: string | null;
                front_default: string | null;
                front_shiny: string | null;
            };
            "ruby-sapphire": {
                back_default: string | null;
                back_shiny: string | null;
                front_default: string | null;
                front_shiny: string | null;
            };
        };
        "generation-iv": {
            "diamond-pearl": {
                back_default: string | null;
                back_female: string | null;
                back_shiny: string | null;
                back_shiny_female: string | null;
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            };
            "heartgold-soulsilver": {
                back_default: string | null;
                back_female: string | null;
                back_shiny: string | null;
                back_shiny_female: string | null;
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            };
            platinum: {
                back_default: string | null;
                back_female: string | null;
                back_shiny: string | null;
                back_shiny_female: string | null;
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            };
        };
        "generation-v": {
            "black-white": {
                animated: {
                    back_default: string | null;
                    back_female: string | null;
                    back_shiny: string | null;
                    back_shiny_female: string | null;
                    front_default: string | null;
                    front_female: string | null;
                    front_shiny: string | null;
                    front_shiny_female: string | null;
                };
                back_default: string | null;
                back_female: string | null;
                back_shiny: string | null;
                back_shiny_female: string | null;
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            };
        };
        "generation-vi": {
            "omegaruby-alphasapphire": {
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            };
            "x-y": {
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            };
        };
        "generation-vii": {
            icons: {
                front_default: string | null;
                front_female: string | null;
            };
            "ultra-sun-ultra-moon": {
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            };
        };
        "generation-viii": {
            icons: {
                front_default: string | null;
                front_female: string | null;
            };
        };
    };
}

interface Stat {
    name: string;
    url: string;
}

interface StatEntry {
    base_stat: number;
    effort: number;
    stat: Stat;
}

interface Type {
    name: string;
    url: string;
}

interface TypeEntry {
    slot: number;
    type: Type;
}

interface Item {
    name: string;
    url: string;
  }
  
  interface Version {
    name: string;
    url: string;
  }
  
  interface VersionDetail {
    rarity: number;
    version: Version;
  }
  
  interface HeldItemEntry {
    item: Item;
    version_details: VersionDetail[];
  }
  
  interface Generation {
    name: string;
    url: string;
  }
  
  interface Type {
    name: string;
    url: string;
  }
  
  interface TypeEntry {
    slot: number;
    type: Type;
  }
  
  interface PastTypeEntry {
    generation: Generation;
    types: TypeEntry[];
  }
  

  interface PastAbilityEntry {
    abilities: AbilityEntry[];
    generation: Generation;
  }

  
export interface IPokemonApi {
    abilities: AbilityEntry[],
    base_experience: number,
    cries : PokemonCries,
    forms: PokemonForm[],
    game_indices : GameIndex[],
    height : number,
    held_items : HeldItemEntry[]
    id: number,
    is_default: boolean,
    location_area_encounters: string,
    moves: MoveEntry[],
    name : string,
    order : number,
    past_abilities: PastAbilityEntry[],
    past_types: PastTypeEntry[],
    species: Species,
    sprites: Sprites,
    stats : StatEntry[],
    types : TypeEntry[],
    weight : number
}