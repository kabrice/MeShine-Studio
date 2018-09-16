import React, {Component} from 'react';
import {connect} from 'react-redux';

class AnimationDetail extends Component{
    render(){
        if(!this.props.animation) {
            return <div style={{color: "white"}}>
                <div  className="preview"><img src="../assets/avatar.png" className="img-preview" height="80%" width="80%"/></div>
                <div  className="preview"><img src="../assets/avatar.png" height="80%" width="80%"/></div>
            </div>
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
