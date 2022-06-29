import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";
import { Grid } from "react-loader-spinner";

export default function RegisterPage() {
  const navigate = useNavigate();

  //================= VARIAVEIS DE AMBIENTE - BACKEND ====================//
  const LOGIN_POST_URL = "http://localhost:5000/register";

  //================= VARIAVEIS DE ESTADO ====================//
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setconfirmPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  //================= INICIO DAS FUNÇÕES ====================//
  function Register(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      return window.alert("As senhas estão diferentes, tente novamente.");
    }
    if (
      name !== "" &&
      email !== "" &&
      password !== "" &&
      confirmPassword === password &&
      password.length >= 6
    ) {
      const promise = axios.post(LOGIN_POST_URL, {
        name: name,
        email: email,
        password: password,
      });

      setLoading(true);

      promise.then((response) => {
        window.alert("Ok, usuario cadastrado com sucesso.");
        navigate("/");
        setLoading(false);
      });
      promise.catch((error) => {
        window.alert(error.response.data);
        setLoading(false);
      });
    } else if (name === "" || email === "" || password === "") {
      window.alert(
        "O(s) campo(s) esta(o) vazios entre com os dados para efetuar o login"
      );
      setLoading(false);
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
        {loading ? (
          <Loading>
            <Grid width="60px" color="#FFFFFF" />
          </Loading>
        ) : (
          <button>Cadastrar</button>
        )}
      </form>

      <span onClick={() => goToLoginPage()}>
        Já tem uma conta? Entre agora!
      </span>
    </Container>
  );
}
const Loading = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 5px;
`;

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
