import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import App from './App';
import {store} from './redux/store/store'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);