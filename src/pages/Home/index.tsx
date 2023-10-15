
import { HomeContainer } from './styles';
import { Carousel, Col, Row, Card } from 'react-bootstrap';
import { ButtonContainer } from '../../components/Button/styles';

import imgBanner1 from './../../assets/images/banner/banner_1121600051_desktop.jpg'
import imgBanner2 from './../../assets/images/banner/banner_195590685_desktop.jpg'
import imgBanner3 from './../../assets/images/banner/banner_3676615800_desktop.jpg'
import iconNext from './../../assets/images/chevron-right.svg';
import iconPrev from './../../assets/images/chevron-left.svg';
import coffe1 from './../../assets/images/shop/coffe1.jpeg';

import './styles'


const Home = () => {

  return(
    <HomeContainer>
      <Row>
        <Col></Col>
        <Col>
          <Banner />
        </Col>
        <Col></Col>
      </Row>

      <Row>
        <Col>
          <Shop/>
        </Col>
      </Row>
      
    </HomeContainer>
  );
}


const Banner = () => {
  return (
    <Carousel nextIcon={<img src={iconNext} />} prevIcon={<img src={iconPrev} />}>
      <Carousel.Item>
        <img src={imgBanner1} alt="Slide 1" />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={imgBanner2} alt="Slide 2" />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={imgBanner3} alt="Slide 3" />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

const Shop = () => {

  return (
    <Row>
      <Col></Col>
      
      <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={coffe1} />
          <Card.Body>
            <Card.Title>Apple Crisp frappuccino</Card.Title>
            <Card.Text>
              Bebida batida com gelo, com ou sem café, xarope de maça com açucar mascavo, finalizado com chantilly de baunilha e uma deliciosa calda de maça caramelizada com especiarias.
            </Card.Text>
            <ButtonContainer variant={"default"}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
              </svg>&nbsp;
              take coffee</ButtonContainer>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={coffe1} />
          <Card.Body>
            <Card.Title>Apple Crisp frappuccino</Card.Title>
            <Card.Text>
              Bebida batida com gelo, com ou sem café, xarope de maça com açucar mascavo, finalizado com chantilly de baunilha e uma deliciosa calda de maça caramelizada com especiarias.
            </Card.Text>
            <ButtonContainer variant={"default"}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
              </svg>&nbsp;
              take coffee</ButtonContainer>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={coffe1} />
          <Card.Body>
            <Card.Title>Apple Crisp frappuccino</Card.Title>
            <Card.Text>
              Bebida batida com gelo, com ou sem café, xarope de maça com açucar mascavo, finalizado com chantilly de baunilha e uma deliciosa calda de maça caramelizada com especiarias.
            </Card.Text>
            <ButtonContainer variant={"default"}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
              </svg>&nbsp;
              take coffee</ButtonContainer>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={coffe1} />
          <Card.Body>
            <Card.Title>Apple Crisp frappuccino</Card.Title>
            <Card.Text>
              Bebida batida com gelo, com ou sem café, xarope de maça com açucar mascavo, finalizado com chantilly de baunilha e uma deliciosa calda de maça caramelizada com especiarias.
            </Card.Text>
            <ButtonContainer variant={"default"}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
              </svg>&nbsp;
              take coffee</ButtonContainer>
          </Card.Body>
        </Card>
      </Col>

      <Col></Col>
    </Row>

  );
}

export { Home }