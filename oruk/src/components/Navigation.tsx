import React from "react";
import { Link } from "react-router-dom";
import './Navigation.css';
import logo from './images/YOUR-LOGO-HEADER.png';
import "bootstrap/dist/css/bootstrap.css"; // Import precompiled Bootstrap css
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

interface NavigationProps {
    
}
console.log(logo);
 
const Navigation: React.FC<NavigationProps> = () => {
    return ( 
        <> 
        <style type="text/css">
        {`
    .btn-flat {
      background-color: purple;
      color: white;
    }

    .btn-lg {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
      </style>


    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="/"><img src={logo} alt="logo" className="logo" /></Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse>
          <Nav variant="btn-flat">
            <NavDropdown
              title="More"
            >
              <NavDropdown.Item href="#action/3.1">Example 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                example 2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">example 3</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="About us"
            >
              <NavDropdown.Item href="#action/3.1">Our founders</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Our mission
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Our future</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Muokkaus"
            >
              <NavDropdown.Item href="/Testi1">Testi1</NavDropdown.Item>
              <NavDropdown.Item href="/Testi2">
                Testi2
              </NavDropdown.Item>
              <NavDropdown.Item href="/Muokkaus">Muokkaus</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
     );
}
 
export default Navigation;