import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Logo,
  BackGroundImage,
  WelcomeText,
  LoginText,
  Input,
  LoginButton,
  TextLoginButton,
  BoxCheckData,
  CheckData,
  TextCheckData,
  RegisterText,
  TextRegisterButton
} from './styles';

import logo from '../../images/logo.png';
import imageLogin from '../../images/login-image-background.png'

const Login : React.FC = () => {
  const navigation = useNavigation(); 

  return (
    <Container>
      <LinearGradient 
        colors={['#000', 'rgba(0, 0, 0, 0.1)' ]}
        style={{ 
          width: '100%',
          height: '80%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
        }}
      >
        <Logo source={ logo }/>
        <WelcomeText>Bem-Vindo!</WelcomeText>
        <LoginText>Fazer login</LoginText>
        <Input placeholder="E-mail" />
        <Input placeholder="Senha" />
        <LoginButton onPress={ () => navigation.navigate('Home') } >
          <TextLoginButton>Entrar</TextLoginButton>
        </LoginButton>
        <BoxCheckData>
          <CheckData/>
          <TextCheckData>Salvar dados de login entre automaticamente</TextCheckData>
        </BoxCheckData>
        <RegisterText>
          é novo(a) aqui? 
          <TextRegisterButton> Cadastre-se</TextRegisterButton>
        </RegisterText>
      </LinearGradient>
      <LinearGradient
        colors={['rgba(0, 0, 0, 0.8)', '#000']}
        style={{
          position: 'absolute',
          zIndex: -1,
          top: '60%',
          width: '100%',
          height: '50%',
        }}
      >
        <BackGroundImage source={ imageLogin } />
      </LinearGradient>
    </Container>
  )
}

export default Login;