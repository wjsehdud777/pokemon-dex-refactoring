import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { usePokemon } from "../context/PokemonContext";
import MOCK_DATA from "../mock";

export default function PokemonList() {
  const { addPokemon } = usePokemon();

  return (
    <div>
      <h2>Pokemon List!</h2>
      <PokemonListWrapper>
        {MOCK_DATA.map((pokemon) => (
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
