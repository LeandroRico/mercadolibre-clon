import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import generateStore from './store';
import App from './routes/App';

const store = generateStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
