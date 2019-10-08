import React, { Component } from 'react';
import Layout from '../../component/layout.jsx';
import { CSR } from '../../framework/app';

class Index extends Component {
  componentDidMount() {
    console.log('client render');
  }
  render() {
    return <h1>{this.props.text}</h1>;
  }
}


export default CSR(Index);