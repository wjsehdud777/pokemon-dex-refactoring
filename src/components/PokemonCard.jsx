const PokemonCard = ({ pokemon, addPokemon }) => {
  return (
    <div key={pokemon.id}>
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <h3>{pokemon.korean_name}</h3>
      <button onClick={() => addPokemon(pokemon.id)}>추가</button>
    </div>
  );
};

export default PokemonCard;
