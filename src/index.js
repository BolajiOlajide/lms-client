import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// components
import Routes from './routes';

// styles
import 'antd/dist/antd.css';
import './index.css';

// utils
import configureStore from './store';


const Main = () => (
  <Provider store={configureStore()}>
    <Routes />
  </Provider>
)


ReactDOM.render(<Main />, document.getElementById('root'));
