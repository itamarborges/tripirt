import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { MenuImageButton, ModalMessage } from './../components/common';
import Images from '../Images';
import I18n from '../../app/i18n/i18n';

class Home extends Component {
  state = { showModal: false, messageModal: '' };

  onAccept() {
    this.setState({ showModal: false });
  }

  showModalSearch() {
    Actions.searchItineraries({
      title: I18n.t('search_itineraries')
      }
    );
  }

  showModalProfile() {
    this.setState({ showModal: true, messageModal: I18n.t('my_profile_soon') });
  }

  showModalGuides() {
    this.setState({ showModal: true, messageModal: I18n.t('my_guides_soon') });
  }

  showCityItineraries() {
    Actions.cityItineraries();
  }

  render() {
    const { outsideContainer, mainContainer } = styles;

    return (
      <View style={outsideContainer}>
        <View
          style={mainContainer}
        >
        <View style={{ flexDirection: 'row' }}>
          <MenuImageButton
            title={I18n.t('my_itineraries')}
            imagePath={Images.my_itineraries_img}
            onPress={this.showCityItineraries.bind(this)}
          />
          <MenuImageButton
            title={I18n.t('search_itineraries')}
            imagePath={Images.search_itineraries_img}
            onPress={this.showModalSearch.bind(this)}
          />
        </View>
          <View style={{ flexDirection: 'row' }}>
            <MenuImageButton
              title={I18n.t('my_profile')}
              imagePath={Images.my_profile_img}
              onPress={this.showModalProfile.bind(this)}
            />
            <MenuImageButton
              title={I18n.t('my_guides')}
              imagePath={Images.my_guides_img}
              onPress={this.showModalGuides.bind(this)}
            />
          </View>

          <ModalMessage
            visible={this.state.showModal}
            onAccept={this.onAccept.bind(this)}
            title={I18n.t('available_soon')}
            content={this.state.messageModal}
            textBtn={I18n.t('i_got_it')}
          />

        </View>
      </View>

    );
  }
}

const styles = {
  outsideContainer: {
    flex: 1,
    backgroundColor: '#f2f2f2'
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 120,
    paddingBottom: 100
  }
};

export default Home;
