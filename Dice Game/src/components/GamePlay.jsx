import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import TotalScore from "./TotalScore";
import styled from "styled-components";
import { useState } from "react";
import Rules from "./Rules";
function GamePlay() {
  const [score, setScore] = useState(0);
  const [seletedNumber, setSeletedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("")
  const resetScore=(score)=>{
         setScore(0)
  }
  const [showRules, setShowRules] = useState(false)
  
  const generateRandomNo = () => {
    if(!seletedNumber){
         setError("You have not selected any number")
         console.log('error')
         return;
    }

    const randomNumber = Math.floor(Math.random() * 6) + 1;
    //  console.log(randomNumber)
    setCurrentDice(randomNumber);

    // if you guessed it correctly 
      if(seletedNumber===randomNumber){
          setScore((prev)=> prev+randomNumber)
      }
      else{
         setScore((prev)=> prev-2)
      }
      // when clicked on dice selected no. is reset 

      setSeletedNumber(undefined)
  };

  return (
    <>
      <MainContainer>
        <div className="top_section">
          <TotalScore score={score} />
          <NumberSelector
          setError={setError}
             error={error}
            seletedNumber={seletedNumber}
            setSeletedNumber={setSeletedNumber}
          />
        </div>
        <RollDice
          currentDice={currentDice}
          setCurrentDice={setCurrentDice} // optional now
          generateRandomNo={generateRandomNo}
        />
        <div className="btns">
            <Button onClick={resetScore} className="btn">Reset Score</Button>
            <Button className="btn"
  onClick={() => {
    setShowRules((prev) => {
      const newState = !prev;

      // scroll down only when opening
      if (!prev) {
        setTimeout(() => {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
          });
        }, 100);
      }
      return newState;
    });
  }}
>
  {showRules ? "Hide" : "Show"} Rules
</Button>

        </div>
        {showRules && <Rules/>}
      </MainContainer>
    </>
  );
}

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 70px;
  .top_section {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .btns{
    margin-top: 15px;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     gap: 15px;
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
  transition: 0.1s background ease-in;
  &:hover{
     background-color: white;
     border: 1px solid black;
     color: black;
     transition: 0.1s background ease-in;
  }
  .btn {
    
      background-color: white;
      
      border:1px solid black ;
      color: black;
    &:hover{
       background-color: white;
       border: 1px solid transparent;
       color: black;
  }}
`;