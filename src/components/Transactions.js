import styled from "styled-components";

export default function Transactions({ data }) {
  console.log(data)
    const dateTransation = data.date?.replace('.', '/');
  return (
    <Container color={data.type}>
      <h4>{dateTransation}</h4>
      <h1 onClick={() => window.alert('Em processo de desenvolvimento...')}>{data.description}</h1>
      <h2>{Number(data.value).toFixed(2)?.replace('.', ',')} R$</h2>
      <ion-icon name="close" onClick={() => window.alert('Em processo de desenvolvimento...')}></ion-icon>
    </Container>
  );
}

const Container = styled.div`
width: 100%;
height: auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  h1{
    font-size: 16px;
    font-weight: 400;
    max-width: 50%;
    transition: all 0.1s;

    ::first-letter{
        text-transform: uppercase;
    }
    :hover{
        cursor: pointer;
        font-weight: 700;
    }
  }

  h4{
    font-size: 18px;
    color: #C6C6C6;
    font-weight: 300;
    margin-right: 10px;
  }
  ion-icon{
    font-size: 28px;
    right: 0;
    position: absolute;
    transition: all 0.1s;
    :hover{
        cursor: pointer;
        font-size: 30px;
    }
  }
  h2{
    color: ${props => (props.color === 'loss' ? `#ff0000` : `#03AC00`)};
    position: absolute;
    right: 30px;
    font-weight: 600;
    font-size: 16px;

    transition: all 0.3s;
    :hover{
        cursor: pointer;
        font-weight: 700;
    }
  }
`;
