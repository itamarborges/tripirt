import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListImageItem from './ListImageItem';
import { BACKGROUND_COLOR } from '../../app/styles/common';

class CityItineraries extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.cities);
  }

  renderRow(city) {
  return <ListImageItem city={city} />;
}

  render() {
    return (
      <ListView
       style={styles.outsideContainer}
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const styles = {
  outsideContainer: {
    backgroundColor: BACKGROUND_COLOR,
    paddingTop: 35,
    flex: 1
  }
};

const mapStateToProps = state => {
  return { cities: state.cities };
};

export default connect(mapStateToProps)(CityItineraries);
