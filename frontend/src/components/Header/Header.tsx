import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import styles from './Header.module.css';

const Header: React.FC = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    };

    return (
        <div className={styles.headerContainer}>
            <Navbar style={{ backgroundColor: '#94a3b8' }} data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home"></Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link onClick={() => scrollToSection('about')} className={styles.customNavLink}>
                            <span className={styles.accentColor}>01.</span> About
                        </Nav.Link>
                        <Nav.Link onClick={() => scrollToSection('experience')} className={styles.customNavLink}>
                            <span className={styles.accentColor}>02.</span> Experience
                        </Nav.Link>
                        <Nav.Link onClick={() => scrollToSection('projects')} className={styles.customNavLink}>
                            <span className={styles.accentColor}>03.</span> Project
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;

