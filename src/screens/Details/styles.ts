import styled from 'styled-components/native'

interface Props {
  visible: boolean;
}

export const Container = styled.View`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: #000000;
  padding-top: 35px;
`;

export const PageTitle = styled.View`
  align-self: flex-start;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
  margin-left: 50px;
  margin-top: 60px;
`;

export const ArrowIcon = styled.Image``;
export const TitlePageIcon = styled.Image`
  margin: 18px;
`;

export const TitlePage = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const BackGroundModal = styled.View<Props>`
  position: absolute;
  z-index: ${ (props) => props.visible === false ? '-1' : '0' };
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: .75;
`;