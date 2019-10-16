import React, { Component } from 'react';
import { CSR } from '../../framework/app';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Com from './com'

// const state = window.__INITIAL_STATE__;
// const root = document.getElementById('app');
// if (EASY_ENV_IS_DEV) {
//   ReactDOM.render(<AppContainer><Com {...state} /></AppContainer>, root);
//   if (module.hot) {
//     module.hot.accept();
//   }
// } else{
//   ReactDOM.render(<Com {...state} />, root);
// }
// if (module.hot) {
//   module.hot.accept();
// }
CSR(Com);
