import { useNavigate } from "react-router-dom";
import { useUserLogged } from "../contexts/UserLoggedProvider";
import { useEffect, useState } from "react";

import styled from "styled-components";
import axios from "axios";

import Transactions from "../components/Transactions";

export default function HomePage() {
  const navigate = useNavigate();
  const { saveDataUser } = useUserLogged();

  //=========== VARIAVEIS DE CONTROLE - BACK-END ============//
  const DATAUSER_GET_URL = "http://localhost:5000/transactions";

  //================= VARIAVEIS DE ESTADO ====================//
  const [transactions, setTransactions] = useState([]);
  //================= INICIO DAS FUNÇÕES ====================//
  useEffect(() => {
    const promise = axios.get(DATAUSER_GET_URL, { ...saveDataUser.config });

    promise.then((response) => {
      setTransactions(response.data);
    });
    promise.catch((error) => {
      console.log(error.response.data);
    });
  }, [saveDataUser.config]);

  function appLogout() {
    if (window.confirm("Tem certeza que deseja sair do aplicativo ?"))
      return navigate("/");
  }
  function goToCashWin() {
    navigate("/newcashwin");
  }
  function goToCashLoss() {
    navigate("/newcashloss");
  }
  let Total = 0;
  transactions.map((item) => {
    return Total +=  Number(item.value);
  });
  console.log(Total)

  return (
    <Container>
      <Header>
        <h3>Olá, {saveDataUser.username}</h3>
        <ion-icon name="log-out-outline" onClick={() => appLogout()}></ion-icon>
      </Header>

      <ExtratoFinanceiro>
        {transactions.length === 0 ? (
          <h6>Não há registos de entrada ou saída</h6>
        ) : (
          transactions.map((item, index) => (
            <Transactions key={index} data={item} />
          ))
        )}
        <FooterExtrato valor={Total}>
          <span>SALDO TOTAL: </span> <h2>{Total.toFixed(2)?.replace('.', ',')} R$</h2>
        </FooterExtrato>
      </ExtratoFinanceiro>

      <ButtonsContainer>
        <div onClick={() => goToCashWin()}>
          <ion-icon name="add-circle-outline"></ion-icon>
          <h5>Nova entrada</h5>
        </div>
        <div onClick={() => goToCashLoss()}>
          <ion-icon name="remove-circle-outline"></ion-icon>
          <h5>Nova saída</h5>
        </div>
      </ButtonsContainer>
    </Container>
  );
}
const FooterExtrato = styled.div`
  width: 100%;
  height: 45px;
  position: relative;
  bottom: 0;
  left: 0;
  background-color: #a328d6;
  border-radius: 10px;

  box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
  

  display: flex;
  align-items: center;
  justify-content: center;
  span {
    color: #FFFFFF;
    font-weight: 300;
    font-size: 18px;
    letter-spacing: 5px;
    margin-right: 10px;
  }
  h2{
    color: ${props => (props.valor > 0 ? "#0fff00" : "#ff0000")};
    font-weight:900;
    font-size: 26px;
  }

`;

const ExtratoFinanceiro = styled.div`
  width: 80%;
  height: 65%;
  background-color: #ffffff;
  border-radius: 6px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: scroll;
  overflow-x: hidden;

  h6 {
    font-family: "Raleway";
    font-weight: 100;
    font-size: 22px;
    color: #868686;
  }

  transition: linear 0.3s;
  :hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.6);
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 80%;
  height: 50px;
  margin-bottom: 10px;

  ion-icon {
    color: #ffffff;
    font-size: 40px;

    :hover {
      cursor: pointer;
    }
  }
`;

const ButtonsContainer = styled.div`
  margin: 20px;
  width: 80%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 2px;

  div {
    background-color: #a328d6;
    width: 50%;
    height: 100%;
    margin-right: 5px;
    border-radius: 6px;
    padding: 5px;
    position: relative;

    color: #ffffff;
    font-weight: 500;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);

    h5 {
      font-size: 22px;
      font-weight: 500;
      font-family: "Raleway";

      position: absolute;
      bottom: 0;
      left: 6%;
    }

    ion-icon {
      color: #ffffff;
      font-size: 38px;
    }
    transition: linear 0.3s;
    :hover {
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
      cursor: pointer;
      transition: linear 0.3s;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #8c11be;

  button {
    width: 80%;
    height: 45px;
    background-color: #a328d6;
    border: thin solid #8c11be;
    color: #ffffff;
    font-family: "Raleway";
    font-size: 20px;
    font-weight: 300;
    margin-top: 5px;

    border-radius: 4px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
  }

  h3 {
    font-family: "Raleway";
    font-weight: 700;
    font-size: 26px;
    color: #ffffff;
  }
`;
