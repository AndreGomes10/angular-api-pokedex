import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// importar o environment
import { environment } from 'src/environments/environment'
import { PokemonData } from '../models/pokemonData'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseURL: string = ""
  private pokeData: PokemonData | any

  constructor(private http: HttpClient) {
    this.baseURL = environment.pokeApi
  }

  // consumindo a api
  getPokemon(pokemonName: string): Observable<PokemonData>{  // ele vai retornar um observable
    this.pokeData = this
                    .http
                    .get<PokemonData>
                    (`${this.baseURL}${pokemonName}`)
    return this.pokeData
  }
}