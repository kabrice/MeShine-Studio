import _ from 'lodash';
import React, {Component} from 'react';
import AnimationPanelItem from '../components/animation_panel_item';
import {connect } from 'react-redux';
import {selectAnimation} from "../actions/index";
import {bindActionCreators} from 'redux';
import {fetchAnimation} from "../actions/index";

/*const AnimationPanel = (props) => {

    const animationItems = props.animations.map((animation) => {
       return <AnimationPanelItem key={animation.id} animation = {animation}/>
    });

    return (
        <table>
            <tbody>
                {animationItems}
            </tbody>
        </table>
    );
};*/

class AnimationPanel extends Component{

    componentDidMount(){

        this.props.fetchAnimation();
    }



    renderAnimation(){
        return _.map(this.props.animations, (animation) => {
            return  <tr key={animation.id}
                        onClick={() => this.props.selectAnimation(animation)}>
                        <AnimationPanelItem animation={animation}/></tr>
        })
    }

    render(){
        return (
            <table>
                <thead>
                <tr>
                    <th colSpan="3">Volet d'animation</th>
                </tr>
                </thead>
                <tbody>
                {this.renderAnimation()}
                </tbody>
            </table>
        )
    }
}


function mapStateToProps(state) {
    // Whatever is returned will show up as props inside of AnimationPanel

    return {
        animations: state.animations
    }
}

// // Anything returned from this function will end up as props on the AnimationPanel container
// function mapDispatchToProps(dispatch){
//     // Whenever selectAnimation is called, the result should be passed to all of our reducers
//     return bindActionCreators({selectAnimation, fetchAnimation}, dispatch);
// }

// Promote AnimationPanel from a component to a container - it needs to know about this new dispatch method, selectAnimation
// Make it available as prop.
export default connect(mapStateToProps, {fetchAnimation})(AnimationPanel);
