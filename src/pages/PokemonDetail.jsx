import { Link, Navigate, useParams } from "react-router-dom";
import MOCK_DATA from "../mock";

const PokemonDetail = () => {
  const { id } = useParams();
  const pokemon = MOCK_DATA.find((pokemon) => pokemon.id === Number(id));

  console.log(pokemon);

  return (
    <div>
      <button onClick={() => Navigate(-1)}>뒤로 가기</button>
      <h1>{pokemon.korean_name}</h1>
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <p>Type: {pokemon.types.join(", ")}</p>
      <p>{pokemon.description}</p>
    </div>
  );
};

export default PokemonDetail;
