import React, {Component} from 'react'
import {CanvasHandler} from '../helpers';
import MoveableAPI from "./MoveableAPI";
import Moveable from "moveable";

class DragBox extends Component {

    constructor(props) {
        super(props);
        this.state = {boxClicked: false}
        this._moveable = React.createRef();
    }

    componentDidMount() {
        //CanvasHandler.dragboxAction()
        /*$('.dragbox').show()
        $('._7WSEvA').show()*/
        $("._5Azx_w").hide()
        $('._7WSEvA').hide()
        //handlerMouse('mouseover', $("._5Azx_w"))
        this.handlerMouse('click', $("._7WSEvA"))
        this.renderMoveable('._7WSEvA');
        console.log('renderMoveable')
        this._moveable.current.updateRect()

    }
    handlerMouse = (event, $domTarget) =>{
        $(".svg-arrg").on(event,
            function (e) {
                $(".dragbox").show()

                console.log('mouseenter')
                let tRef = e.target.getBoundingClientRect()
                let top0 = tRef.top
                let left0 = tRef.left
                let width0 = tRef.width
                let height0 = tRef.height
                let cv = document.getElementById('mycanvas').getBoundingClientRect()
                let cvTop = cv.top
                let cvTLeft = cv.left
                let dbHoverTop = (top0 - cvTop)
                let dbHoverLeft = (left0 - cvTLeft)
                $domTarget.css({
                    'width': width0 + 'px',
                    'height': height0 + 'px',
                    'transform': ' translate(' + dbHoverLeft + 'px, ' + dbHoverTop + 'px)'
                })
                $domTarget.show()
                if(event==='click'){
                    // $('.moveable-control-box').show()
                }
            }).on('mouseleave',
            function () {
                console.log('leave')
                $("._5Azx_w").hide()
            })
    }
    showBox = () => {
        this.setState({
            boxClicked: true
        })
        console.log('showBox')
        //window.location.reload(false);
        this.renderMoveable('._7WSEvA');

        /*const moveable = new Moveable(document.body);

        window.addEventListener("resize", e => {
            console.log('ddddze')
            moveable.updateRect();
        });*/
    }
    renderMoveable = (targetDom)  => {
        console.log('showBox', targetDom)
        return (
                <MoveableAPI
                    ref = {this._moveable}
                    target={'._7WSEvA'} style={{ display: (this.state.boxClicked) ? 'block' : 'none' }}/>
        )
    }
    render() {
        return <span className={"dragbox"}>
                    <div className="awStMQ" style={{width: "410px", height: 800, margin: 0}}>

                      <div className="_7WSEvA xk1pAg" style={{
                          width: "310.95px",
                          height: "207.3px",
                          transform: "translate(56.8691px, 97.1991px) rotate(0deg)"
                      }}
                           onClick={this.showBox}>
                        <div className="iwbuOQ"/>
                        <div className="D_pcYQ" tabIndex={-1}>
                          <div className="jLnzEQ" style={{}}>
                            {/*<div className="qs9lNw HuUi1g" style={{}}>
                              <div className="tWLO5Q _6uIMng _9aYTig">
                                <div className="_4f_o1A Y_rXHg"/>
                              </div>
                            </div>*/}
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
                        {this.renderMoveable()}
                      <div/>

                      <div className="_5Azx_w">
                          <div className="MW9lNg"/>
                      </div>

                    </div>

                </span>;

    }
}

export default DragBox;