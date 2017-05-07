import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';

const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Home'} />
    <View style={{ flex: 1, backgroundColor: '#000' }}>  
    <Text>testando</Text>
    </View>
  </View>

);

AppRegistry.registerComponent('tripirt', () => App);

