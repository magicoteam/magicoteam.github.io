// @flow

import React from 'react';

import {
  Container,
  Grid,
  Card,
  Button,
  Form,
  Avatar,
  Profile,
  Media,
  Comment,
} from 'tabler-react';

import SiteWrapper from '../SiteWrapper.react';

const ProfilePage = () => {
  return (
    <SiteWrapper>
      <div className="my-3 my-md-5">
        <Container>
          <Grid.Row>
            <Grid.Col lg={4}>
              <Profile
                name="Maria Da Silva"
                backgroundURL="demo/photos/eberhard-grossgasteiger-311213-500.jpg"
                avatarURL="demo/faces/female/4.jpg"
                twitterURL="test"
              >
                Maquiadora Profissional
              </Profile>
              <Card>
                <Card.Body>
                  <Media>
                    <Avatar
                      size="xxl"
                      className="mr-5"
                      imageURL="demo/faces/male/21.jpg"
                    />
                    <Media.BodySocial
                      name="Juan Hernandez"
                      workTitle="Desenvolvedor Web"
                      facebook="Facebook"
                      twitter="Twitter"
                      phone="1234567890"
                      skype="@skypename"
                    />
                  </Media>
                </Card.Body>
              </Card>
              <Card>
                <Card.Header>
                  <Card.Title>Meu Perfíl</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Form>
                    <Grid.Row>
                      <Grid.Col auto>
                        <Avatar size="xl" imageURL="demo/faces/female/9.jpg" />
                      </Grid.Col>
                      <Grid.Col>
                        <Form.Group>
                          <Form.Label>Email-Address</Form.Label>
                          <Form.Input placeholder="your-email@domain.com" />
                        </Form.Group>
                      </Grid.Col>
                    </Grid.Row>
                    <Form.Group>
                      <Form.Label>Bio</Form.Label>
                      <Form.Textarea rows={5}>
                        Engenheiro de Software
                      </Form.Textarea>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Endereço de Email</Form.Label>
                      <Form.Input placeholder="maria@dominio.com" />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Senha</Form.Label>
                      <Form.Input type="password" value="Password" />
                    </Form.Group>
                    <Form.Footer>
                      <Button color="primary" block>
                        Atualizar
                      </Button>
                    </Form.Footer>
                  </Form>
                </Card.Body>
              </Card>
            </Grid.Col>
            <Grid.Col lg={8}>
              <Card>
                <Card.Header>
                  <Form.InputGroup>
                    <Form.Input type="text" placeholder="Mensagem" />
                    <Form.InputGroup append>
                      <Button icon="camera" color="secondary" />
                    </Form.InputGroup>
                  </Form.InputGroup>
                </Card.Header>
                <Comment.List>
                  <Comment
                    avatarURL="demo/faces/male/16.jpg"
                    name="João Paulo"
                    date="4 min"
                    text="Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                    replies={
                      <React.Fragment>
                        <Comment.Reply
                          name="Aline Pereira"
                          avatarURL="demo/faces/female/17.jpg"
                          text="Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis."
                        />
                        <Comment.Reply
                          name="Jack Ruiz"
                          avatarURL="demo/faces/male/32.jpg"
                          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."
                        />
                      </React.Fragment>
                    }
                  />
                  <Comment
                    avatarURL="demo/faces/male/16.jpg"
                    date="12 min"
                    name="João Paulo"
                    text="Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis."
                  />
                  <Comment
                    avatarURL="demo/faces/male/16.jpg"
                    date="34 min"
                    name="João Paulo"
                    text="Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui."
                    replies={
                      <Comment.Reply
                        name="Ricardo Afonso"
                        avatarURL="demo/faces/male/26.jpg"
                        text=" Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis."
                      />
                    }
                  />
                </Comment.List>
              </Card>
              <Form className="card">
                <Card.Body>
                  <Card.Title>Atualizar o Perfíl</Card.Title>
                  <Grid.Row>
                    <Grid.Col md={5}>
                      <Form.Group>
                        <Form.Label>Companhia</Form.Label>
                        <Form.Input
                          type="text"
                          disabled
                          placeholder="Company"
                          value="Creative Code Inc."
                        />
                      </Form.Group>
                    </Grid.Col>
                    <Grid.Col sm={6} md={3}>
                      <Form.Group>
                        <Form.Label>Usuário</Form.Label>
                        <Form.Input
                          type="text"
                          placeholder="Username"
                          value="mariadasilva1"
                        />
                      </Form.Group>
                    </Grid.Col>
                    <Grid.Col sm={6} md={4}>
                      <Form.Group>
                        <Form.Label>Endereço de Email</Form.Label>
                        <Form.Input type="email" placeholder="Email" />
                      </Form.Group>
                    </Grid.Col>
                    <Grid.Col sm={6} md={6}>
                      <Form.Group>
                        <Form.Label>Nome</Form.Label>
                        <Form.Input
                          type="text"
                          placeholder="First Name"
                          value="Maria"
                        />
                      </Form.Group>
                    </Grid.Col>
                    <Grid.Col sm={6} md={6}>
                      <Form.Group>
                        <Form.Label>Sobrenome</Form.Label>
                        <Form.Input
                          type="text"
                          placeholder="Last Name"
                          value="Da Silva"
                        />
                      </Form.Group>
                    </Grid.Col>
                    <Grid.Col md={12}>
                      <Form.Group>
                        <Form.Label>Endereço</Form.Label>
                        <Form.Input
                          type="text"
                          placeholder="Home Address"
                          value="São Paulo, SP, Brasíl"
                        />
                      </Form.Group>
                    </Grid.Col>
                    <Grid.Col sm={6} md={4}>
                      <Form.Group>
                        <Form.Label>Cidade</Form.Label>
                        <Form.Input
                          type="text"
                          placeholder="City"
                          value="São Paulo"
                        />
                      </Form.Group>
                    </Grid.Col>
                    <Grid.Col sm={6} md={3}>
                      <Form.Group>
                        <Form.Label>CEP</Form.Label>
                        <Form.Input type="number" placeholder="ZIP Code" />
                      </Form.Group>
                    </Grid.Col>
                    <Grid.Col md={5}>
                      <Form.Group>
                        <Form.Label>País</Form.Label>
                        <Form.Select>
                          <option>Brasíl</option>
                        </Form.Select>
                      </Form.Group>
                    </Grid.Col>
                    <Grid.Col md={12}>
                      <Form.Group className="mb=0" label="Sobre Mim">
                        <Form.Textarea
                          rows={5}
                          placeholder="Here can be your description"
                        >
                          Suspendisse cursus, tellus in mattis condimentum,
                          sapien dui ultricies massa, quis posuere velit felis
                          eu nulla. Vestibulum vel ipsum lobortis, iaculis quam
                          nec, molestie neque. Suspendisse fringilla odio vel
                          augue tempus commodo. Suspendisse aliquet tempus urna,
                          eget consectetur felis accumsan in. Donec quis lorem
                          sed nibh dapibus sagittis. Sed finibus, quam ac
                          fermentum hendrerit, augue mi lacinia ex, a suscipit
                          arcu nisi non purus. Nunc vitae eleifend diam.
                        </Form.Textarea>
                      </Form.Group>
                    </Grid.Col>
                  </Grid.Row>
                </Card.Body>
                <Card.Footer className="text-right">
                  <Button type="submit" color="primary">
                    Atualizar o Perfíl
                  </Button>
                </Card.Footer>
              </Form>
            </Grid.Col>
          </Grid.Row>
        </Container>
      </div>
    </SiteWrapper>
  );
};

export default ProfilePage;
