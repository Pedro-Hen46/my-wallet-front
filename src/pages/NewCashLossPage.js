import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function NewCashLossPage() {
  const navigate = useNavigate();

   //================= INICIO DAS FUNÇÕES ====================//
  function saveLossMongo() {
    window.alert("Saída salva com sucesso!");
    navigate("/home");
  }

  return (
    <Container>
      <h3>Nova saída</h3>

      <form>
        <input placeholder="Valor"></input>
        <input placeholder="Descrição"></input>
        <button>Salvar saída</button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #8c11be;

  button {
    width: 80%;
    height: 55px;
    background-color: #a328d6;
    border: thin solid #8c11be;
    color: #ffffff;
    font-family: "Raleway";
    font-size: 20px;
    font-weight: 500;
    margin-top: 5px;

    border-radius: 4px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
    transition: linear 0.2s;

    :hover{
      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.6);
      cursor: pointer;
      font-weight: 600;
    }
  }

  form {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  input {
    width: 80%;
    height: 55px;
    margin-bottom: 10px;
    border-radius: 4px;
    border: thin solid #8c11be;
    font-family: "Raleway";
    padding: 10px;
    :hover {
      box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.6);
      cursor: pointer;
    }
  }
  h3 {
    font-family: "Raleway";
    font-weight: 700;
    font-size: 26px;
    color: #ffffff;
    margin-left: 10%;
    margin-bottom: 10px;
  }
`;
