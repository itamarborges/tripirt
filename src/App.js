import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, MenuImageButton } from './components/common';
import Images from './Images';

class App extends Component {
  render() {
    return (
  <View style={{ flex: 1, backgroundColor: '#f2f2f2' }}>
    <Header headerText={'Home'} />
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        paddingTop: 100,
        paddingBottom: 100 }}
    >
    <View style={{ flexDirection: 'row' }}>
      <MenuImageButton title={'My Itineraries'} imagePath={Images.my_itineraries_img} />
      <MenuImageButton title={'Search Itineraries'} imagePath={Images.search_itineraries_img} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <MenuImageButton title={'My Profile'} imagePath={Images.my_profile_img} />
        <MenuImageButton title={'My Guides'} imagePath={Images.my_guides_img} />
      </View>
    </View>
  </View>
    );
  }
}

export default App;
