// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';

export default class Example extends Component {

  render() {
    const styleTitle = {
      marginTop: '40px', marginBottom: '40px', textAlign: 'center'
    };
    const styleSub = {
      marginBottom: '40px', textAlign: 'center', color: '444444'
    };
    return <div>
      <h2 style={{...styleTitle}}>Egg React Server Side Render</h2>
      <h4 style={{...styleSub}}><a href="/antd">AntD + Mobx</a></h4>
    </div>;
  }
}
