import styled from "styled-components";

function StartGame({toggle}) {
  return (
    <>
      <Container>

  <div>

      <img src="/images/dices.png" alt="Dices" />
  </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
      </Container>
    </>
  );
}

export default StartGame;

const Container = styled.div `
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
   align-items: center;

   .content{
         h1{
            font-size:96px;
            white-space :nowrap ;
         }
   }

`;

const Button = styled.button`
  color: white;
  padding: 10px 18px;
  background-color: black;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  border: 1px solid transparent;
  font-size: 16px;
  cursor: pointer;
  &:hover{
     background-color: white;
     border: 1px solid black;
     color: black;
     transition: 0.1s background ease-in;
  }
`;