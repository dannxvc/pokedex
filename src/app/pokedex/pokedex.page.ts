import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonService } from '../service/pokemon.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.page.html',
  styleUrls: ['./pokedex.page.scss'],
})
export class PokedexPage implements OnInit {

  pokemons : any[] =[];


  constructor(
    private pokeService: PokemonService
  ) {}

  ngOnInit(): void {
    this.getPokemons();
  }
  
  getPokemons(){

    let pokemonData;

    for(let i = 1; i <=100; i++){
      this.pokeService.getPokemons(i).subscribe(
        res => {
          pokemonData = {
            position: i,
            img: res.sprites.other.dream_world.front_default,
            name: res.name,
            id: res.id
          };
          this.pokemons.push(pokemonData);
        },
        err=>{
  
        }
      )
    }
  }
    
}
