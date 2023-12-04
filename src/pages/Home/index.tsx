
import { HomeContainer } from './styles';
import { Carousel, Col, Row } from 'react-bootstrap';

import imgBanner1 from './../../assets/images/banner/banner_1121600051_desktop.jpg'
import imgBanner2 from './../../assets/images/banner/banner_195590685_desktop.jpg'
import imgBanner3 from './../../assets/images/banner/banner_3676615800_desktop.jpg'
import iconNext from './../../assets/images/chevron-right.svg';
import iconPrev from './../../assets/images/chevron-left.svg';


import './styles'
import { Shop } from '../../components/Shop';
import { Cart } from '../../components/Cart';
import { useContext } from 'react';
import { AppProvider } from '../../contexts/defaultContext';


const Home = () => {

  const { cartOn } = useContext(AppProvider);
  return(
    <HomeContainer>
      <Row>
        <Col />
        <Col md={9}>
          <Banner />
        </Col>
        <Col />
      </Row>

      <Row>
        <Col /> 
        <Col md={9}>
          <Shop/>
        </Col>
        <Col />
      </Row>
      
      <Cart on={cartOn}/>
    </HomeContainer>
  );
}


const Banner = () => {
  return (
    <Row>
      <Col md={12}>
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
      </Col>
    </Row>
  );
}


export { Home }