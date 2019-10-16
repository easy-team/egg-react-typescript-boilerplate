import React, { Component } from 'react';
import { CSR, Entry } from '../../framework/app';
import { hot } from 'react-hot-loader';
class Index extends Component {
  componentDidMount() {
    console.log('client render');
  }
  render() {
    return <h1>{this.props.text}111111111</h1>;
  }
}

export default EASY_ENV_IS_DEV ? hot(module)(Index) : Index;
