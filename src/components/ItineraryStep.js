import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, Image, Dimensions, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Button } from './common';
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
       Actions.itineraryRate({
         title: `${this.props.selectedNameItinerary}`
       });
    }
  }

  renderButton() {
    const { btnStyle } = styles;

    let labelBtn =
      (this.state.currentItineraryStep.itineraryStepType === 'Commute') ?
        I18n.t('here_i_am') :
        I18n.t('next_place');
    if (this.props.currentStep === this.props.selectedItinerarySteps) {
      labelBtn = I18n.t('finish_itinerary');
    }

    return (
        <Button
          onPress={this.onButtonPress.bind(this)}
          btnStyle={btnStyle}
          txtStyle={textStyles.buttonText}
        >
          {labelBtn}
        </Button>
    );
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
            {I18n.t('directions')}:
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

  renderLittleMan() {
    const { itineraryStepType } = this.state.currentItineraryStep;
    const key = itineraryStepType === 'Commute' ? 'green_man_img' : 'gray_man_img';

    return (
      <Image
        style={styles.iconStyle}
        source={Images[key]}
      />
    )
  }

  renderLittlePin() {
    const { itineraryStepType } = this.state.currentItineraryStep;
    const key = itineraryStepType === 'Commute' ? 'gray_pin_img' : 'green_pin_img';

    return (
      <Image
        style={[styles.iconStyle, { left: 15 }]}
        source={Images[key]}
      />
    )
  }

  renderCommuteInformation() {
    const {
      itineraryStepType,
      itineraryStepOrderCommute,
      itineraryStepTotalCommutes
    } = this.state.currentItineraryStep;
    const style =
    itineraryStepType === 'Commute' ? textStyles.greenIconText : textStyles.blackIconText;

    return (
      <Text
        style={[style, { left: 1 }]}
      >
        {itineraryStepOrderCommute}/{itineraryStepTotalCommutes}
      </Text>
    );
  }

  renderPlaceInformation() {
    const {
      itineraryStepType,
      itineraryStepOrderPlace,
      itineraryStepTotalPlaces
    } = this.state.currentItineraryStep;
    const style =
    itineraryStepType !== 'Commute' ? textStyles.greenIconText : textStyles.blackIconText;

    return (
      <Text
        style={[style, { left: 16 }]}
      >
        {itineraryStepOrderPlace}/{itineraryStepTotalPlaces}
      </Text>
    );
  }

  render() {
    const {
      itineraryStepImage,
      itineraryStepTitle,
      itineraryStepDuration
    } = this.state.currentItineraryStep;
    const {
      outsideContainer,
      imgStyle,
      titleStyle,
      outsideText,
      viewBtnStyle } = styles;

    return (
      <View style={outsideContainer}>
        <View style={{ flex: 1 }}>
            <Image
              style={imgStyle}
              source={Images[itineraryStepImage]}
            />
            <View
              style={{
              flexDirection: 'row',
              paddingLeft: 20,
              paddingTop: 10,
              paddingBottom: 5,
              alignItems: 'flex-end'
            }}
            >
              {this.renderLittleMan()}
              {this.renderCommuteInformation()}


              {this.renderLittlePin()}
              {this.renderPlaceInformation()}

              <Image
                style={[styles.iconStyle, { left: 24 }]}
                source={Images.small_stopwatch_img}
              />
              <Text
                style={[textStyles.blackIconText, { left: 26 }]}
              >
                {itineraryStepDuration}
              </Text>
            </View>
          <Text
            style={[textStyles.blackMediumText, titleStyle]}
          >
            {itineraryStepTitle}
          </Text>

          <View style={outsideText} >
            <ScrollView style={{ flex: 1 }}>
              {this.renderContent()}
            </ScrollView>
          </View>
        </View>

        <View style={viewBtnStyle}>
          {this.renderButton()}
        </View>
      </View>
    );
  }
}
const styles = {
  outsideContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.background_color
  },
  imgStyle: {
    height: (SCREEN_WIDTH * 0.66),
    width: SCREEN_WIDTH
  },
  iconStyle: {
    height: 22,
    resizeMode: 'contain'
  },
  iconTextStyle: {
    height: 24,
    resizeMode: 'contain'
  },
  titleStyle: {
    paddingLeft: 20,
    paddingTop: 5
  },
  outsideText: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 20
  },
  paddingStyle: {
    padding: 5
  },
  viewBtnStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  btnStyle: {
    backgroundColor: colors.color_primary_dark,
    borderWidth: 0,
    marginBottom: 10,
    marginRight: 10,
    width: 200,
    borderRadius: 90
  }
};

const mapStateToProps = state => {
  const { currentStep, selectedItinerarySteps, selectedNameItinerary } = state.currentItinerary;
  const itinerarySteps = state.downtownItinerary;

  return { currentStep, itinerarySteps, selectedItinerarySteps, selectedNameItinerary };
};

export default connect(mapStateToProps, { nextStep })(ItineraryStep);
