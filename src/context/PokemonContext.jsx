import { createContext, useContext, useState } from "react";

const PokemonContext = createContext();

export function PokemonProvider({ children }) {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const addPokemon = (e, pokemon) => {
    e.preventDefault();
    if (selectedPokemon.find((e) => e.id === pokemon.id)) {
      return alert("이미 추가된 포켓몬입니다!");
    }

    if (selectedPokemon.length >= 6) {
      return alert("포켓몬은 최대 6마리만 소유할 수 있습니다!");
    }

    setSelectedPokemon([...selectedPokemon, pokemon]);
  };

  const removePokemon = (pokemon) => {
    const updatedPokemon = selectedPokemon.filter((e) => e.id !== pokemon.id);
    setSelectedPokemon(updatedPokemon);
  };

  return (
    <PokemonContext.Provider
      value={{ selectedPokemon, addPokemon, removePokemon }}
    >
      {children}
    </PokemonContext.Provider>
  );
}

export function usePokemon() {
  return useContext(PokemonContext);
}
