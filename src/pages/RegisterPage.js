import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import React from "react";

export default function RegisterPage() {
  const navigate = useNavigate();

  //================= VARIAVEIS DE ESTADO ====================//
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setconfirmPassword] = React.useState("");

  //================= INICIO DAS FUNÇÕES ====================//
  function Register(event) {
    event.preventDefault();

    if(password !== confirmPassword){
        return window.alert('As senhas estão diferentes, tente novamente.');
    }
    if (
      name !== "" &&
      email !== "" &&
      password !== "" &&
      confirmPassword === password
    ) {
        window.alert("Ok, usuario cadastrado com sucesso.");
        navigate('/')
    } 
    else {
        window.alert('Por favor preencha os dados de forma correta e tente novamente');
    }
  }

  function goToLoginPage() {
    navigate("/");
  }

  return (
    <Container>
      <h1>My Wallet</h1>

      <form onSubmit={(event) => Register(event)}>
        <input
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome"
        ></input>
        <input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
          type="email"
        ></input>
        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
          type="password"
        ></input>
        <input
          onChange={(e) => setconfirmPassword(e.target.value)}
          placeholder="Confirme a senha"
          type="password"
        ></input>
        <button>Cadastrar</button>
      </form>

      <span onClick={() => goToLoginPage()}>
        Já tem uma conta? Entre agora!
      </span>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #8c11be;

  form {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  h1 {
    font-family: "Saira Stencil One";
    color: #ffffff;
    font-size: 48px;
    transition: 0.3s all;
    :hover {
      cursor: pointer;
    }
  }

  input {
    width: 80%;
    height: 45px;
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
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    transition: 0.3s all;
    :hover {
      box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.6);
      cursor: pointer;
      font-weight: 500;
    }
  }

  span {
    color: #ffffff;
    font-weight: 300;
    font-size: 18px;
    margin-top: 5%;
    transition: 0.3s all;
    :hover {
      font-weight: 500;
      font-size: 19px;
      cursor: pointer;
    }
  }
`;
