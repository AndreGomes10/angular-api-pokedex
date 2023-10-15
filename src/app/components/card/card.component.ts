import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  pokemon : PokemonData
  name: string = "CHARIZARD"
  attributesTypes: string[] = ['FIRE', 'ROCK']

  constructor(private service: PokemonService) {
    this.pokemon = {  // inicializar o objeto
      id: 0,
      name: '',
      sprites: {
        front_default: '',
      },
      types: []
    }
  }

  ngOnInit(): void {
    this.getPokemon('pikachu')
  }

  getPokemon(searchName: string){
    this.service.getPokemon(searchName).subscribe(
      {
        // vai retornar se der tudo certo
        next: (res) => {

          this.pokemon = {
            id: res.id,
            name: res.name,
            sprites: res.sprites,
            types: res.types
          }
        },

        // vai retornar se tiver erro
        error: (err) => console.log('not found')
      }
    )
  }

}


/*
ngOnInit(): void {
    this.service.getPokemon("pikachu").subscribe(
      {
        // vai retornar se der tudo certo
        next: (res) => {

          this.pokemon = {
            id: res.id,
            name: res.name,
            sprites: res.sprites,
            types: res.types
          }


          /*
          console.log(res)
          console.log(res.types)
          console.log(this.pokemon)
          */
          /*
          pra exibir no console
          console.log(res)
          console.log(res.id)
          console.log(res.name)
          console.log(res.sprites.front_default)
          console.log(res.types)
          
        },

        // vai retornar se tiver erro
        error: (err) => console.log(err)
      }
    )
  }
*/
