import { Container, Nav, Navbar } from 'react-bootstrap';
import styles from './Header.module.css'


const Header: React.FC = () => {
    return (
        <div>
            <Navbar style={{ backgroundColor: '#94a3b8' }} data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home"></Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link href="#about" className={styles.customNavLink}>About</Nav.Link>
                        <Nav.Link href="#features" className={styles.customNavLink}>Experience</Nav.Link>
                        <Nav.Link href="#work" className={styles.customNavLink}>Work</Nav.Link>
                        <Nav.Link href="#contact" className={styles.customNavLink}>Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header