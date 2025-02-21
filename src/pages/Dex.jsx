import { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../mock";

const Dex = () => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const addPokemon = (pokemon) => {
    if (selectedPokemon.find((e) => e.id === pokemon.id)) {
      return alert("이미 추가된 포켓몬입니다!");
    }

    if (selectedPokemon.length >= 6) {
      return alert("포켓몬은 최대 6마리만 소유할 수 있습니다!");
    }

    setSelectedPokemon([...selectedPokemon, pokemon]);
  };

  return (
    <div>
      <h1>Pokemon Dex</h1>
      <Dashboard selectedPokemon={selectedPokemon} />
      <PokemonList pokemonData={MOCK_DATA} addPokemon={addPokemon} />
    </div>
  );
};

export default Dex;
