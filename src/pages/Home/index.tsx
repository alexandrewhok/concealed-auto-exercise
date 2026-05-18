import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { ButtonTypes } from "../../components/Button/models";
import { Header, Wrapper } from "./styles";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Header>
        <h2>Vamos encontrar o seu próximo carro</h2>
        <h6>
          Responda a algumas perguntas rápidas e descubra qual o carro importado
          que combina consigo.
        </h6>
      </Header>
      <Button
        label="Responder"
        intent={ButtonTypes.PRIMARY}
        onClick={() => navigate("/quiz")}
      />
    </Wrapper>
  );
};

export default Home;
