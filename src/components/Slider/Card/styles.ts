import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  justify-content: flex-end;
  width: 46%;
  height: 46%;
  background-color: #fff;
  margin: 2%;
  border-radius: 30px;
`;

export const ImageCard = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 30px;
`;

export const TitleText = styled.Text`
  color: #fff;
  text-align: center;
  font-weight: bold;
`;

export const DescriptionText = styled.Text`
  color: #fff;
  height: 59px;
  text-align: center;
  font-size: 8px;
  padding: 8px;
`;

export const SeeDetailsBox = styled.TouchableOpacity``;

export const SeeDetailsText = styled(TitleText)`
  font-weight: normal;
`;
