import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware()(createStore);

// Create component 'App'. Then insert component into the DOM.
// ReactDOM.render( <component>, reference to existing DOM node on the page)
// ReactDOM.render( <App />, document.querySelector('#root')
ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
