import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div>
                <div>
                    <nav>
                        <Navbar bg="dark" variant="dark">
                            <Container>
                                <Navbar.Brand href="#home" className='ms-5 me-5' ><h2 className='navbrand fw-bold'>Nutri Expert</h2></Navbar.Brand>
                                <Nav className="me-auto ms-5">
                                    <Nav.Link>
                                        <NavLink className="nav" to="/home">Home</NavLink>
                                    </Nav.Link>
                                    <Nav.Link to="/courses">
                                        <NavLink className="nav ms-5" to="/service">Service</NavLink>
                                    </Nav.Link>
                                    <Nav.Link to="/about">
                                        <NavLink className="nav ms-5" to="/about">About Us</NavLink>
                                    </Nav.Link>
                                    <Nav.Link to="/about">
                                        <NavLink className="nav ms-5" to="/login">Log in</NavLink>
                                    </Nav.Link>
                                </Nav>
                            </Container>
                        </Navbar>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;