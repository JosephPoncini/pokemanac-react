interface EvolutionDetails {
    gender: string | null;
    held_item: string | null;
    item: string | null;
    known_move: string | null;
    known_move_type: string | null;
    location: string | null;
    min_affection: string | null;
    min_beauty: string | null;
    min_happiness: string | null;
    min_level: number;
    needs_overworld_rain: boolean;
    party_species: string | null;
    party_type: string | null;
    relative_physical_stats: string | null;
    time_of_day: string;
    trade_species: string | null;
    trigger: {
      name: string;
      url: string;
    };
    turn_upside_down: boolean;
  }
  
  export interface EvolutionChain {
    evolution_details: EvolutionDetails[];
    evolves_to: EvolutionChain[];
    is_baby: boolean;
    species: {
      name: string;
      url: string;
    };
  }
  
  export interface IPokemonEvolutionChainApi {
    baby_trigger_item: string | null;
    chain: EvolutionChain;
    id: number;
  }
  