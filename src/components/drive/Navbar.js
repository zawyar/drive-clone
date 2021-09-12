import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
    return (
        <Navbar bg='light' expand='sm' >
            <Navbar.Brand as={Link} to='/'>
                My Drive
            </Navbar.Brand>
            <Nav className="justify-content-end w-100" variant="pills">
                <Nav.Item>
                    <Nav.Link as={Link} to='/user'>
                        Profile
                    </Nav.Link>
                </Nav.Item>
            </Nav>


        </Navbar>
    );
};

export default NavbarComponent;
