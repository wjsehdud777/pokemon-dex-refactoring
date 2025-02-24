import { Link } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  return (
    <StHomeContainer>
      <h1>Welcome to Pokemon Dex</h1>
      <Link to={"/dex"}>
        <StHomeButton>포켓몬 도감 시작하기</StHomeButton>
      </Link>
    </StHomeContainer>
  );
};

const StHomeButton = styled.button`
  background-color: #ff0000;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  cursor: pointer;
  font-size: 16px;
  padding: 10px 20px;
  text-transform: uppercase;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: rgb(114, 0, 0);
  }
`;

const StHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgb(225, 225, 225);
`;

export default Home;
