import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { DatePicker } from 'antd';
import {createStore,applyMiddleware} from 'redux';
import rootReducers from './redux/rootReducers';
import {Provider} from 'react-redux';
import reduxThunk from 'redux-thunk';
 import 'antd/dist/antd.css';
const store = createStore(rootReducers,applyMiddleware(reduxThunk))

ReactDOM.render(
  <Provider store={store}>

  
    <App />
  </Provider>,
 
  document.getElementById('root')
);


serviceWorker.unregister();
