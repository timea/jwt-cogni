
import React from 'react';
import {AppRegistry} from 'react-native';
import App from 'src/App';

// redux
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from 'src/reducers'
import thunk from 'redux-thunk'

const middlewares = [thunk];

//comment out if logger is not needed
const { logger } = require('redux-logger');
middlewares.push(logger);

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
const store = createStoreWithMiddleware(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// const store = createStore(rootReducer, applyMiddleware(thunk))

// App
const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => ReduxApp);
