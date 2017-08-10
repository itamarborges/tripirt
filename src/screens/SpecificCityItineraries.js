import React, { Component } from 'react';
import { View, ListView, Text } from 'react-native';
import { connect } from 'react-redux';
import SpecificItineraryItem from './../components/SpecificItineraryItem';
import { BACKGROUND_COLOR } from '../../app/styles/common';
import I18n from '../../app/i18n/i18n';

class SpecificCityItineraries extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.itineraries);
  }

  renderRow(itinerary) {
  return <SpecificItineraryItem itinerary={itinerary} />;
}

  render() {
    const { outsideContainer, outsideListView, textStyle } = styles;
    return (
      <View style={outsideContainer}>
        <Text style={textStyle}> {I18n.t('choose_an_itinerary')}</Text>
        <ListView
          style={outsideListView}
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}

const styles = {
  outsideContainer: {
    backgroundColor: BACKGROUND_COLOR,
    paddingTop: 25,
    flex: 1
  },
  outsideListView: {
    backgroundColor: BACKGROUND_COLOR,
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10
  },
  textStyle: {
    paddingLeft: 10
  }
};

const mapStateToProps = state => {
  return { itineraries: state.itineraries };
};

export default connect(mapStateToProps)(SpecificCityItineraries);
