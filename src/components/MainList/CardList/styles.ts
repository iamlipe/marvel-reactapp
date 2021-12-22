import styled from 'styled-components/native';

interface ContainerProps {
  index: number;
  active: boolean;
  id: number;
}

interface NotSelectedProps {
  active: boolean
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  display: flex;
  justify-content: flex-end;
  width: ${(props) => props.active === true ? '200px' 
    : (props.index  - props.id) === -1 
    || (props.index  - props.id) === 1 
    ? '81px' : '41px' };
  height: ${(props) => props.active === true ? '220px' 
    : (props.index  - props.id) === -1 
    || (props.index  - props.id) === 1 
    ? '82px' : '42px' };
  margin: 3.5px;
`;

export const RatingBox = styled.View`
  position: absolute;
  left: 156px;
  width: 178px;
  height: 59px;
  background-color: #000;
  border: 1px solid #F10002;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BackGroundImage = styled.Image<ContainerProps>`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  border-radius: ${(props) => props.active === true ? '30px' 
    : (props.index  - props.id) === -1 
    || (props.index  - props.id) === 1 
    ? '20px' : '10px' };
  border: 1px solid #F80000;
`;

export const Stars = styled.Image`
  width: 120px;
  height: 18px;
  margin: 5px;
`;

export const RatingText = styled.Text`
  color: #fff;
  font-size: 13px;
  margin: 0;
  padding: 0;
`;

export const NotSelected = styled.View<NotSelectedProps>`
  display: ${(props) => props.active === true ? "none" : "flex"};
  width: 200px;
  height: 220px;
  color: #000000;
  opacity: 0.2;
`;