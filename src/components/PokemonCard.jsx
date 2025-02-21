import { Link } from "react-router-dom";

export default function PokemonCard({ pokemon, addPokemon }) {
  return (
    <Link key={pokemon.id} to={`/detail/${pokemon.id}`}>
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <h3>{pokemon.korean_name}</h3>
      <button onClick={(e) => addPokemon(e, pokemon)}>추가</button>
    </Link>
  );
}
