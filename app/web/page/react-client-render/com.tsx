import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
class Index extends Component {
  componentDidMount() {
    console.log('client render');
  }
  render() {
    return <h1>{this.props.text}</h1>;
  }
}

export default EASY_ENV_IS_DEV ? hot(module)(Index) : Index;
