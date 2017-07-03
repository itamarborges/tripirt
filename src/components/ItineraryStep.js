import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, Image, Dimensions, Alert } from 'react-native';
import { connect } from 'react-redux';
import { Button, CardSection } from './common';
import { nextStep } from '../actions';
import Images from '../Images';
import textStyles from '../../app/styles/textstyles';
import colors from '../../app/styles/colors';
import I18n from '../../app/i18n/i18n';

const SCREEN_WIDTH = Dimensions.get('window').width;

class ItineraryStep extends Component {
  state = { currentItineraryStep: null };

  componentWillMount() {
    this.setState({
      currentItineraryStep: _.find(this.props.itinerarySteps, {
        itineraryStepOrder: this.props.currentStep }) });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      currentItineraryStep: _.find(this.props.itinerarySteps, {
        itineraryStepOrder: nextProps.currentStep }) });
  }

  onButtonPress() {
    if (this.props.currentStep < this.props.selectedItinerarySteps) {
      this.props.nextStep();
    } else {
      Alert.alert('Fim do Itinerário');
    }
  }

  renderButton() {
    const { btnStyle } = styles;

    let labelBtn =
      (this.state.currentItineraryStep.itineraryStepType === 'Commute') ?
        I18n.t('here_i_am') :
        I18n.t('next_place');
    if (this.props.currentStep === this.props.selectedItinerarySteps) {
      labelBtn = I18n.t('finish_itinerary')
    }

    return (
      <Button
        onPress={this.onButtonPress.bind(this)}
        btnStyle={btnStyle}
        txtStyle={textStyles.buttonText}
      >
        {labelBtn}
      </Button>);
  }

  renderContent() {
    if (this.state.currentItineraryStep.itineraryStepType === 'Commute') {
      const textDirections = this.state.currentItineraryStep.itineraryStepInstruction.map(
        (item) => {
          return (
            <Text
              key={item.step}
              style={[textStyles.blackSmallText, styles.paddingStyle]}
            >
              {item.content}
            </Text>
          );
      });
      return (
        <View>
          <Text
            style={[textStyles.blackSmallText, styles.paddingStyle]}
          >
            Directions:
          </Text>
          <View>
            {textDirections}
          </View>
        </View>
      );
    }

    return (
        <Text style={textStyles.blackSmallText}>
          {this.state.currentItineraryStep.itineraryStepDescription}
        </Text>
      );
  }

  render() {
    const { itineraryStepImage, itineraryStepTitle } = this.state.currentItineraryStep;
    const { outsideContainer, imgStyle, titleStyle, outsideText } = styles;

    return (

      <View style={outsideContainer}>
        <Image
          style={imgStyle}
          source={Images[itineraryStepImage]}
        />

        <Text
          style={[textStyles.blackMediumText, titleStyle]}
        >
          {itineraryStepTitle}
        </Text>
        <View style={outsideText} >
          {this.renderContent()}
        </View>

        {this.renderButton()}

      </View>
    );
  }
}
const styles = {
  outsideContainer: {
    flex: 1,
    backgroundColor: colors.background_color,
    paddingTop: 0
  },
  imgStyle: {
    height: (SCREEN_WIDTH * 0.75),
    width: SCREEN_WIDTH
  },
  titleStyle: {
    paddingLeft: 20,
    paddingTop: 10
  },
  outsideText: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 20
  },
  paddingStyle: {
    paddingBottom: 10
  },
  btnStyle: {
    backgroundColor: colors.color_primary_dark,
    borderWidth: 0
  },
};



const mapStateToProps = state => {
  const { currentStep, selectedItinerarySteps } = state.currentItinerary;
  const itinerarySteps = state.downtownItinerary;

  return { currentStep, itinerarySteps, selectedItinerarySteps };
};

export default connect(mapStateToProps, { nextStep })(ItineraryStep);
