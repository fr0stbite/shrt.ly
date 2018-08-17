import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';

import ApplicationComponent from './component/ApplicationComponent';
import ApplicationMiddleware from './middleware/ApplicationMiddleware';
import ApplicationReducer from './reducer/ApplicationReducer';
import ApplicationState from './state/ApplicationState';
import Status from './status/Status';

const { faCheck, faExclamation, faInfo, faSpinner } = fas;

library.add(faCheck, faExclamation, faInfo, faSpinner);

const location = document.location.origin;

const state = ApplicationState(location, Status.READY, null, null);
const store = createStore(
  ApplicationReducer,
  state,
  applyMiddleware(ApplicationMiddleware)
);

render(
  <Provider store={store}>
    <ApplicationComponent />
  </Provider>,
  document.querySelector('#application')
);
