import styled from "styled-components";
import PokemonCard from "./PokemonCard";

export default function PokemonList({ pokemonData, addPokemon }) {
  return (
    <div>
      <h2>Pokemon List!</h2>
      <PokemonListWrapper>
        {pokemonData.map((pokemon) => (
          <PokemonCard
            pokemon={pokemon}
            key={pokemon.id}
            addPokemon={addPokemon}
          />
        ))}
      </PokemonListWrapper>
    </div>
  );
}

const PokemonListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
