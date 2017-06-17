import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { Button, CardSection } from './common';
import { nextStep } from '../actions';
import Images from '../Images';

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
    this.props.nextStep();
  }

  render() {
    const pahtImage = `./../img/${this.state.currentItineraryStep.itineraryStepImage}`;

    console.log(pahtImage);
    return (
      <View style={styles.outsideContainer}>
        <Image
          style={styles.imgStyle}
          source={Images[this.state.currentItineraryStep.itineraryStepImage]}
        />


        <Text> {this.state.currentItineraryStep.itineraryStepTitle}</Text>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Next</Button>
        </CardSection>

      </View>
    );
  }
}
const styles = {
  outsideContainer: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingTop: 0
  },
  imgStyle: {
    height: 280,
    width: 360
  },
};

const mapStateToProps = state => {
  const { currentStep } = state.currentItinerary;
  const itinerarySteps = state.downtownItinerary;

  return { currentStep, itinerarySteps };
};

export default connect(mapStateToProps, { nextStep })(ItineraryStep);
