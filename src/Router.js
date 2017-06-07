import React from 'react';
import { StatusBar, View } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import Home from './components/Home';
import { COLOR_PRIMARY, COLOR_PRIMARY_DARK } from '../app/styles/common';

const RouterComponent = () => {
  const { sceneStyle, navigationBarStyle, titleStyle, barButtonTextStyle } = styles;

  return (
    <View style={{ flex: 1 }} >
      <StatusBar
        backgroundColor={COLOR_PRIMARY_DARK}
        barStyle='light-content'
      />
    <Router
      sceneStyle={sceneStyle}
      navigationBarStyle={navigationBarStyle}
      titleStyle={titleStyle}
      barButtonTextStyle={barButtonTextStyle}
    >
      <Scene key="Main" initial>
        <Scene key="home" component={Home} title="Home" />
      </Scene>
    </Router>
</View>
  );
};

const styles = {
  navigationBarStyle: {
    backgroundColor: COLOR_PRIMARY,
    flex: 1,

  },
  sceneStyle: {
    paddingTop: 45
  },
  titleStyle: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'left',
    alignSelf: 'flex-start',
    paddingLeft: 30
  },
  barButtonTextStyle: {
    color: '#FFFFFF'
  }
};

export default RouterComponent;
