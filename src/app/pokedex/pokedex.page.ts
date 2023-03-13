import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../service/pokemon.service';
import { Pokemon } from '../interfaces/pokemon.interfaces';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.page.html',
  styleUrls: ['./pokedex.page.scss'],
})
export class PokedexPage implements OnInit {

  public pokemons : Pokemon[] =[];
  public page: number = 0;

  constructor(
    private pokeService: PokemonService
  ) {}

  ngOnInit(): void {
    this.pokeService.getAllPokemons()
      .subscribe(res =>{
        this.pokemons = res
      })
  }
  nextPage(){
    this.page += 10;
  }
  previousPage(){
    this.page > 0 ?this.page -= 10:this.page;
  } 
}
