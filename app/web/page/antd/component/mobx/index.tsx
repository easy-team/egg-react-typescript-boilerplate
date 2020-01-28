import React, { Component, CSSProperties } from 'react';
import { observable } from 'mobx';
import { Observer, observer, inject } from 'mobx-react';
import AppStore from './store';
import { StoreProps } from '../../../../typings/type';


const info = observable({ text: "Mobx Observer Local Test" });

class LocalReactive extends Component {

  style: CSSProperties = {
    textAlign: 'center',
    fontSize: '30px'
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

@inject('configStore')
@observer
class MobXApp extends Component<StoreProps> {
  store: AppStore;
  constructor(props) {
    super(props);
    this.store = new AppStore();
  }

  render() {
    const { configStore } = this.props;
    // [mobx] Dynamic observable objects cannot be frozen https://github.com/mobxjs/mobx/blob/master/CHANGELOG.md
    return <div style={{...configStore!.themeStyle}}>
        <div style={{...this.store.style}} onClick={() => { this.store.plus()}}>点我:{this.store.number}</div>
        <LocalReactive></LocalReactive>
    </div>
  }
};
export default MobXApp;