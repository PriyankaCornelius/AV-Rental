import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import logo from '../images/AVRentalLogo.png'
class NavBar extends React.Component {
    render() { 
        return <div >
            <Navbar className="nav" expand="lg">
            <Container>
            <Navbar.Brand href="#home">
                <span className="logoText">AV Rental</span>
            </Navbar.Brand>
            </Container>
            </Navbar>
        </div>;
    }
}


 
export default NavBar;