import { useContext } from "react";
import { ButtonQtdContainer } from "../Button/styles";
import { ButtonGroup } from "react-bootstrap";
import { CardProvider } from "../../contexts/defaultContext";


export const Quantity = () => {

  const {newPrice, subtractItem, addItem, onChangeQuantity, quantity} = useContext(CardProvider)

    return (
      <>
        <label className='preco-item'><span>R$</span> {newPrice}</label>
      
        <ButtonGroup className='btn-group-qtd'>
          <ButtonQtdContainer>
            <svg onClick={subtractItem} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash-lg" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
            </svg>
          </ButtonQtdContainer>
          
          <input type='number' className='txt-qtd' value={quantity} onChange={(e) => onChangeQuantity(e.target.value)}></input>
          
          <ButtonQtdContainer>
            <svg onClick={addItem} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
            </svg>
          </ButtonQtdContainer>
        </ButtonGroup>
      </>
  );
}