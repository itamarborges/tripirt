import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import colors from '../../app/styles/colors';
import I18n from '../../app/i18n/i18n';
import textStyles from '../../app/styles/textstyles';
import { Rating, Button } from './common';

class ItineraryRate extends Component {
  state ={
    additionalComment: ''
  }

  onButtonPress = () => {
    Actions.home();
  }

  render() {
    const {
      outsideContainer,
      titleStyle,
      firstInstructionsStyle,
      instructionsStyle,
      expirationDateStyle,
      btnStyle,
      viewBtnStyle } = styles;

    return (
    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: colors.background_color }}>
      <View style={outsideContainer} >
        <Text
          style={[textStyles.blackMediumText, titleStyle]}
        >
          {I18n.t('rate_this_itinerary')}
        </Text>
        <Text
          style={[textStyles.blackSmallText, firstInstructionsStyle]}
        >
          {I18n.t('you_have_finished')}
        </Text>
        <Text
          style={[textStyles.blackSmallText, instructionsStyle]}
        >
          {I18n.t('how_would_you_rate_this_itinerary')}
        </Text>

        <Rating
          numberStars={5}
        />

        <Text
          style={[textStyles.blackSmallText, expirationDateStyle]}
        >
          {I18n.t('additional_comment')}
        </Text>

        <TextInput
            multiline
            editable={false}
            autoCorrect={false}
            onChangeText={(additionalComment) => this.setState({ additionalComment })}
            value={this.state.additionalComment}
            style={{
              height: 80,
              borderColor: 'gray',
              backgroundColor: colors.warm_grey,
              borderWidth: 1,
              marginRight: 20
            }}
        />

        <Text
          style={[textStyles.blackSmallText, instructionsStyle]}
        >
          {I18n.t('be_aware_receive_updates_until')}
        </Text>

        <Text
          style={[textStyles.greenMediumText, expirationDateStyle]}
        >
          {this.props.currentItinerary.expirationDate}
        </Text>
      </View>
      <View style={viewBtnStyle}>
        <Button
          onPress={this.onButtonPress}
          btnStyle={btnStyle}
          txtStyle={textStyles.buttonText}
        >
          {I18n.t('done')}
        </Button>
      </View>
    </View>
    );
  }
}


const styles = {
  outsideContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.background_color,
    paddingLeft: 20

  },
  titleStyle: {
    paddingTop: 45
  },
  firstInstructionsStyle: {
    paddingTop: 30
  },
  instructionsStyle: {
    paddingTop: 15
  },
  expirationDateStyle: {
    paddingTop: 10
  },
  btnStyle: {
    backgroundColor: colors.color_primary_dark,
    borderWidth: 0,
    marginBottom: 10,
    marginRight: 10,
    width: 200,
    borderRadius: 90
  },
  viewBtnStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
};


const mapStateToProps = state => {
  return { currentItinerary: state.currentItinerary };
};

export default connect(mapStateToProps, null)(ItineraryRate);
