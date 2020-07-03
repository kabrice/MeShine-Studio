import React, {Component} from 'react'
import {CanvasHandler} from '../helpers';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import Moveable from "react-moveable";
import _ from "lodash";

// import MoveableAPI from "./MoveableAPI";

class MyCanvas extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showDragbox: false,
            hoverBoxW: 0,
            hoverBoxH: 0,
            hoverTransform : "",
            clickBoxW: 0,
            clickBoxH: 0,
            clickTransform : "",
            showHoverBox: false,
            showClickBox: false,
            showMoveableApi: false,
            currentObjectId: null,
            isClick: false,
            drawingObjects: [{id: 0, type: 'img', src:'https://media-public.canva.com/MADFFJdIo_0/1/thumbnail_large.jpg',
                                style:'display: block; transform: translate(170px, 445px)', width:720},
                {id:1, type: 'rect',
                    style: 'z-index: 3; width: 525px; background: #CD1721; display: block; height: 400px; transform: translate(215px, 680px)'}],
        }
        this._moveable = React.createRef();
    }


    componentDidMount() {
        document.addEventListener('click', this.handleClickOutsideFigure, true);
        document.addEventListener('mouseenter', this.handleMouseEnter, true);
        document.addEventListener('mouseleave', this.handleMouseLeave, true);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutsideFigure, true);
        document.addEventListener('mouseenter', this.handleMouseEnter, true);
        document.addEventListener('mouseleave', this.handleMouseLeave, true);
    }

    handleClickOutsideFigure = e => {
        //e.stopPropagation()
        if (!e.target.classList.contains("svg-arrg")
                && e.target.id === 'mycanvas') {
            this.setState({showClickBox: false});
        } else {
            this.displayDragbox(e, true)
        }

    }


    displayDragbox = (e, isClick) => {
        if (e.target.className === "svg-arrg") {
            console.log('e.target', e.target)
            this.setState({isClick: isClick})
            let width0 = e.target.offsetWidth*0.4
            let height0 = e.target.offsetHeight*0.4


            let beforeTranslate = this.getComputedTranslateXY(e.target)
            let currentObjectTransform = e.target.style.transform
            let rotIndex1 = currentObjectTransform.indexOf('rotate')
            let rotIndex2 = currentObjectTransform.indexOf('deg)')
            let currentRotation = ""
            if(rotIndex1 !== -1)
                currentRotation = currentObjectTransform.substring(rotIndex1, rotIndex2+4)
            //console.log('rotIndex1', rotIndex1)
            let newTransform = `translate(${beforeTranslate[0]*0.4}px, ${beforeTranslate[1]*0.4}px) ${currentRotation}`
            if (isClick) {
                this.setState({
                    showClickBox: true,
                    showHoverBox: false,
                    clickBoxW: width0,
                    clickBoxH: height0,
                    clickTransform: newTransform
                })
                this._moveable.current.updateRect()
            } else {
                console.log('!isClick newTransform', newTransform)
                this.setState({
                    showHoverBox: true,
                    hoverBoxW: width0,
                    hoverBoxH: height0,
                    hoverTransform: newTransform
                })

            }
            this.setState({
                //currentObjectId: e.target.id,
                showDragbox: true,
                objectHasBeenClicked: isClick
            })
            if(!document.getElementsByClassName('moveable-rotation-line')[0] || isClick)
                this.setState({
                    currentObjectId: e.target.id
                })
            //}
        }
    }

    handleMouseLeave = (e) => {
        if (e.target.className === "svg-arrg") {
            this.setState({showHoverBox: false})
        }
    }
    handleMouseEnter = e => {
        if (e.target.className === "svg-arrg") {
            this.displayDragbox(e, false)
        }
    }
    handleMoveOnchange = e => {
        console.log('handleMoveableOnchange')
    }
    getComputedTranslateXY(obj){
        const transArr = [];
        if(!window.getComputedStyle) return;
        const style = getComputedStyle(obj),
            transform = style.transform || style.webkitTransform || style.mozTransform;
        let mat = transform.match(/^matrix3d\((.+)\)$/);
        if(mat) return parseFloat(mat[1].split(', ')[13]);
        mat = transform.match(/^matrix\((.+)\)$/);
        mat ? transArr.push(parseFloat(mat[1].split(', ')[4])) : transArr.push(0);
        mat ? transArr.push(parseFloat(mat[1].split(', ')[5])) : transArr.push(0);
        return transArr;
    }

    addDrawingObject = (obj) => {
        //image
        let drawingObject = this.state.drawingObjects
        drawingObject.push(obj)
        this.setState({drawingObjects: drawingObject})
        //console.log('obj', obj)

    }
    renderDrawingObject = () => {
        return _.map(this.state.drawingObjects, obj => {
            let result = (obj.style).split(';').reduce(function (ruleMap, ruleString) {
                let rulePair = ruleString.split(':');
                ruleMap[rulePair[0].trim()] = rulePair[1].trim();

                return ruleMap;
            }, {});

            switch (obj.type) {
                case 'img':
                    return (
                        <div key={obj.id} className="svg-arrg" id={`o${obj.id}_${obj.type}`}
                             style={result}>
                            <img
                                width={obj.width}
                                className="vxiL9Q _1pMoDA JaNaZQ _1vGB4g"
                                crossOrigin="anonymous"
                                src={obj.src}/>
                        </div>
                    )
                case 'rect':
                    return (
                        <div key={obj.id} className="svg-arrg" id={`o${obj.id}_${obj.type}`} style={result} />
                    )

            }

        })
    }
    render() {
        this.scale = [1, 1];
        this.rotate = 0;

        return <React.Fragment>
            <div id='mycanvas'>
                {/*<div className="svg-arrg" id="o0_img" >
                    <img
                        width={720}
                        className="vxiL9Q _1pMoDA JaNaZQ _1vGB4g"
                        crossOrigin="anonymous"
                        src="https://media-public.canva.com/MADFFJdIo_0/1/thumbnail_large.jpg"
                        draggable="false"/>
                </div>*/}

                {this.renderDrawingObject()}
                {/*<div className="svg-arrg" id={`o${this.props.imgSrc.id}_img`}
                     style={{display: (this.props.imgSrc.id) ? 'block' : 'none',
                            transform: "translate(170px, 445px)"}}>
                    <img
                        width={720}
                        className="vxiL9Q _1pMoDA JaNaZQ _1vGB4g"
                        crossOrigin="anonymous"
                        src={this.props.imgSrc.value}/>
                </div>*/}
            </div>
            <span className={"dragbox"} style={{display: (this.state.showDragbox) ? '' : 'none'}}>
                <div className="awStMQ" style={{width: "410px", height: 800, margin: 0}}>

                  <div className="_7WSEvA xk1pAg"
                       id={"click-box"}
                       onChange={this.handleMoveOnchange}
                       style={{
                           width: this.state.clickBoxW,
                           height: this.state.clickBoxH,
                           transform: this.state.clickTransform,
                           display: (this.state.showClickBox) ? '' : 'none'}}>
                        <div className="iwbuOQ"/>
                        <div className="D_pcYQ" tabIndex={-1}>
                          <div className="jLnzEQ" style={{}}>
                              <div className="tWLO5Q bHjyDw">
                              <div className="d17Zhg XSSVgw"/>
                            </div>
                            <div className="tWLO5Q _3sHsVA">
                              <div className="d17Zhg BUvbUQ"/>
                            </div>
                            <div className="tWLO5Q _7wIhoA">
                              <div className="d17Zhg BUvbUQ"/>
                            </div>
                            <div className="tWLO5Q JcrqeQ">
                              <div className="d17Zhg XSSVgw"/>
                            </div>
                            <div className="tWLO5Q Ieb5Pg">
                              <div className="d17Zhg _2O_Ung"/>
                            </div>
                            <div className="tWLO5Q j1p_dQ">
                              <div className="d17Zhg LlhZCQ"/>
                            </div>
                            <div className="tWLO5Q zMcsWg">
                              <div className="d17Zhg LlhZCQ"/>
                            </div>
                            <div className="tWLO5Q JifkyA">
                              <div className="d17Zhg _2O_Ung"/>
                            </div>
                          </div>
                        </div>
                    </div>
                    {this.state.showClickBox ?
                        <Moveable
                            target={document.querySelector('._7WSEvA')}
                            ref = {this._moveable}
                            keepRatio={document.getElementById(this.state.currentObjectId).getElementsByTagName('img')[0]}
                            draggable={true}
                            throttleDrag={0}
                            onDragStart={({ set }) => {
                                set(this.getComputedTranslateXY(document.getElementById('click-box')));
                            }}
                            onDrag={({ target,beforeTranslate }) => {
                                let currentObjectTransform = document.getElementById(this.state.currentObjectId).style.transform
                                let rotIndex1 = currentObjectTransform.indexOf('rotate')
                                let rotIndex2 = currentObjectTransform.indexOf('deg)')
                                let currentRotation = ""
                                if(rotIndex1 !== -1)
                                    currentRotation = currentObjectTransform.substring(rotIndex1, rotIndex2+4)
                                target.style.transform = `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px) ${currentRotation}`
                                document.getElementById(this.state.currentObjectId)
                                        .style
                                        .transform = `translate(${beforeTranslate[0]/0.4}px, ${beforeTranslate[1]/0.4}px) ${currentRotation}`
                                if(!document.getElementsByClassName('moveable-rotation-line')[0]  || this.state.isClick)
                                document.getElementById('hover-box')
                                    .style
                                    .transform = `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px) ${currentRotation}`
                            }}
                            resizable={true}
                            throttleResize={0}
                            onResize={({ target, width, height, dist , delta}) => {
                                console.log(width, height, dist);
                                target.style.width = width + "px";
                                target.style.height = height + "px";
                                //console.log('onResize', delta)
                                let currentObject = document.getElementById(this.state.currentObjectId);
                                if(currentObject.firstElementChild){
                                    currentObject.firstElementChild.width = width/0.4
                                    currentObject.firstElementChild.height = height/0.4
                                }else{
                                    currentObject.style.width = width/0.4+'px'
                                    currentObject.style.height = height/0.4+'px'
                                }


                            }}
                            /*scalable={true}
                            throttleScale={0}
                            onScale={({ target, delta }) => {
                                const scale = this.scale;
                                scale[0] *= delta[0];
                                scale[1] *= delta[1];
                                target.style.transform
                                    = "scale(" + scale[0] +  "," + scale[1] + ")";
                            }}*/
                            rotatable={true}
                            throttleRotate={0}
                            onRotate={({ target, beforeDelta, delta }) => {
                                let currentTranslate = this.getComputedTranslateXY(document.getElementById('click-box'))
                                console.log('onRotate', document.getElementById(this.state.currentObjectId))
                                this.rotate += delta;
                                target.style.transform
                                    = `translate(${currentTranslate[0]}px, ${currentTranslate[1]}px) rotate(${this.rotate}deg)`
                                document.getElementById(this.state.currentObjectId)
                                    .style
                                    .transform = `translate(${currentTranslate[0]/0.4}px, ${currentTranslate[1]/0.4}px) rotate(${this.rotate}deg)`
                                if(!document.getElementsByClassName('moveable-rotation-line')[0]  || this.state.isClick)
                                document.getElementById('hover-box')
                                    .style
                                    .transform = `translate(${currentTranslate[0]/0.4}px, ${currentTranslate[1]/0.4}px) rotate(${this.rotate}deg)`
                            }}
                        />
                        : null}
                <div/>

                <div className="_5Azx_w"
                     id={"hover-box"}
                   style={{
                       width: this.state.hoverBoxW,
                       height: this.state.hoverBoxH,
                       transform: this.state.hoverTransform,
                       display: (this.state.showHoverBox) ? '' : 'none'
                   }}>
                  <div className="MW9lNg"/>
                </div>

                </div>

            </span>
        </React.Fragment>;
    }
}

export default MyCanvas;