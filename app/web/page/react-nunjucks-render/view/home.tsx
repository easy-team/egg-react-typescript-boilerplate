
import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { observer } from 'mobx-react';
import { hot } from 'react-hot-loader';
import AppStore from '../store';
import MobXApp from '../component';

const stores = window.stores = window.stores || {
  appStore: new AppStore()
};

@observer
class Home extends Component {
  componentDidMount() {
    console.log('Nunjucks Render11');
  }
  render() {
    return<Provider {...stores}><MobXApp /></Provider>;
  }
}



export default EASY_ENV_IS_DEV ? hot(module)(Home) : Home;