import React from 'react';
import ReactDOM from 'react-dom';
import Base from './App';

require('./utilities/namespace');
require('./tests/fetch');

ReactDOM.render(<Base />, document.getElementById('react-root'));
