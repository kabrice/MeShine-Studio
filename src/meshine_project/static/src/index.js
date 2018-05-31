// Bootstrap dependencies
window.$ = window.jQuery = require('jquery') // required for bootstrap
window.Popper = require('popper.js') // required for tooltip, popup...
import 'bootstrap'
// import '../scss/main.scss' import it in prod


import './index.scss' // include bootstrap css file with own modifications
// tooltip and popover require javascript side modification to enable them (new in Bootstrap 4)
// use tooltip and popover components everywhere
$(function (){
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
});

//*** REACT ***
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import App from './components/app';
import reducers from './reducers';
import Home from './containers/home';

import AnimationPanel from './containers/animation_panel';
import CardContainer from './containers/projects-container';



// const App = () =>{
//     return <QuestionTag/>
// };

const AppCardContainer = () =>{
    return <CardContainer/>
};



// class AppAnimationPanel extends Component{
//     constructor(props){
//
//         super(props);
//
//         //Todo: To retrieve through ajax in the future
//         const cardAnimations = [{'id':1, 'duration': 0.1, 'typeId': 1, 'objectId': 1}, {'id':2, 'duration': 0.1, 'typeId': 2, 'objectId': 1},
//             {'id':3, 'duration': 2.1, 'typeId': 3, 'objectId': 1}, {'id':4, 'duration': 1.0, 'typeId': 3, 'objectId': 1}, {'id':5, 'duration': 0.1, 'typeId': 1, 'objectId': 1},
//             {'id':6, 'duration': 0.1, 'typeId': 4, 'objectId': 1}, {'id':7, 'duration': 4.1, 'typeId': 1, 'objectId': 1}, {'id':8, 'duration': 0.1, 'typeId': 1, 'objectId': 1},
//             {'id':9, 'duration': 0.7, 'typeId': 1, 'objectId': 1}, {'id':10, 'duration': 0.1, 'typeId': 2, 'objectId': 1}];
//         this.state = {cardAnimations};
//
//     }
//
//     render(){
//         return <AnimationPanel animations = {this.state.cardAnimations}/>
//     }
// }


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

