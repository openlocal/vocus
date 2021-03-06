import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import Helmet from 'react-helmet';
import Intro from 'src/components/Intro';
import Navigation from 'src/components/Navigation';
import { saveCoordinates } from 'reducers/coordinates';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    return (
      <div>
        <Helmet title="Vocus" />
        <Navigation {...this.props} />
        <Intro {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  coordinates: state.coordinates,
});

const mapDispatchToProps = dispatch => ({
  saveCoordinates: latlong => {
    dispatch(saveCoordinates(latlong));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
