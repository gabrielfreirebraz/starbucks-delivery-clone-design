import { useContext } from "react";
import { Cart } from "../../components/Cart";
import { AppProvider } from "../../contexts/defaultContext";
import { SuccessContainer } from "./styles";
import { ImLocation2 } from "react-icons/im";
import { MdAccessTimeFilled } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { useLocation } from "react-router-dom";


export const Success = () => {

 const { cartOn } = useContext(AppProvider);
 const { state } = useLocation();

 !!state && localStorage.setItem('checkout__rua', state?.rua)
 !!state && localStorage.setItem('checkout__pagamento', state?.pagamento)

  return (
    <SuccessContainer>
      <h5>Uhu! Seu pedido foi confirmado e está sendo preparado</h5>
      <h6>Agora é só aguardar que logo o café chegará até você</h6>

      <div className="blocks">
        <div className="block-1"></div> {/* background image  */}

        <ul className="block-2">
          <li>
            <h5>
              <ImLocation2 />&nbsp;Entrega em&nbsp; 
              <br/>
              <strong>{localStorage.getItem('checkout__rua')}</strong>
            </h5>
          </li>
          <li>
            <h5>
              <MdAccessTimeFilled />&nbsp;Previsão de entrega&nbsp;
              <br/>
              <strong>20 min - 30 min</strong>
            </h5>
          </li>
          <li>
            <h5>
              <RiMoneyDollarCircleFill />&nbsp;Pagamento na entrega&nbsp;
              <br/>
              <strong>{localStorage.getItem('checkout__pagamento')}</strong>
            </h5>
          </li>
        </ul>
      </div>

      <Cart on={cartOn}></Cart>
    </SuccessContainer>
  );
}