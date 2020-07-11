import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './Components/App';
import Reducers from './Reducers/Reducers';

ReactDOM.render(
    <Provider store={createStore(Reducers, applyMiddleware(thunk))}>
        <App />
    </Provider >,
    document.querySelector('#root')


)