
// import { Button } from '../../components/Button';
import { HomeContainer } from './styles';
import imgBanner1 from './../../assets/images/banner/banner_1121600051_desktop.jpg'
import imgBanner2 from './../../assets/images/banner/banner_195590685_desktop.jpg'
import imgBanner3 from './../../assets/images/banner/banner_3676615800_desktop.jpg'
import iconNext from './../../assets/images/chevron-right.svg';
import iconPrev from './../../assets/images/chevron-left.svg';
import { Carousel, Col, Row } from 'react-bootstrap';
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

export { Home }