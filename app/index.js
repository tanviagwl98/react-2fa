import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import {login} from './api';

(async () => {
    const res = await login();

const domContainer = document.createElement('div');
document.body.appendChild(domContainer);
ReactDOM.render(<App user = {res.user} />, domContainer);

})();