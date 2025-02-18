import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemonData, addPokemon }) => {
  return (
    <div>
      {pokemonData.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          addPokemon={addPokemon}
        />
      ))}
    </div>
  );
};

export default PokemonList;
