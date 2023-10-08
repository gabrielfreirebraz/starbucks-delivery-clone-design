import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './../../assets/images/starbucks-logo.svg';
import iconLocale from './../../assets/images/icon-map.svg';
import imgHistoria from './../../assets/images/sb-historias-logo.svg'
import { HeaderContainer } from './styles';

export const Header = () => {
  return (
    <HeaderContainer>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} height={50} />

          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home">Menu</Nav.Link>
              <Nav.Link href="#k">Rewards</Nav.Link>
              <Nav.Link href="#">Nosso café</Nav.Link>
              <Nav.Link href="#">Impacto social</Nav.Link>
              
            </Nav>

            <div id='navRight'>
              <img src={imgHistoria} className='imgHistoria' />
              <img src={iconLocale} className='iconLocale' />
              <a href="#">Encontre uma loja</a>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </HeaderContainer>
  );
}