import styled from "styled-components";
import { usePokemon } from "../context/PokemonContext";

export default function Dashboard() {
  const { selectedPokemon, removePokemon } = usePokemon();

  return (
    <div>
      <h2>Selected Pokemon!</h2>
      <PokemonListWrapper>
        {selectedPokemon.map((pokemon) => {
          return (
            <div key={pokemon.id}>
              <img src={pokemon.img_url} alt={pokemon.korean_name} />
              <h3>{pokemon.korean_name}</h3>
              <button onClick={() => removePokemon(pokemon)}>삭제</button>
            </div>
          );
        })}
      </PokemonListWrapper>
    </div>
  );
}

const PokemonListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
