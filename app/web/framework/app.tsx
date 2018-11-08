import React, { Component, ReactElement } from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Layout from './layout';

export default function bootstrap(App) {
  if (EASY_ENV_IS_NODE) {
    return props => <Layout {...props}><App {...props} /></Layout>;
  }
  const state = window.__INITIAL_STATE__;
  const root = document.getElementById('app');
  if (EASY_ENV_IS_DEV) {
    const render = c => {
      ReactDOM.hydrate(<AppContainer><App {...state} /></AppContainer>, root);
    };
    render(App);
    if (module.hot) {
      module.hot.accept();
    }
  }
  return ReactDOM.hydrate(<App {...state} />, root);
}