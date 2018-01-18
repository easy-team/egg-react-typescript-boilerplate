import reducers from 'component/spa/ssr/reducers';
import { routerReducer, syncHistoryWithStore } from 'react-router-redux';
import { combineReducers, createStore } from 'redux';

export const create = (initalState) => {
  return createStore(reducers, initalState);
};
