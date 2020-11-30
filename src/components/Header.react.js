import React from 'react';
import { Button, Container, Navbar, Image, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <header>
      <Container fluid>
        <Row>
          <Navbar expand="lg" className="justify-content-between" fixed="top">
            <Navbar.Brand href="#home">
              <Image
                src="assets/img/logo.png"
                className="d-inline-block align-top"
                alt="Instatistic logo"
              />
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
              <LinkContainer to="/login">
                <Button variant="outline-primary">Login</Button>
              </LinkContainer>
              <LinkContainer to="/register">
                <Button variant="primary" className="ml-4">
                  Abra sua conta
                </Button>
              </LinkContainer>
            </Navbar.Collapse>
          </Navbar>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
