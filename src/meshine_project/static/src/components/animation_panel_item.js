import React from 'react';

const AnimationPanelItem = ({animation}) => {
    //const animation = props.animation; (Same as {animation}
    const animationTypeName = animation.animation_type.name.toLowerCase();
    const duration = animation.duration.toFixed(1)+'s';
    const animationClass = `animation-${animationTypeName}`;
    const animationIcon = `../assets/animation_${animationTypeName}.svg`;
    const animationObjectReference = animation.object.location;

return  <React.Fragment>
              <td >{duration}</td>
              <td className={animationClass}><img src={animationIcon}/></td>
              <td>{animationObjectReference}</td>
        </React.Fragment>
};

export default AnimationPanelItem;