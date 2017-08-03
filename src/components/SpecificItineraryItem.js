import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { selectedItinerary } from '../actions';
import Images from '../Images';
import textStyles from '../../app/styles/textstyles';

class SpecificItineraryItem extends Component {

  onRowPress() {
    const {
      itineraryId,
      itineraryName,
      itinerarySteps,
      expirationDate
    } = this.props.itinerary;

    this.props.selectedItinerary({
      itineraryId,
      itineraryName,
      itinerarySteps,
      expirationDate
    })
    ;
    Actions.itineraryStep({
      title: `${itineraryName}`
    });
  }

  render() {
    const { outsideContainer, imageStyle, backdropView, bottomLine } = styles;
    const { itineraryName, itineraryTotalTime, itineraryStops } = this.props.itinerary;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
      <View style={outsideContainer} >
          <Image
            style={imageStyle}
            source={Images.downtown_img}
          >
            <View style={backdropView}>
              <View style={bottomLine}>
                <Text style={textStyles.whiteTitle}>
                  {itineraryName}
                </Text>
                <View style={{ flexDirection: 'row' }}>
                  <Image
                    style={{ marginLeft: 10, marginRight: 10 }}
                    source={Images.stopwatch_img}
                  />
                  <Text style={textStyles.whiteTitle}>
                    {itineraryTotalTime}
                  </Text>
                  <Image
                    style={{ marginLeft: 10, marginRight: 10 }}
                    source={Images.white_pin_img}
                  />
                  <Text style={textStyles.whiteTitle}>
                    {itineraryStops}
                  </Text>
                </View>
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

export default connect(null, { selectedItinerary })(SpecificItineraryItem);
