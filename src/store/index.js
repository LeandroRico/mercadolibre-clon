import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from '../reducers';

export default function generateStore() {
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
  return store;
}
