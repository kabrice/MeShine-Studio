import React, {Component} from 'react';
import {connect} from 'react-redux';

class AnimationDetail extends Component{
    render(){
        if(!this.props.animation) {
            return <div style={{color: "white"}}>Nothing to display</div>
        }

        return (
            <div style={{color: "white"}}>
                <div>Animation Detail</div>
                <div>{this.props.animation.duration}</div>
            </div> );
    }
}

function mapStateToProps(state) {
    return {
        animation: state.activeAnimation
    };
}

// function mapDispatchToProps(dispatch){
//     return bindActionCreators({selectAnimation: selectAnimation}, dispatch);
// }

export default connect(mapStateToProps)(AnimationDetail);
