import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Alert } from 'react-native';
import { StarRating } from './../common';


class Rating extends Component {
  static propTypes = {
    numberStars: PropTypes.number.isRequired
  }

  state = {
    starsSelected: 5
  }

  setNumberStars = (value) => {
    this.setState({ starsSelected: value });
  }

  render() {
    const { numberStars } = this.props;
    const { viewStyle } = styles;
    const stars = [];

    for (let i = 0; i < numberStars; i++) {
      debugger;
      stars.push(
        <StarRating
          key={i}
          starNumber={i+1}
          selected={i < this.state.starsSelected}
          onNumberStarsSelected={this.setNumberStars}
        />
      );
    }


    return (
      <View style={viewStyle} >
        {stars}
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    paddingTop: 20,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  }
}

export { Rating };
