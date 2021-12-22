import React, { useContext } from 'react';
import MyContext from '../../../context/context';
import { Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StyledButton } from './styles';

interface Props {
  tab: string;
}

const TabButton : React.FC<Props> = ({ tab }) => {
  const { setMainPage, mainPage, setDataId, setItemId } = useContext(MyContext);

  const setPage = () => {
    setMainPage(tab)
    setDataId(1)
    setItemId(undefined)
  }

  return (
    <StyledButton
      onPress={ () => setPage() } 
    >
      <LinearGradient
        colors={['transparent', '#FD0000']}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          width: 49.5,
          height: 104,
          margin: -9,
          borderRadius: 17,
          opacity: mainPage === tab ? 1 : 0.4,
        }}
      >
        <Text
          style={{
            color: mainPage === tab ? "#fff" : "#FD0000",
            transform: [{ rotate: '90deg'}],
            width: 84,
            textAlign: "center"
          }}
        >
          { tab }
        </Text>
      </LinearGradient>
    </StyledButton>
  );
}

export default TabButton;
