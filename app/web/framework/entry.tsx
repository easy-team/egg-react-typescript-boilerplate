import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

export default class Entry extends Component {
  render() {
    return this.props.children;
  }
}