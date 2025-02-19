import PokemonCard from "./PokemonCard";

export default function PokemonList({ pokemonData, addPokemon }) {
  return (
    <div>
      {pokemonData.map((pokemon) => (
        <PokemonCard
          pokemon={pokemon}
          key={pokemon.id}
          addPokemon={addPokemon}
        />
      ))}
    </div>
  );
}
