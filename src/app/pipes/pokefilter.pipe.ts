import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon.interfaces';

@Pipe({
  name: 'pokefilter'
})
export class PokefilterPipe implements PipeTransform {

  transform(pokemons: Pokemon[], page: number = 0): Pokemon[] {
    // console.log(pokemons.slice(0,10));
    return pokemons.slice(page,page+10) ;
  }
  
}
