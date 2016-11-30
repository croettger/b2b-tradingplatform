import React from 'react';
import ReactDOM from 'react-dom';
import LabelInput from './LabelInput';
import Navigation from './Navigation';
import injectTapEventPlugin from 'react-tap-event-plugin';

//Wird für das Aufklappen von Menüs verwendet z.B in Navigation.js
injectTapEventPlugin();

//ReactDOM.render(<Welcome name="Christoph"/>, document.getElementById('main'));
ReactDOM.render(<LabelInput labelTitle="Ein Label:"/>, document.getElementById('eingabe'));
ReactDOM.render(<Navigation title="B2B-TradingPlatform"/>, document.getElementById('header'));
