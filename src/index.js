import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Menu3Admin from './Menu3Admin';
import registerServiceWorker from './registerServiceWorker';
import configureStore from "./store/configureStore"; 
import { Provider } from "react-redux";

const store = configureStore();

ReactDOM.render(<Provider store={store}><Menu3Admin /></Provider>, document.getElementById('root'));
registerServiceWorker();
