import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function HomePage() {
  const navigate = useNavigate();

  function appLogout() {
    if (window.confirm("Tem certeza que deseja sair do aplicativo ?")) {
      navigate("/");
    }
  }
  function goToCashWin(){
    navigate("/newcashwin");
  }
  function goToCashLoss(){
    navigate("/newcashloss");
  }

  return (
    <Container>
      <Header>
        <h3>Olá, Fulano</h3>
        <ion-icon name="log-out-outline" onClick={() => appLogout()}></ion-icon>
      </Header>

      <ExtratoFinanceiro>
        <h6>Não há registos de entrada ou saída</h6>
      </ExtratoFinanceiro>

      <ButtonsContainer>
        <div onClick={() => goToCashWin()}>
          <ion-icon name="add-circle-outline"></ion-icon>
          <h5>Nova entrada</h5>
        </div>
        <div  onClick={() => goToCashLoss()}>
          <ion-icon name="remove-circle-outline"></ion-icon>
          <h5>Nova saída</h5>
        </div>
      </ButtonsContainer>
    </Container>
  );
}
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
      color: #FFFFFF;
      font-size: 38px;
    }
    transition: linear 0.3s;
    :hover{
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
        cursor: pointer;
        transition: linear 0.3s;
       
    }
  }
`;

const ExtratoFinanceiro = styled.div`
  width: 80%;
  height: 50%;
  background-color: #ffffff;
  border-radius: 6px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);

  h6 {
    font-family: "Raleway";
    font-weight: 100;
    font-size: 22px;
    color: #868686;
  }

  transition: linear 0.3s;
  :hover{
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.6);
    cursor: pointer;
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
