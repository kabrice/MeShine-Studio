import React, {Component} from 'react'
import {fabric} from 'fabric';

class MeFabric extends Component{

    componentDidMount(){
        // Make a New Canvas
        this.the_canvas = new fabric.StaticCanvas('meCanvas', {
            preserveObjectStacking: true,
            height: 736,
            width: 414,
        });

        let rect = new fabric.Rect({
            left: 100,
            top: 150,
            fill: 'red',
            width: 200,
            height: 200
        });
        this.the_canvas.add(rect);

        var selected = null, // Object of the element to be moved
            x_pos = 0, y_pos = 0, // Stores x & y coordinates of the mouse pointer
            x_elem = 0, y_elem = 0; // Stores top, left values (edge) of the element

        // Will be called when user starts dragging an element
        function _drag_init(elem) {
            // Store the object of the element which needs to be moved
            selected = elem;
            x_elem = x_pos - selected.offsetLeft;
            y_elem = y_pos - selected.offsetTop;
        }

        // Will be called when user dragging an element
        function _move_elem(e) {
            x_pos = document.all ? window.event.clientX : e.pageX;
            y_pos = document.all ? window.event.clientY : e.pageY;
            if (selected !== null) {
                selected.style.left = (x_pos - x_elem) + 'px';
                selected.style.top = (y_pos - y_elem) + 'px';
            }
        }

        // Destroy the object when we are done
        function _destroy() {
            selected = null;
        }

        // Bind the functions...
        document.getElementById('meCanvas').onmousedown = function () {
            _drag_init(this);
            return false;
        };
        if (navigator.appVersion.indexOf("Win")!=-1){

        }
        document.onmousemove = _move_elem;
        document.onmouseup = _destroy;
    }

    // componentWillReceiveProps = (newprops) =>{
    //
    //     // If Updated Item is not the same as the old one
    //     // 		=> Update the canvas with newer item
    //     if(newprops.activeProperty !== this.props.activeProperty){
    //         this.updateCanvasforImage(this.props.activeProperty,newprops.activeProperty);
    //     }
    // }

    // updateCanvasforImage = (prev,next) => {
    //
    //     if(next){
    //
    //         let to_remove;
    //         // Find the same kind of element
    //         this.the_canvas.forEachObject( (object) => {
    //
    //             if(object.the_type === next.the_type){
    //                 to_remove = object;
    //             }
    //         } );
    //
    //         this.the_canvas.remove(to_remove);
    //
    //         if(next.the_type === 'bg'){
    //             this.the_canvas.setBackgroundImage(next);
    //             this.the_canvas.renderAll();
    //             return;
    //         }
    //
    //         this.the_canvas.add(next);
    //         this.the_canvas.moveTo(next, next.zIndex);
    //     }
    // }
    //
    // saveToCanvas = () => {
    //
    //     let link = document.createElement("a");
    //     link.href = this.the_canvas.toDataURL({format: 'png'});
    //     link.download = "avatar.png";
    //     link.click();
    //
    // };

    render(){
        return <canvas id="meCanvas" ref="meFabric"/>;
    }
}

export default MeFabric;