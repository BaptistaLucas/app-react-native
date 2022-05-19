import { PokemonDTO } from "./PokemonDTO";
import { UsuarioDTO } from "./UsuarioDTO";


export interface FavoritosDTO {
  id: number;
  pokemon: PokemonDTO;
  usuario: UsuarioDTO;
} 