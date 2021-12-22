import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #FD0000;
  width: 80%;
  height: 60%;
  border-radius: 30px;
  align-self: center;
  margin-top: 40%;
`;

export const ImageModal = styled.Image`
  width: 100%;
  height: 169px;
  border-radius: 30px;
`;

export const TextList = styled.Text`
  font-size: 16px;
  color: #fff;
`;

export const TextTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 20px;
`;

export const Info = styled.View`
  align-self: center;
  display: flex;
  width: 80%;
  height: 50%;
  margin-top: 30px;
`;

export const TextTitleList =styled(TextList)`
  font-weight: bold;
`;


export const CloseModalButton = styled.TouchableOpacity`
  align-self: flex-end;
  width: 30px;
  margin: 0px 20px;
`;
export const CloseModalIcon = styled.Image``;

export const Stars = styled.Image`
  width: 120px;
  height: 18px;
  margin: 5px 0px;
`;

export const RatingText = styled.Text`
  color: #fff;
  font-size: 18px;
  margin: 0;
  padding: 0;
`;

export const RatingBox = styled.View`
  position: absolute;
  left: 10%;
  bottom: 3%;
  width: 178px;
  height: 59px;
  display: flex;
`;