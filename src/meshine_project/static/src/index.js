// Bootstrap dependencies
window.$ = window.jQuery = require('jquery'); // required for bootstrap
window.Popper = require('popper.js'); // required for tooltip, popup...
//import 'bootstrap';
// import '../scss/main.scss' import it in prod


import './index.scss' // include bootstrap css file with own modifications
// tooltip and popover require javascript side modification to enable them (new in Bootstrap 4)
// use tooltip and popover components everywhere
// $(function (){
//     $('[data-toggle="tooltip"]').tooltip();
//     $('[data-toggle="popover"]').popover();
// });
import 'lottie-web'
//*** REACT ***
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import App from './components/App';
import reducers from './reducers';
import Home from './containers/Home';

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "../../external/semantic-ui.2.4.2/semantic-ui.min.css";
document.head.appendChild(styleLink);

const store = createStore(reducers, {}, applyMiddleware(ReduxPromise));
//const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={store}>

        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/summary/:id" component={App} />
                    <Route path="/" component={Home} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('.me-container'));

