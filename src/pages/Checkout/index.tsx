import { useContext } from "react";
import { Cart } from "../../components/Cart";
import { AppProvider } from "../../contexts/defaultContext";
import { CheckoutContainer } from "./styles";
import { Col, Row } from "react-bootstrap";
import { LiaMapMarkerSolid } from "react-icons/lia";
import { MdOutlineAttachMoney, MdOutlineCheck } from "react-icons/md";
import { FormAddress } from "./FormAddress";
import { FormPayment } from "./FormPayment";
import { FormItems } from "./FormItems";







export const Checkout = () => {

  const { cartOn } = useContext(AppProvider);

  return  (

      <CheckoutContainer>
        <Row>
          <div className="title-checkout">
            <h5>Complete o seu pedido</h5>
          </div>
        </Row>
        <Row>
          <Col md={2} />
          <Col md={8}>
            <div id="checkout">
              <div className="blocks-1">
                <div className="block">
                  <h5><LiaMapMarkerSolid />&nbsp;Endereço de entrega</h5>
                  <h6>Informe o endereço onde deseja receber seu pedido</h6>  

                  <FormAddress/>
                </div>

                <div className="block">
                  <h5><MdOutlineAttachMoney />&nbsp;Pagamento</h5>
                  <h6>O pagamento é feito na entrega. Escolha a forma que deseja pagar.</h6>

                  <FormPayment/>
                </div>
              </div>

              <div className="blocks-2">
                <div className="block">
                  <h5><MdOutlineCheck />&nbsp;Cafés selecionados</h5>
                  
                  <FormItems/>
                </div>
              </div>
              
            </div>
          </Col>
        </Row>

        <Cart on={cartOn}></Cart>
      </CheckoutContainer>
      
  );
}
