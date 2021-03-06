import React from 'react';
import { StatusBar, View } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';

import Home from './screens/Home';
import CityItineraries from './screens/CityItineraries';
import SpecificCityItineraries from './screens/SpecificCityItineraries';
import ItineraryStep from './screens/ItineraryStep';
import ItineraryRate from './screens/ItineraryRate';
import SearchItineraries from './screens/SearchItineraries';
import { COLOR_PRIMARY, COLOR_PRIMARY_DARK } from '../app/styles/common';
import I18n from '../app/i18n/i18n';

const RouterComponent = () => {
  const { sceneStyle, navigationBarStyle, titleStyle, leftButtonIconStyle } = styles;

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
      leftButtonIconStyle={leftButtonIconStyle}
    >
      <Scene key="Main" initial>
        <Scene
          key="home"
          component={Home}
          title="Home"
          initial
        />
        <Scene
          key="cityItineraries"
          component={CityItineraries}
          title={I18n.t('my_itineraries')}
        />
        <Scene
          key="specificCityItineraries"
          component={SpecificCityItineraries}
        />
        <Scene
          key="itineraryStep"
          component={ItineraryStep}
        />
        <Scene
          key="itineraryRate"
          component={ItineraryRate}
        />
        <Scene
          key="searchItineraries"
          component={SearchItineraries}
        />
      </Scene>
    </Router>
</View>
  );
};

const styles = {
  navigationBarStyle: {
    backgroundColor: COLOR_PRIMARY
  },
  sceneStyle: {
    paddingTop: 45
  },
  titleStyle: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'left',
    alignSelf: 'stretch',
    paddingLeft: 40,
    width: 320
  },
  leftButtonIconStyle: {
    tintColor: '#FFFFFF'
  }
};

export default RouterComponent;
