// @flow

import React from 'react';
import { Container } from 'react-bootstrap';

import { RegisterPage as TablerRegisterPage } from 'tabler-react';

const RegisterPage = () => {
  return (
    <Container className="instatistic-wrapper mt-8">
      <TablerRegisterPage logoUrl={`assets/img/logo.png`} />
    </Container>
  );
};

export default RegisterPage;
