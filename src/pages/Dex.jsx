import { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../mock";

const Dex = () => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  return (
    <div>
      <h1>Pokemon Dex</h1>
      <Dashboard selectedPokemon={selectedPokemon} />
      <PokemonList pokemonData={MOCK_DATA} />
    </div>
  );
};

export default Dex;
