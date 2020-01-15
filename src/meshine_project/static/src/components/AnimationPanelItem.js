import React from 'react';

const AnimationPanelItem = ({animation}) => {
    //const animation = props.animation; (Same as {animation}
    const animationTypeName = animation.animation_type.name.toLowerCase();
    const duration = animation.duration.toFixed(1)+'s';
    const animationClass = `animation-${animationTypeName}`;
    const animationIcon = `../assets/animation_${animationTypeName}.svg`;
    let animationObjectReference = animation.object.location;
    if(animationObjectReference.length>20){
        animationObjectReference = animationObjectReference.substring(0, 18)+'...';
    }

return  <React.Fragment>
{/*              <td >{duration}</td>
              <td className={animationClass}><img src={animationIcon}/></td>
              <td>{animationObjectReference}</td>*/}

            <div className="animation-order" style={{"width": "100%"}}>
                <div className="container-fluid">
                    <div className="row" >
                        <div className="col-1 text">
                            2 &nbsp;
                        </div>
                        <div className="col-1">
                            <img src={animationIcon}  className={"magic-entrance"}/>
                        </div>
                        <div className="col text">
                            &nbsp; {animationObjectReference}
                        </div>
                        <div className="col-1 eye-hs" >
                            <img src="../assets/eye_hide_show.svg"/>
                        </div>
                        <div className="col-1 text" >
                            x
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
};

export default AnimationPanelItem;