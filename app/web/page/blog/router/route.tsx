'use strict';

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateState } from '../store/actions';

class WrapperRoute extends Component<any, any> {

  async componentWillReceiveProps(nextProps) {
    const { locals, component, computedMatch, updateState } = nextProps;
    if (computedMatch.url !== this.props.computedMatch.url) {
      const { asyncData } = component;
      if (asyncData) {
        const data = await asyncData(locals, { match: computedMatch });
        updateState(data);
      }
    }
  }

  render() {
    return <Route {...this.props} />
  }
}

const mapStateToProps = state => {
  return {
    locals: state
  }
};

const mapDispatchToProps = dispatch => {
  return { 
    updateState: data => dispatch(updateState(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WrapperRoute);
