import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Components.css';


const NavBar = () => {
    return(
        <div className='nav_bar'>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand href="/">Credit<strong>Score</strong></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="nav_links">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/creditscores">Credit Score</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;