// @flow

import React, { useState } from 'react';
import axios from 'axios';
import {
  Page,
  Grid,
  Badge,
  Button,
  Card,
  Container,
  List,
  Form,
} from 'tabler-react';
import SiteWrapper from '../SiteWrapper.react';

const Hashtags = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [shortcode, setShortcode] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const { data } = await axios.post('http://localhost:8000/api/hashtags', {
      username,
      password,
      shortcode,
    });

    console.log('data', data);
  };

  return (
    <SiteWrapper>
      <div className="my-3 my-md-5">
        <Container>
          <Grid.Row>
            <Grid.Col md={3}>
              <Page.Title className="mb-5">Rodar Hashtags</Page.Title>
              <div>
                <List.Group transparent={true}>
                  <List.GroupItem
                    className="d-flex align-items-center"
                    href="/hashtags"
                    icon="inbox"
                    active
                  >
                    Em Andamento
                    <Badge className="ml-auto">14</Badge>
                  </List.GroupItem>
                  <List.GroupItem
                    href="/hashtags"
                    className="d-flex align-items-center"
                    icon="send"
                  >
                    Preferidos
                  </List.GroupItem>
                  <List.GroupItem
                    href="/hashtags"
                    className="d-flex align-items-center"
                    icon="alert-circle"
                  >
                    Notificações{' '}
                    <Badge className="ml-auto badge badge-secondary">3</Badge>
                  </List.GroupItem>
                  <List.GroupItem
                    href="/hashtags"
                    className="d-flex align-items-center"
                    icon="star"
                  >
                    Histórico
                  </List.GroupItem>
                  <List.GroupItem
                    href="/hashtags"
                    className="d-flex align-items-center"
                    icon="tag"
                  >
                    Hashtags Extraídas
                  </List.GroupItem>
                  <List.GroupItem
                    href="/hashtags"
                    className="d-flex align-items-center"
                    icon="trash-2"
                  >
                    Deletados
                  </List.GroupItem>
                </List.Group>
                <div className="mt-6">
                  <Button
                    RootComponent="a"
                    href="/hashtags"
                    block={true}
                    color="secondary"
                  >
                    Extrair novas Hashtags
                  </Button>
                </div>
              </div>
            </Grid.Col>
            <Grid.Col md={9}>
              <Card>
                <Card.Header>
                  <Card.Title>Extrair novas Hashtags</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Form onSubmit={onSubmitHandler}>
                    <Form.Group>
                      <Grid.Row className="align-items-center">
                        <Grid.Col sm={2}>Usuário:</Grid.Col>
                        <Grid.Col sm={10}>
                          <Form.Input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            type="text"
                            autoComplete="on"
                          />
                        </Grid.Col>
                      </Grid.Row>
                    </Form.Group>
                    <Form.Group>
                      <Grid.Row className="align-items-center">
                        <Grid.Col sm={2}>Senha:</Grid.Col>
                        <Grid.Col sm={10}>
                          <Form.Input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            autoComplete="on"
                          />
                        </Grid.Col>
                      </Grid.Row>
                    </Form.Group>
                    <Form.Group>
                      <Grid.Row className="align-items-center">
                        <Grid.Col sm={2}>Shortcode:</Grid.Col>
                        <Grid.Col sm={10}>
                          <Form.Input
                            value={shortcode}
                            onChange={(e) => setShortcode(e.target.value)}
                            type="text"
                            autoComplete="on"
                          />
                        </Grid.Col>
                      </Grid.Row>
                    </Form.Group>
                    <Form.Textarea rows={10} />
                    <Button.List className="mt-4" align="right">
                      <Button color="secondary">Cancelar</Button>
                      <Button type="submit" color="primary">
                        Extraír Hashtags
                      </Button>
                    </Button.List>
                  </Form>
                </Card.Body>
              </Card>
            </Grid.Col>
          </Grid.Row>
        </Container>
      </div>
    </SiteWrapper>
  );
};

export default Hashtags;
