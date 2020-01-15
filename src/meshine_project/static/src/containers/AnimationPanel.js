import React, {Component} from 'react';
import AnimationContainer from '../components/AnimationContainer';
import {connect } from 'react-redux';
import {fetchAnimation} from "../actions/index";
import TextEditor from '../components/TextEditor'
import Arrangement from '../components/Arrangement'
import AdvancedStyle from '../components/AdvancedStyle'

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
        return <AnimationContainer/>
    }

    renderArrangement(){
        return <Arrangement/>
    }

    renderTextEditor(){
        return <TextEditor/>
    }

    renderAdvancedStyle(){
        return <AdvancedStyle/>
    }

    render(){
        return (
            <React.Fragment>
            <table className="table-config" style={{"margin-left": "-4px"}}>
                <thead>
                <tr>
                    <th>ANIMATIONS</th>
                </tr>
                </thead>
                <tbody>{/*
                {this.renderArrangement()}
                {this.renderTextEditor()}
                {this.renderAdvancedStyle()}*/}
                </tbody>
            </table>
                {this.renderAnimation()}
            </React.Fragment>
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
