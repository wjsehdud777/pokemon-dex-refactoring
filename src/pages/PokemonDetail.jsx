import { Link, useNavigate, useParams } from "react-router-dom";
import MOCK_DATA from "../mock";

const PokemonDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const pokemon = MOCK_DATA.find((pokemon) => pokemon.id === Number(id));

  if (!pokemon) {
    return (
      <div>
        <p>포켓몬을 찾을 수 없습니다!</p>
        <button onClick={() => navigate(-1)}>뒤로 가기</button>
      </div>
    );
  }

  return (
    <div>
      <h1>{pokemon.korean_name}</h1>
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <p>Type: {pokemon.types.join(", ")}</p>
      <p>{pokemon.description}</p>
      <button onClick={() => navigate(-1)}>뒤로 가기</button>
    </div>
  );
};

export default PokemonDetail;
