import { useContext } from "react";
import { Cart } from "../../components/Cart";
import { AppProvider } from "../../contexts/defaultContext";
import { CheckoutContainer } from "./styles";
import { Col, Row } from "react-bootstrap";



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
                  <h5>&nbsp;


                    {/* “A cada xícara, a cada conversa, com cada comunidade – Nós nutrimos infinitas possibilidades de conexão humana.” */}
                  </h5>
                </div>

                <div className="block">
                  <h5>&nbsp;
                    {/* “A cada xícara, a cada conversa, com cada comunidade – Nós nutrimos infinitas possibilidades de conexão humana.” */}
                  </h5>
                </div>
              </div>

              <div className="blocks-2">
                <div className="block">
                  <h5>&nbsp;
                    {/* “A cada xícara, a cada conversa, com cada comunidade – Nós nutrimos infinitas possibilidades de conexão humana.” */}
                  </h5>
                </div>
              </div>
              
            </div>
          </Col>
        </Row>

        <Cart on={cartOn}></Cart>
      </CheckoutContainer>
      
  );
}