import { Component, OnInit } from '@angular/core';
//call a class
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PokemonService } from '../service/pokemon.service';



@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})

export class PokemonPage implements OnInit {

  pokemonId: string = ''; 
  pokemon: any;

  constructor(
    private activatedRoute : ActivatedRoute,
    private http: HttpClient,
    private pokeService: PokemonService
  ) {}

  ngOnInit() {
    this.pokemonId = this.activatedRoute.snapshot.paramMap.get('id') || '';
    this.http.get('https://pokeapi.co/api/v2/pokemon/' + this.pokemonId)
      .subscribe(res=>{
        this.getPokemon();
      })
  }

  getPokemon(){

    let pokemonData;

      this.pokeService.getPokemon(this.pokemonId).subscribe(
        res => {
          pokemonData = {
            img: res.sprites.other.dream_world.front_default,
            name: res.name,
            type: res.types[0].type.name,
            height: res.height,
            weight: res.weight,
            exp:res.base_experience,
            img_ht: res.sprites.front_default,
            img_wt: res.sprites.back_default,
            id: res.id
          };
          this.pokemon = pokemonData;
        },
        err=>{
  
        }
      )
  }

}
