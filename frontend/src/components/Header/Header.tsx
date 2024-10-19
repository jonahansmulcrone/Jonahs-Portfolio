import { Container, Nav, Navbar } from 'react-bootstrap';
import styles from './Header.module.css'


const Header: React.FC = () => {
    return (
        <div>
            <Navbar style={{backgroundColor: 'white'}} data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home"></Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#features">Experience</Nav.Link>
                        <Nav.Link href="#pricing">Work</Nav.Link>
                        <Nav.Link href="#pricing">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header