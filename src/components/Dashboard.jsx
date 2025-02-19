export default function Dashboard({ selectedPokemon, removePokemon }) {
  return (
    <div>
      <h2>Selected Pokemon!</h2>
      {selectedPokemon.map((pokemon) => {
        return (
          <div key={pokemon.id}>
            <img src={pokemon.img_url} alt={pokemon.korean_name} />
            <h3>{pokemon.korean_name}</h3>
            <button onClick={() => removePokemon(pokemon.id)}>삭제</button>
          </div>
        );
      })}
    </div>
  );
}
