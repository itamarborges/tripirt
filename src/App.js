import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, MenuImageButton } from './components/common';
import Images from './Images';
import I18n from '../app/i18n/i18n';

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
      <MenuImageButton
        title={I18n.t('my_itineraries')}
        imagePath={Images.my_itineraries_img}
      />
      <MenuImageButton
        title={I18n.t('search_itineraries')}
        imagePath={Images.search_itineraries_img}
      />
    </View>
      <View style={{ flexDirection: 'row' }}>
        <MenuImageButton
          title={I18n.t('my_profile')}
          imagePath={Images.my_profile_img}
        />
        <MenuImageButton
          title={I18n.t('my_guides')}
          imagePath={Images.my_guides_img}
        />
      </View>
    </View>
  </View>
    );
  }
}

export default App;
