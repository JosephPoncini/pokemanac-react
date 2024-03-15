interface LocationArea {
    name: string;
    url: string;
  }
  
  interface EncounterMethod {
    name: string;
    url: string;
  }
  
  interface EncounterConditionValue {
    name: string;
    url: string;
  }
  
  interface EncounterDetails {
    chance: number;
    condition_values: EncounterConditionValue[];
    max_level: number;
    method: EncounterMethod;
    min_level: number;
  }
  
  interface Version {
    name: string;
    url: string;
  }
  
  interface VersionDetails {
    encounter_details: EncounterDetails[];
    max_chance: number;
    version: Version;
  }
  
  interface PokemonEncounter {
    location_area: LocationArea;
    version_details: VersionDetails[];
  }
  
  export interface IPokemonEncounterApi {
    pokemon_encounters: PokemonEncounter[];
  }
  