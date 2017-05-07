import React from 'react';
import { AppRegistry, View, Text } from 'react-native';
import Header from './src/components/Header';
import MenuImageButton from './src/components/MenuImageButton';
import Images from './Images';

const App = () => (
  <View style={{ flex: 1, backgroundColor:'#f2f2f2' }}>
    <Header headerText={'Home'} />
    <View style={{ flex: 1, justifyContent: 'center'}}>  
      <View style={{ flexDirection: 'row' }}>
        <MenuImageButton title={'My Itineraries'} imagePath={Images.my_itineraries_img}/>
        <MenuImageButton title={'Search Itineraries'} imagePath={Images.search_itineraries_img}/>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <MenuImageButton title={'My Profile'} imagePath={Images.my_profile_img}/>
        <MenuImageButton title={'My Guides'} imagePath={Images.my_guides_img}/>
      </View>
    </View>
  </View>

);

AppRegistry.registerComponent('tripirt', () => App);
