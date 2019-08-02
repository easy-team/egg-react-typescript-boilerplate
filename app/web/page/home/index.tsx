
import React, { Component, ReactElement } from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider, useStaticRendering } from 'mobx-react';
import ConfigStore from './store/config';
import Layout from '../../framework/layout';
// https://github.com/gaearon/react-hot-loader/issues/525
import { Tab } from './component/tab';
import { TabProps } from '../../framework/type';

class App extends Component<TabProps, any> {
  render() {
    const stores = {
      config: new ConfigStore()
    };
    return <Provider {...stores}><Layout {...this.props}><Tab {...this.props} /></Layout></Provider>;
  }
}

function bootstrap() {
  if (EASY_ENV_IS_NODE) {
    useStaticRendering(true);
    return App;
  }
  const stores = window.stores = window.stores || {
    config: new ConfigStore()
  };
  const state = window.__INITIAL_STATE__;
  const root = document.getElementById('app');
  if (EASY_ENV_IS_DEV) {
    ReactDOM.hydrate(<Provider {...stores}><AppContainer><Tab {...state} /></AppContainer></Provider>, root);
    if (module.hot) {
      module.hot.accept();
    }
  } else{
    ReactDOM.hydrate(<Provider {...stores}><Tab {...state} /></Provider>, root);
  }
}

export default bootstrap();