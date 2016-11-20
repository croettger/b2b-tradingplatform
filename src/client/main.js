import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './Welcome';
window.alert(`Hallo ${6*7}`);

ReactDOM.render(<Welcome name="Christoph" />, document.getElementById('main'));

