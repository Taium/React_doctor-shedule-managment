import React from 'react';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const TopHeader = () => {
    return (
        <div className="container">
              <Navbar bg="transparent" expand="lg">
               
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto ">
                    <Nav.Link className="mr-5" href="#home">Home</Nav.Link>
                    <Nav.Link className="mr-5" href="#home">Abouy</Nav.Link>
                    <Nav.Link className="mr-5" href="#home">Dental Services</Nav.Link>
                    <Nav.Link className="mr-5" href="#home">Reviews</Nav.Link>
                    <Nav.Link className="mr-5 text-white" href="#home">Blog</Nav.Link>
                    <Nav.Link className="mr-5 text-white" href="#home">Contact Us</Nav.Link>
                        
                    </Nav>
                    
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default TopHeader;