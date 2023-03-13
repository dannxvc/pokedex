import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { FetchAllPokemonResponse, Pokemon } from "../interfaces/pokemon.interfaces";
 import { map, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class PokemonService {

    baseUrl = environment.baseUrl;
    
    constructor(
        private http: HttpClient
    ){}

    getAllPokemons():Observable<Pokemon[]>{
        return this.http.get<FetchAllPokemonResponse>(`${this.baseUrl}/pokemon?limit=1500`)
            .pipe(
                map(this.pokemonCompleteData)
            );
    }

    private pokemonCompleteData (res: FetchAllPokemonResponse): Pokemon[]{
        
        const pokedex: Pokemon[] = res.results.map( pokemon => {
            
            const urlPoke = pokemon.url.split('/');
            const id = urlPoke[6];
            const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;

            return{
                id,
                name:pokemon.name,
                img
            }
        })
        return pokedex;
    }

    getPokemon(index: string){
        return this.http.get<any>(`${this.baseUrl}/pokemon/${index}`);
    }

}