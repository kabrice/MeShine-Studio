import React, {Component} from 'react'
import Moveable from "react-moveable";

class MoveableAPI extends Component {
    constructor(props) {
        super(props);
        this._moveable = React.createRef();
        this.state = {

        }
    }
    componentDidMount() {}

    updateRect(){
        //console.log('IN updateRect')
        this._moveable.current.updateRect()
    }

    render() {
        //console.log('targettarget', this.props.target)
        this.scale = [1, 1];
        this.rotate = 0;
        return (
            <Moveable
                target={document.querySelector(`${this.props.target}`)}
                keepRatio={true}
                draggable={true}
                throttleDrag={0}
                onDrag={({ target, left, top, beforeDelta }) => {
                    console.log('onDrag');
                    target.style.left = left + "px";
                    target.style.top = top + "px";
                }}
                ref = {this._moveable}
                /*resizable={true}
                throttleResize={0}
                onResize={({ target, width, height, dist }) => {
                    console.log(width, height, dist);
                    target.style.width = width + "px";
                    target.style.height = height + "px";
                }}*/
                scalable={true}
                throttleScale={0}
                onScale={({ target, delta }) => {
                    const scale = this.scale;
                    scale[0] *= delta[0];
                    scale[1] *= delta[1];
                    target.style.transform
                        = "scale(" + scale[0] +  "," + scale[1] + ")";
                }}
                rotatable={true}
                throttleRotate={0}
                onRotate={({ target, beforeDelta, delta }) => {
                    console.log('onRotate');
                    this.rotate += delta;
                    target.style.transform
                        = "rotate(" + this.rotate +  "deg)";
                }}
            />
        );
    }
}

export default MoveableAPI;