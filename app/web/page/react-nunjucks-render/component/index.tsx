import React, { Component, CSSProperties } from 'react';
import { observable } from 'mobx';
import { Observer, observer, inject } from 'mobx-react';

const info = observable({ text: "Mobx Observer Local Test" });

class LocalReactive extends Component {

  style: CSSProperties = {
    textAlign: 'center',
    fontSize: '20px',
    color: 'red',
    marginTop: '24px'
  }

  handle() {
    info.text = `${info.text } Local Update`;
    console.log('click');
  }

  render() {
    return <div>
        <div style={this.style}>{info.text}</div>
        <Observer>{() => <div style={this.style} onClick={() => { this.handle()}}>点我:{info.text}</div>}</Observer>
    </div>
  } 
}

@inject('appStore')
@observer
class MobXApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { appStore } = this.props;
    // [mobx] Dynamic observable objects cannot be frozen https://github.com/mobxjs/mobx/blob/master/CHANGELOG.md
    return <div style={{...appStore.style}}>
        <h3>{appStore.state.text}</h3>
        <div style={{...appStore.style}} onClick={() => { appStore.plus()}}>点我:{appStore.number}</div>
        <LocalReactive></LocalReactive>
    </div>
  }
};
export default MobXApp;