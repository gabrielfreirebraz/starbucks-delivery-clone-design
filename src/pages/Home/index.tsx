
// import { Button } from '../../components/Button';
import { HomeContainer } from './styles';
import imgBanner1 from './../../assets/images/banner/banner_1121600051_desktop.jpg'
import './styles'
import { Col, Row } from 'react-bootstrap';


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
      
      {/* <h1>My home page</h1>
      <Button /> */}
      
    </HomeContainer>
  );
}

const Banner = () => {

  return (
    <>
      <img src={imgBanner1} />
    </>

  );
}


export { Home }