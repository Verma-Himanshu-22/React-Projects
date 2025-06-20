import styled from "styled-components";

function NumberSelector({setError,error,seletedNumber, setSeletedNumber}) {
  const arrNum = [1, 2, 3, 4, 5, 6];
  // console.log(seletedNumber);

  const numberSelectorHandler=(value)=>{
          setSeletedNumber(value)
          setError("")
  }
  return (
    <NumberSelectorContainer>
     <p className="error">
       {error}
     </p>
    <div className="flex">
      {arrNum.map((value, i) => (
        <Box
          $isSelected={value===seletedNumber}

        onClick={() =>numberSelectorHandler(value)} key={i}>
          {value}
        </Box>
      ))}
    </div>
    <p>Select a Number</p>
    </NumberSelectorContainer>
  );
}

export default NumberSelector;
const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
   background-color: ${props => (props.$isSelected ? 'blue' : 'white')};
  color: ${props => (props.$isSelected ? 'white' : 'black')};
`;

const NumberSelectorContainer=styled.div `
  .error{
        color: red;
  }
   display: flex;
   flex-direction: column;
   align-items: end;
      .flex{
        display: flex;
        gap: 24px;
      }
      p{
        font-size: 24px;
        font-weight: 700;
      }
`
