import React from 'react';
import { Image } from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';

import {
  Container, Title, ForgotPassword, ForgotPasswordText,
} from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Image source={logoImg} />

    <Title>Faça seu logon</Title>

    <Input name="email" icon="mail" placeholder="E-mail" />
    <Input name="email" icon="lock" placeholder="Senha" />
    <Button>Entrar</Button>

    <ForgotPassword><ForgotPasswordText>Esqueci minha senha</ForgotPasswordText></ForgotPassword>
  </Container>
);
export default SignIn;
