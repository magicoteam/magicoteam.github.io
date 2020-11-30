import React, { useState } from 'react';
import {
  Button,
  Card,
  Carousel,
  Col,
  Container,
  Image,
  Row,
  Tab,
  Tabs,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

// LAYOUT
import HomeLayout from './layout/HomeLayout';

const Home = () => {
  const [index, setIndex] = useState(0);
  const [key, setKey] = useState('beneficios1');

  const Sonnet = ({ title }) => {
    return (
      <Container>
        <Row className="justify-content-md-center align-items-center d-flex">
          <Col xs={12} md={6} lg={6}>
            <h2>{title}</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Col>
          <Col xs={12} md={6} lg={6} className="d-flex justify-content-end">
            <Image
              src={`https://via.placeholder.com/370x370?text=Instatistic`}
            />
          </Col>
        </Row>
      </Container>
    );
  };

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <HomeLayout>
      <Container className="instatistic-wrapper mt-8">
        <Row className="justify-content-md-center align-items-center d-flex">
          <Col xs={12} md={6} lg={6}>
            <h2>Headline</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <LinkContainer to="/dashboard">
              <Button variant="primary">Dashboard</Button>
            </LinkContainer>
          </Col>
          <Col xs={12} md={6} lg={6} className="d-flex justify-content-end">
            <Image
              src={`https://via.placeholder.com/370x370?text=Instatistic`}
            />
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            style={{ width: '100%' }}
          >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="assets/img/instagram-1789189_1280.jpg"
                alt="Priorize as suas estratégias"
              />
              <Carousel.Caption>
                <h3>Priorize as suas estratégias</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="assets/img/people-2570925_1280.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Lorem ipsum dolor</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="assets/img/twitter-292994_1280.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Vel scelerisque nisl</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
      <Container fluid>
        <Row className="justify-content-md-center d-flex mt-8">
          <h2>Benefícios</h2>
        </Row>
        <Row>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
          >
            <Tab eventKey="beneficios1" title="Benefícios 1">
              <Sonnet title="Benefícios 1" />
            </Tab>
            <Tab eventKey="beneficios2" title="Benefícios 2">
              <Sonnet title="Benefícios 2" />
            </Tab>
            <Tab eventKey="beneficios3" title="Benefícios 3">
              <Sonnet title="Benefícios 3" />
            </Tab>
            <Tab eventKey="beneficios4" title="Benefícios 4">
              <Sonnet title="Benefícios 4" />
            </Tab>
          </Tabs>
        </Row>
      </Container>
      <Container fluid>
        <Row className="justify-content-md-center d-flex mt-8">
          <h2>Credibilidade</h2>
        </Row>
        <Row className="d-flex justify-content-around">
          <Col xs={12} md={4} lg={4} className="d-flex justify-content-center">
            <Card style={{ width: '18rem' }}>
              <Card.Img
                variant="top"
                src={`https://via.placeholder.com/100x100?text=Lorem`}
              />
              <Card.Body>
                <Card.Title>Nome</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} lg={4} className="d-flex justify-content-center">
            <Card style={{ width: '18rem' }}>
              <Card.Img
                variant="top"
                src={`https://via.placeholder.com/100x100?text=Lorem`}
              />
              <Card.Body>
                <Card.Title>Nome</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} lg={4} className="d-flex justify-content-center">
            <Card style={{ width: '18rem' }}>
              <Card.Img
                variant="top"
                src={`https://via.placeholder.com/100x100?text=Lorem`}
              />
              <Card.Body>
                <Card.Title>Nome</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className="instatistic-wrapper">
        <Row className="justify-content-md-center d-flex">
          <Col xs={12} md={6} lg={6}>
            <h2>Garantia</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Col>
          <Col xs={12} md={6} lg={6} className="d-flex justify-content-end">
            <Image src={`https://via.placeholder.com/150x150?text=Lorem`} />
          </Col>
        </Row>
      </Container>
      <Container className="instatistic-wrapper">
        <Row className="d-flex justify-content-start w-100">
          <Col xs={12} md={6} lg={6}>
            <h2>Geração de Expectativas</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <LinkContainer to="/register">
              <Button variant="primary">Abra sua conta</Button>
            </LinkContainer>
          </Col>
        </Row>
      </Container>
    </HomeLayout>
  );
};

export default Home;
