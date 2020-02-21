import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
require('./utilities/namespace')
require('./tests/fetch')

ReactDOM.render(<App />, document.getElementById('react-wrapper'));