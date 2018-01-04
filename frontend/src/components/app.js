import React, { Component } from 'react';
import AnimationPanel from '../containers/animation_panel';
import AnimationDetail from '../containers/animation-detail';

export default class App extends Component {
    render() {
        return (

               /* <div className="col mt-1 pt-2 bg-inverse animation-panel">
                    <AnimationPanel/>
                </div>*/
            <div className="row mt-1">
                <div className="col mt-1 pt-2 bg-inverse animation-panel">
                    <AnimationPanel/>
                </div>
                <div id="card-container" className="col">
                    <canvas id="mydiv"></canvas>
                </div>
                <div className="col  bg-inverse" id="design-panel">
                    <AnimationDetail/></div>
            </div>

        );
    }
}