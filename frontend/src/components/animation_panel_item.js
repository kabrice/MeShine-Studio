import React from 'react';

const AnimationPanelItem = ({animation}) => {
    //const animation = props.animation; (Same as {animation}

    const animationClass = "animation-emphasis";
    const animationIcon = "../assets/animation_emphasis.svg";
    const animationObjectReference = "Le passage du cyclone Mora a laissé des traces. Les habitants ont découverts 20 baleines échouées";

return  <React.Fragment>
              <td >0,1s</td>
              <td className={animationClass}><img src={animationIcon}/></td>
              <td>{animationObjectReference}</td>
        </React.Fragment>
};

export default AnimationPanelItem;