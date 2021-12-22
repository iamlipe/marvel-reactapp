import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #000;
`;

export const Logo = styled.Image`
  width: 140px;
  height: 56px;
`;

export const BackGroundImage = styled.Image`
  width: 100%;
  position: absolute;
  z-index: -1;
  bottom: 0px;
`;

export const WelcomeText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  margin-top: 60px;
`;

export const LoginText = styled.Text`
  color: #fff;
  font-size: 14px;
  margin-top: 20px;
`;

export const Input = styled.TextInput`
  width: 70%;
  height: 38px;
  border-radius: 20px;
  background-color: #fff;
  margin-top: 20px;
  padding: 0px 20px;
`;

export const LoginButton = styled.TouchableOpacity`
  width: 70%;
  height: 38px;
  background-color: #FF0000;
  border-radius: 20px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextLoginButton = styled.Text`
  font-size: 16px;
  color: #fff;
`;

export const BoxCheckData = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 50%;
`;

export const CheckData = styled.View`
  width: 13px;
  height: 12px;
  background-color: #fff;
  border: 1px solid #FF0000;
`;

export const TextCheckData = styled.Text`
  font-size: 8px;
  font-weight: bold;
  color: #fff;
  margin-left: 5px;
`;

export const RegisterText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  margin-top: 20px;
`;

export const TextRegisterButton = styled(RegisterText)`
  color: #ff0000;
`;