import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Images from '../Images';
import I18n from '../../app/i18n/i18n';

class ItineraryRate extends Component {
  constructor(props) {
    super(props)
    this.state = { stars: '' }
  }


  render() {
    const { outsideContainer } = styles;

    return (
      <View style={outsideContainer}>
        <Text>
          {I18n.t('rate_this_itinerary')}
        </Text>

        <Text>
          {I18n.t('you_have_finished')}
        </Text>

        <Text>
          {I18n.t('how_would_you_rate_this_itinerary')}
        </Text>

        <Text>
          {I18n.t('additional_comment')}
        </Text>

        <Text>
          {I18n.t('be_aware_receive_updates_until')}
        </Text>


      </View>

    );
  }
}

const styles = {
  outsideContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.background_color
  }
}


export default ItineraryRate;
