import React from 'react';
import AnimationPanelItem from '../components/animation_panel_item';

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

export default class AnimationPanel extends Component{

    renderList(){
        return this.props.animations.map((animation) => {
            return <AnimationPanelItem key={animation.id} animation={animation}/>
        })
    }

    render(){
        return (
            <table>
                <tbody>
                {this.renderList()}
                </tbody>
            </table>
        )
    }
}
/*

export default AnimationPanel;*/
