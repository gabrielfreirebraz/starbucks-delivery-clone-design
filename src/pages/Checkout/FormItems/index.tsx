import { useContext } from "react";
import { ButtonContainer } from "../../../components/Button/styles"
import { AppProvider } from "../../../contexts/defaultContext";
import { CheckoutItemContainer, FormItemsContainer } from "./styles"

function convertToPrice(value: number): string {
  return new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
}

export const FormItems = () => {

  const { cartItems } = useContext(AppProvider);

  return  (
    <FormItemsContainer>

      <div className="block">

        <div className="checkout-items__cart">
          {cartItems?.map((item, i) => {

            return (

              <CheckoutItemContainer key={i}>
                <img src={item.image} alt={"product"} className="cart-item__image" />
                
                <div className="cart-item__desc">
                  <h6>{item.name}</h6>
                  <h4>{convertToPrice(item.price)}</h4>
                </div>

              </CheckoutItemContainer>);
            })}
        </div>

        <ButtonContainer variant="primary" type="submit">
          Confirmar pedido
        </ButtonContainer>
      </div>
    </FormItemsContainer>
  )
}