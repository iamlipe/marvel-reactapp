import React from 'react';
import { View, StatusBar } from 'react-native';
import Provider from './src/context/provider';

import Routes from './src/routes';

export default function App() {
  return (
    <Provider>
      <View style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
        <Routes />    
      </View>
    </Provider>
  );
}
