import * as React from 'react';
import { Pressable } from 'react-native';
import { Link } from 'expo-router';
import SvgLogo from '../../components/SvgLogo';
import { Container, LoginButton, LogoTitle, SubscribeButton, Subtitle } from './auth.styles';


export default function AuthScreen() {

  return (

    <Container>
      <SvgLogo></SvgLogo>
      <LogoTitle> To Do List</LogoTitle>
      <Subtitle> Comece a escrever suas ideias e tarefas!</Subtitle>
      <Link href="/auth/login" asChild>
        <Pressable>
          <LoginButton>Login</LoginButton>
        </Pressable>
      </Link>
      <Link href="/auth/signup" asChild>
        <Pressable>
          <SubscribeButton>Cadastre-se</SubscribeButton>
        </Pressable>
      </Link>
      </Container>
    
  );
}

