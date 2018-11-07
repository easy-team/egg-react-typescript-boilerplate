import React from 'react';

import { applyMiddleware, combineReducers, compose, createStore} from 'redux';

import { routerMiddleware, routerReducer} from 'react-router-redux';

export function configureStore(history, initialState) {
  const reducer = combineReducers({
    routing: routerReducer
  });
  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(
        routerMiddleware(history)
      )
    )
  );

  return store;
}