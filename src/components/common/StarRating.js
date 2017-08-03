import React, { Component } from 'react';
import { TouchableWithoutFeedback, Image, Alert } from 'react-native';
import Images from '../../Images';

class StarRating extends Component {
  pressStar = () => {
    this.props.onNumberStarsSelected(this.props.starNumber);
  }

  render() {
  const { imageStyle } = styles;
  debugger;
    return (
      <TouchableWithoutFeedback
        onPress={this.pressStar}
      >
        <Image
          source={this.props.selected ? Images.selected_star_img : Images.unselected_star_img}
          style={imageStyle}
        />
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  imageStyle: {
    width: 36,
    height: 36,
    marginRight: 15
  }
};

export { StarRating };
