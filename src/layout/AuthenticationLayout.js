import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';

const AuthenticationLayout = ({ children }) => {
  return (
    <Container>
      <Row>
        <Col lg={{ span: 6, offset: 3 }} md={{ span: 12 }} sm={{ span: 12 }}>
          <Image src="assets/img/logo.png" alt="Instatistic Logo" />
          <Card>{children}</Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AuthenticationLayout;
