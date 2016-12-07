import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './components/navigation/Navigation';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Login from './components/login/Login';
import BottomNavi from './BottomNavi';
import LabelInput from './LabelInput';
import BottomNavigationTest from './BottomNavigationTest';
import Register from './components/registration/Register';


//Wird für das Aufklappen von Menüs verwendet z.B in Navigation.js
injectTapEventPlugin();

ReactDOM.render(<Navigation title="B2B-TradingPlatform"/>, document.getElementById('header'));
 ReactDOM.render(<Login />, document.getElementById('anmelden'));
// ReactDOM.render(<BottomNavi />, document.getElementById('footer'));
// ReactDOM.render(<LabelInput labelTitle="Ein Label:"/>, document.getElementById('eingabe'));
// ReactDOM.render(<Register/>, document.getElementById('anmelden'));
ReactDOM.render(<BottomNavigationTest/>, document.getElementById('footer'));
