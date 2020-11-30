// @flow

import * as queryString from 'query-string';
import React, { useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Button, Form } from 'react-bootstrap';
import config from '../config/dev';

// LAYOUT
import AuthenticationLayout from '../layout/AuthenticationLayout';

const LoginPage = () => {
  const [fieldErrors, setFieldErrors] = useState([]);
  const [fields, setFields] = useState({
    username: '',
    password: '',
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();

    let errors = [];

    if (!fields.username) {
      errors.push('username');
    }

    if (!fields.password) {
      errors.push('password');
    }

    setFieldErrors(errors);

    if (errors.length > 0) {
      return false;
    } else {
      console.log('SUBmITTED');
    }
  };

  const hasError = (key) => {
    return fieldErrors.indexOf(key) !== -1;
  };

  const stringifiedParams = queryString.stringify({
    client_id: config.INSTAGRAM_APP_ID,
    redirect_uri: config.INSTAGRAM_APP_REDIRECT_URI,
    scope: ['user_profile', 'user_media'].join(','),
    response_type: 'code',
  });

  const instagramLoginUrl = `${config.INSTAGRAM_API_BASE_URL}/oauth/authorize?${stringifiedParams}`;

  return (
    <AuthenticationLayout>
      <h1>Entrar na conta</h1>
      <Form onSubmit={onSubmitHandler}>
        <Form.Group>
          <Form.Label htmlFor="username">Usuário</Form.Label>
          {hasError('username') && <strong>Campo requerído</strong>}
          <Form.Control
            type="text"
            placeholder="Usuário"
            value={fields.username}
            onChange={(e) => setFields({ ['username']: e.target.value })}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="password">Senha</Form.Label>
          {hasError('password') && <strong>Campo requerído</strong>}
          <Form.Control
            type="password"
            placeholder="Senha"
            value={fields.password}
            onChange={(e) => setFields({ ['password']: e.target.value })}
          />
        </Form.Group>
        <Form.Group>
          <Button variant="success" type="submit">
            Entrar
          </Button>
        </Form.Group>
      </Form>
      <hr />
      <a href={instagramLoginUrl}>
        <Button variant="primary">Continuar com Instagram</Button>
      </a>
    </AuthenticationLayout>
  );
};

export default LoginPage;
