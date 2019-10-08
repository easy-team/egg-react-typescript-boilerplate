
import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import AppStore from './store';
import MobXApp from './component';
import { CSR } from '../../framework/app'

const stores = window.stores = window.stores || {
  appStore: new AppStore()
};

class Index extends Component {
  componentDidMount() {
    console.log('Nunjucks Render');
  }
  render() {
    return<Provider {...stores}><MobXApp /></Provider>;
  }
}


export default CSR(Index);