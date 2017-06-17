import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { selectedCity } from '../actions';
import Images from '../Images';
import textStyles from '../../app/styles/textstyles';
import I18n from '../../app/i18n/i18n';

class ListImageItem extends Component {

  onRowPress() {
    const { cityId, cityName } = this.props.city;

    this.props.selectedCity({ cityId, cityName });
    Actions.specificCityItineraries({
      title: `${cityName}`
    });
  }

  render() {
    const { outsideContainer, imageStyle, backdropView, bottomLine } = styles;
    const { cityName, cityNumItineraries } = this.props.city;

    const labelItineraries = (cityNumItineraries === '1') ?
    I18n.t('itinerary') :
    I18n.t('itineraries');

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
      <View style={outsideContainer} >
          <Image
            style={imageStyle}
            source={Images.porto_alegre_img}
          >
            <View style={backdropView}>
              <View style={bottomLine}>
                <Text style={textStyles.whiteTitle}>
                  {cityName}
                </Text>
                <Text style={textStyles.whiteTitle}>
                  {cityNumItineraries} {labelItineraries}
                </Text>
                </View>
            </View>
          </Image>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  outsideContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10
  },
  imageStyle: {
    height: 195,
    width: 340,
    borderWidth: 0,
		borderRadius: 2
  },
  titleStyle: {
      fontSize: 18,
      paddingLeft: 15,
      color: '#FFFFFF',
  },
  backdropView: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0)',
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  bottomLine: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }

};

export default connect(null, { selectedCity })(ListImageItem);
