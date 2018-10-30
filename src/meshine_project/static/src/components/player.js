import React, {Component} from 'react';
import {connect} from 'react-redux';
import Lottie from 'react-lottie';
import * as animationData from '../../assets/data-text.json'
import * as animationData1 from '../../assets/data.json'

class Player extends Component{

    constructor(props) {
        super(props);
        this.state = {isStopped: false, isPaused: false};
    }

    render(){
        const buttonStyle = {
            display: 'block',
            margin: '10px auto'
        };

        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };
        const defaultOptions1 = {
            loop: false,
            autoplay: true,
            animationData: animationData1,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };

        if(!this.props.animation) {
            return (
                <div id='fullscreen-player'>

                    <div id='play-container'>{/*
                        <Lottie options={defaultOptions}
                                isStopped={this.state.isStopped}
                                isPaused={this.state.isPaused}/>*/}
                        <iframe width="500" height="500" src="https://lottiefiles.com/iframe/3062-loding-dots" frameborder="0" allowfullscreen></iframe>
                        <Lottie options={defaultOptions1}
                                isStopped={this.state.isStopped}
                                isPaused={this.state.isPaused}/>
                    </div>
                    {/*<button style={buttonStyle} onClick={() => this.setState({isStopped: true})}>stop</button>
                    <button style={buttonStyle} onClick={() => this.setState({isStopped: false})}>play</button>
                    <button style={buttonStyle} onClick={() => this.setState({isPaused: !this.state.isPaused})}>pause</button>*/}
                </div>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        animation: state.activeAnimation
    };
}

export default connect(mapStateToProps)(Player);
