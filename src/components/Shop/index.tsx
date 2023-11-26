import { Card, Col, Row } from "react-bootstrap";
import { ButtonContainer } from "../Button/styles";

import coffee1 from './../../assets/images/shop/coffee1.jpeg';
import coffee2 from './../../assets/images/shop/coffee2.jpeg';
import coffee3 from './../../assets/images/shop/coffee3.jpeg';
import coffee4 from './../../assets/images/shop/coffee4.jpeg';
import coffee5 from './../../assets/images/shop/coffee5.jpeg';
import coffee6 from './../../assets/images/shop/coffee6.jpeg';
import coffee7 from './../../assets/images/shop/coffee7.jpeg';
import coffee8 from './../../assets/images/shop/coffee8.jpeg';
import { Quantity } from "../Quantity";
// import coffee9 from './../../assets/images/shop/coffee9.jpeg';
// import coffee10 from './../../assets/images/shop/coffee10.jpeg';
// import coffee11 from './../../assets/images/shop/coffee11.jpeg';
// import coffee12 from './../../assets/images/shop/coffee12.jpeg';
// import coffee13 from './../../assets/images/shop/coffee13.jpeg';
// import coffee14 from './../../assets/images/shop/coffee14.jpeg';

export const Shop = () => {

  return (
    <>
      {/* // ---------------------- TITLE SHOP */}

      <Row>
        <Col md={12}>
          <div id="title-shop">
            <h5>
              “A cada xícara, a cada conversa, com cada comunidade – Nós nutrimos infinitas possibilidades de conexão humana.”
            </h5>
            <h5>
              Receba seu cafézinho em casa usando seu Starbucks Rewards
            </h5>
          </div>
        </Col>
      </Row>

    
      {/* // ---------------------- LINE 1 */}


      <Row>
        <Col>
          <div className="sub-title-shop"><div className='traco' /><h5>Lançamentos</h5><div className='traco' /></div>
        </Col>
      </Row>


      <Row>
        
        <Col>
          <Card>
            <Card.Img variant="top" src={coffee1} />
            <Card.Body>
              <Card.Title>Apple Crisp frappuccino</Card.Title>
              <Card.Text>
                Bebida batida com gelo, com ou sem café, xarope de maça com açucar mascavo, finalizado com chantilly de baunilha e uma deliciosa calda de maça caramelizada com especiarias.

                <Quantity price={21.00} />
              </Card.Text>



              <ButtonContainer variant={"default"}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
                </svg>&nbsp;
                quero meu café
              </ButtonContainer>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src={coffee2} />
            <Card.Body>
              <Card.Title>Apple Crisp frappuccino</Card.Title>
              <Card.Text>
                Bebida batida com gelo, com ou sem café, xarope de maça com açucar mascavo, finalizado com chantilly de baunilha e uma deliciosa calda de maça caramelizada com especiarias.
              </Card.Text>
              <ButtonContainer variant={"default"}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
                </svg>&nbsp;
                quero meu café</ButtonContainer>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src={coffee3} />
            <Card.Body>
              <Card.Title>Apple Crisp frappuccino</Card.Title>
              <Card.Text>
                Bebida batida com gelo, com ou sem café, xarope de maça com açucar mascavo, finalizado com chantilly de baunilha e uma deliciosa calda de maça caramelizada com especiarias.
              </Card.Text>
              <ButtonContainer variant={"default"}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
                </svg>&nbsp;
                quero meu café</ButtonContainer>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src={coffee4} />
            <Card.Body>
              <Card.Title>Apple Crisp frappuccino</Card.Title>
              <Card.Text>
                Bebida batida com gelo, com ou sem café, xarope de maça com açucar mascavo, finalizado com chantilly de baunilha e uma deliciosa calda de maça caramelizada com especiarias.
              </Card.Text>
              <ButtonContainer variant={"default"}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
                </svg>&nbsp;
                quero meu café</ButtonContainer>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src={coffee5} />
            <Card.Body>
              <Card.Title>Apple Crisp frappuccino</Card.Title>
              <Card.Text>
                Bebida batida com gelo, com ou sem café, xarope de maça com açucar mascavo, finalizado com chantilly de baunilha e uma deliciosa calda de maça caramelizada com especiarias.
              </Card.Text>
              {/* R$ 21,00 */}
              <ButtonContainer variant={"default"}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
                </svg>&nbsp;
                quero meu café</ButtonContainer>
            </Card.Body>
          </Card>
        </Col>
    </Row>


    {/* // ---------------------- LINE 2 */}

    <Row>
        <Col>
          <div className="sub-title-shop"><div className='traco' /><h5>Frappuccinos</h5><div className='traco' /></div>
        </Col>
      </Row>


    <Row>
        <Col>
          <Card>
            <Card.Img variant="top" src={coffee6} />
            <Card.Body>
              <Card.Title>Apple Crisp frappuccino</Card.Title>
              <Card.Text>
                Bebida batida com gelo, com ou sem café, xarope de maça com açucar mascavo, finalizado com chantilly de baunilha e uma deliciosa calda de maça caramelizada com especiarias.
              </Card.Text>
              <ButtonContainer variant={"default"}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
                </svg>&nbsp;
                quero meu café</ButtonContainer>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src={coffee7} />
            <Card.Body>
              <Card.Title>Apple Crisp frappuccino</Card.Title>
              <Card.Text>
                Bebida batida com gelo, com ou sem café, xarope de maça com açucar mascavo, finalizado com chantilly de baunilha e uma deliciosa calda de maça caramelizada com especiarias.
              </Card.Text>
              <ButtonContainer variant={"default"}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
                </svg>&nbsp;
                quero meu café</ButtonContainer>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src={coffee8} />
            <Card.Body>
              <Card.Title>Apple Crisp frappuccino</Card.Title>
              <Card.Text>
                Bebida batida com gelo, com ou sem café, xarope de maça com açucar mascavo, finalizado com chantilly de baunilha e uma deliciosa calda de maça caramelizada com especiarias.
              </Card.Text>
              <ButtonContainer variant={"default"}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
                </svg>&nbsp;
                quero meu café</ButtonContainer>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </>
  );
}