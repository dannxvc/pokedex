export interface FetchAllPokemonResponse{
    count: number;
    next: null;
    previous:null;
    results: PokeResumen[];
}

export interface PokeResumen{
    name: string;
    url: string;
}

export interface Pokemon{
    name: string;
    img: string;
    id: string;

}