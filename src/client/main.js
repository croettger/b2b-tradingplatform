import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './Welcome';


//const webpackDev = require('../../webpack.config.dev');
//const webpackProd = require('./webpack.config.prod');
//window.alert(`Hallo ${6*7}`);
//window.alert(webpackDev.plugins.API_SERVER_URL);
//window.alert(webpackProd.plugins.API_SERVER_URL);

ReactDOM.render(<Welcome name="Christoph"/>, document.getElementById('main'));

window.alert(API_SERVER_URL);