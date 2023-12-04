import { useContext } from "react";
import { CartContainer, CartItemContainer } from "./styles"
import { AppProvider } from "../../../contexts/defaultContext";
import { v4 as uuidv4 } from "uuid"
import iconCart from './../../../assets/images/icon-cart.svg';

export const Cart = (props: { on: boolean }) => {

  const { cartItems } = useContext(AppProvider);

  const cartOn = props.on ? 1 : 0;
  return (
    <CartContainer on={cartOn}>

      <h5>Meus cafés&nbsp;<img src={iconCart} className='iconCart' /></h5>

      {!!cartItems && cartItems?.length > 0 ? cartItems?.map((item) => {

        const newPrice: string = new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(item.price);
        
        return (

          <CartItemContainer key={uuidv4()}>
            <img src={item.image} alt={"product"} className="cart-item__image" />
            <div>
              <h6>{item.name}</h6>
              <h4>{newPrice}</h4>
            </div>
          </CartItemContainer>);

      }) : <p>Não há produtos.</p>}
    </CartContainer>
  );
}