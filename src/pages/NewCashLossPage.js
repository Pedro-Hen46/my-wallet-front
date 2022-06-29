import { useUserLogged } from "../contexts/UserLoggedProvider";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import styled from "styled-components";

export default function NewCashLossPage() {
  const navigate = useNavigate();
  const { saveDataUser } = useUserLogged();

  //=========== VARIAVEIS DE CONTROLE - BACK-END ============//
  const DATAUSER_POST_URL = "http://localhost:5000/transactions";

  //================= VARIAVEIS DE ESTADO ====================//
  const [value, setValue] = useState(0);
  const [description, setDescription] = useState("");

  //================= INICIO DAS FUNÇÕES ====================//

  function saveLossToApi(event) {
    event.preventDefault();

    if (value !== 0 || description !== "") {
      const lossScript = {
        value: -value,
        description: description,
        type: "loss",
      };

      const promise = axios.post(DATAUSER_POST_URL, lossScript, {
        ...saveDataUser.config,
      });

      promise.then((response) => {
        window.alert("Saída salva com sucesso!");
        navigate("/home");
      });
      promise.catch((error) => {
        console.log(error.response.data)
        window.alert("MEU DEUS! Erro no sistema!! tente novamente mais tarde.");
      });
    } else {
      window.alert(
        "O(s) campo(s) esta(o) vazios entre com os dados da Saída!"
      );
    }
  }

  return (
    <Container>
      <h3>Nova saída</h3>
      <form onSubmit={(event) => saveLossToApi(event)}>
        <input
          onChange={(e) => setValue(e.target.value)}
          type="number"
          placeholder="Valor"
        ></input>
        <input
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Descrição"
        ></input>
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

    :hover {
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
