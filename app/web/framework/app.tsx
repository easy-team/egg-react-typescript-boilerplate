import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

const clientRender = (Com, method) => {
  const state = window.__INITIAL_STATE__;
  const root = document.getElementById('app');
  if (EASY_ENV_IS_DEV) {
    module.hot.accept();
    ReactDOM[method](<AppContainer><Com {...state} /></AppContainer>, root);
  } else{
    ReactDOM[method](<Com {...state} />, root);
  }
};

const serverRender = Com => {
  return Com;
};

export function SSR(Com) {
  return EASY_ENV_IS_NODE ?  serverRender(Com) : clientRender(Com, 'hydrate');
}

export function CSR(Com) {
  return clientRender(Com, 'render');
}



