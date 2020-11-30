import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col
            xs={12}
            md={12}
            lg={12}
            className="d-flex justify-content-start p-5"
          >
            Rodapé
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
