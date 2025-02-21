import PokemonCard from "./PokemonCard";

export default function PokemonList({ pokemonData, addPokemon }) {
  return (
    <div>
      <h2>Pokemon List!</h2>
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
