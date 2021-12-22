import React, { useContext, useState, useEffect } from 'react';
import MyContext from '../../context/context';
// import Movies from '../../data/movies';
// import Characters from '../../data/characters';
// import Comics from '../../data/comics';

import {
  Header,
  MainList,
  TabNavigator,
  ConnectionList,
  BaseList
} from '../../components'

import {
  Container,
  BoxTabNavigator
} from './styles';

interface ContextProps {
  data: any;
}

const Home: React.FC = () => {
  const { data } = useContext<ContextProps>(MyContext);
  return (
    <Container>
      <BoxTabNavigator>
        <TabNavigator/>
      </BoxTabNavigator>
      <Header />
      <MainList data={data} />
      <ConnectionList data={data} />
      <BaseList data={data} />
    </Container>
  );
}

export default Home