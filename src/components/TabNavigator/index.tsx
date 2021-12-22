import React, { useContext } from 'react';
import MyContext from '../../context/context';
import TabButton from './TabButton';
import { Container } from './styles'

const tabs = ["Personagens", "Filmes", "Quadrinhos"];

const TabNavigator : React.FC = () => {
  return (
    <Container>
      {tabs.map((tab, index) => (
        <TabButton key={index} tab={tab} /> ))}
    </Container>
  );
}

export default TabNavigator;
