import { useState } from "react";
import { ButtonQtdContainer } from "../Button/styles";


// type TQuantityOfItemProps = {
//   value?: number
// }

export const Quantity = () => {

    const [value, setValue] = useState(1);

    function add() {
      setValue((v) => v = v+1);
    }

    function subtract() {
      setValue((v) => v = (v > 0 ? v-1 : v));
    }

    function onChangeQuantity(newValue: number | string) {
      setValue(Number(newValue));
    }

    return (
      <>
        <ButtonQtdContainer>
          <svg onClick={subtract} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash-lg" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
          </svg>
        </ButtonQtdContainer>
        
        <input type='number' className='txt-qtd' value={value} onChange={(e) => onChangeQuantity(e.target.value)}></input>
        
        <ButtonQtdContainer>
          <svg onClick={add} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
          </svg>
        </ButtonQtdContainer>
      </>
  );
}