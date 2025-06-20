import styled from "styled-components";

function RollDice({ currentDice, generateRandomNo }) {
  return (
    <DiceContainer>
      <div className="dice" onClick={generateRandomNo}>
        <img
          src={`/images/dice_${currentDice}.png`}
          alt={`Dice ${currentDice}`}
        />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
}

export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  margin-top: 48px;
  flex-direction: column;
  align-items: center;
  .dice {
    cursor: pointer;
  }
  p {
    font-size: 24px;
  }
`;
