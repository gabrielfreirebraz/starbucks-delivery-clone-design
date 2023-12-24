import { useContext } from "react";
import { Cart } from "../../components/Cart";
import { AppProvider } from "../../contexts/defaultContext";
import { SuccessContainer } from "./styles";
import { ImLocation2 } from "react-icons/im";
import { MdAccessTimeFilled } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";


export const Success = () => {

  const { cartOn } = useContext(AppProvider);

  return (
    <SuccessContainer>
      <h5>Uhu! Seu pedido foi confirmado e está sendo preparado</h5>
      <h6>Agora é só aguardar que logo o café chegará até você</h6>

      <div className="blocks">
        <div className="block-1"></div> {/* background image  */}

        <ul className="block-2">
          <li>
            <h5>
              <ImLocation2 />&nbsp;Entrega em 
              <br/>
              <strong>R. Dr. Djalma Pinheiro Franco, SN - Vila Santa Catarina</strong>
            </h5>
          </li>
          <li>
            <h5>
              <MdAccessTimeFilled />&nbsp;Previsão de entrega
              <br/>
              <strong>20 min - 30 min</strong>
            </h5>
          </li>
          <li>
            <h5>
              <RiMoneyDollarCircleFill />&nbsp;Pagamento na entrega
              <br/>
              <strong>Cartão de crédito</strong>
            </h5>
          </li>
        </ul>
      </div>

      <Cart on={cartOn}></Cart>
    </SuccessContainer>
  );
}