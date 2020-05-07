import _ from 'lodash';
import React, {Component} from 'react';
import AnimationPanelItem from '../components/AnimationPanelItem';
import {connect} from 'react-redux';
import {fetchAnimation} from "../actions/index";
import MotionUI from "../../external/motion-ui-local";
import LazyLoad from 'react-lazyload'

import {Animations} from '../helpers';
const ENTRY = 1, EMPHASIS =2,  EXIT = 3;
class AnimationPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displayAnims: false,
            subMenuList: [{'title': 'Entry'},
                {'title': 'Emphasis'},
                {'title': 'Exit'}],
            subMenuNum: 0,
            muiEntryAnimationList: ['slide-in-down',
                'slide-in-left',
                'slide-in-up',
                'slide-in-right',
                'fade-in',
                'hinge-in-from-top',
                'hinge-in-from-right',
                'hinge-in-from-bottom',
                'hinge-in-from-left',
                'hinge-in-from-middle-x',
                'hinge-in-from-middle-y',
                'scale-in-up',
                'scale-in-down',
                'spin-in',
                'spin-in-ccw'],
            muiExitAnimationList: ['slide-out-down',
                'slide-out-left',
                'slide-out-up',
                'slide-out-right',
                'fade-out',
                'hinge-out-from-top',
                'hinge-out-from-right',
                'hinge-out-from-bottom',
                'hinge-out-from-left',
                'hinge-out-from-middle-x',
                'hinge-out-from-middle-y',
                'scale-out-up',
                'scale-out-down',
                'spin-out',
                'spin-out-ccw'],
            animationItems: [{'type': 'fade', 'name': 'kangoroo_astronaut.png'},
                             {'type': 'hinge', 'name': 'kangoroo_astronaut.png'},
                             {'type': 'slide', 'name': 'kangoroo_astronaut.png'},
                             {'type': 'spin', 'name': 'kangoroo_astronaut.png'},
                             {'type': 'zoom', 'name': 'kangoroo_astronaut.png'}],
            isMulticoloring: false,
            isTheotherhalf: false,
            dustentranceStatic: true,
            dustexitStatic: true,
            dustemphasisStatic: true,
            isAnimationHasBeenClick: false,
            isEntry: true,
            isEmphasis: false,
            isExit: false
        };
    }

    componentDidMount() {
        this.props.fetchAnimation();
        Animations.shattering();
        Animations.dustAnimation()
        Animations.glslGlitch()
        Animations.liquidDistorsion()
    }

    muiAnimation = (n, isEntry, isMouseLease) => {

        Animations.splitForTilesAnimations();

        if(isMouseLease){
            if(!isEntry) {
                console.log('hey', n);
                $(`#exit${n}`).removeAttr('style').removeAttr('class')
            }
        }else{
            if(isEntry){
                MotionUI.animateIn($(`#entry${n}`), null, () => {});
            }else{
                MotionUI.animateOut($(`#exit${n}`), null, () => {});
            }
        }

    }
    d3Effect = (millisecond) => {
        Animations.d3effect(millisecond);
    }
    exitTilesAnim = () => {
        $(".split").find('img').css('opacity', 0, 'important');
        //$(".split").removeClass('active');*/
        Animations.splitForTilesAnimations();
       // Animations.statckAnimation()
        $(".split").addClass('active');
    }

    renderMUIEntryItem() {
        return _.map(this.state.animationItems, (item, i) => {
            return (
                <LazyLoad
                    once={true}
                    key={item.type}
                    placeholder={<img src={"../../assets/LiquidDistortion/img/3.jpg"}/>}>
                    <div className={"item"}
                         key={item.type}
                         onClick={() => {this.getCurrentAnimation(item.type)}}
                         style={{display: (this.state.isEntry) ? 'flex' : 'none'}}
                         onMouseEnter={() => {
                             this.muiAnimation(i + 1, true)
                         }}
                         onMouseLeave={() => {
                             this.muiAnimation(0, true)
                         }}>
                <img id={`entry${i + 1}`} src={`../assets/${item.name}`}/>
                <span>{item.type} in</span>
            </div>
                </LazyLoad>)

        });
    }
    renderMUIExitItem() {
        return _.map(this.state.animationItems, (item, i) => {
            return (
                <LazyLoad
                    once={true}
                    key={item.type}
                    placeholder={<img src={"../../assets/LiquidDistortion/img/3.jpg"}/>}>
                    <div className={"item"}
                         key={item.type}
                         style={{display: (this.state.isExit) ? 'flex' : 'none'}}
                         onMouseEnter={() => {
                             this.muiAnimation(i + 1, false, false)
                         }}
                         onMouseLeave={() => {
                             this.muiAnimation(i + 1, false, true)
                         }}>
                        <img id={`exit${i + 1}`} src={`../assets/${item.name}`}/>
                        <span>{item.type} out</span>
                    </div>
                </LazyLoad>)

        });
    }

    rendersubMenu() {
        return _.map(this.state.subMenuList, (button, i) => {
            return (
                <div className={`sub-menu ${this.state.subMenuNum === i ? 'sub-menu-is-clicked' : ''}`}
                     key={button.title}
                     onClick={() => {
                         this.displayAnimationGroup(i)
                     }}>{button.title}</div>)

        });
    }

    renderAnimation() {
        return _.map(this.props.animations, (animation) => {
            return <div className="fmb-menu" style={{"margin": "0px"}} key={animation.id}
                        onClick={() => this.props.selectAnimation(animation)}>
                <AnimationPanelItem animation={animation}/></div>
        })
    }

    startMulticoloring(isMulticoloring) {
        this.setState({'isMulticoloring': isMulticoloring});
    }
    startDustAnimation(isOver, type){
        //console.log('startDustAnimation')
        if(isOver){
            $(`#dust-${type}`).trigger('click');
            this.setState({[`dust${type}Static`] : false})
        }else{
            $("#three-exit").find('canvas').remove();
            this.setState({[`dust${type}Static`] : true})
        }
       //Animations.dustAnimation()
    }
    startTheotherhalf(isTheotherhalf) {
        this.setState({'isTheotherhalf': isTheotherhalf});
    }

    getCurrentAnimation(id) {
        this.setState({'isAnimationHasBeenClick': true})
    }
    closeCurrentAnimationBox(){
        this.setState({'isAnimationHasBeenClick': false})
    }
    displayAnimationGroup(subMenuNum){
        this.setState({
            subMenuNum: subMenuNum
        })
        let group = subMenuNum+1
        console.log('group', group)
        switch (group) {
            case ENTRY:
                this.setState({'isEntry': true, 'isEmphasis': false, 'isExit': false})
                break;
            case EMPHASIS:
                this.setState({'isEntry': false, 'isEmphasis': true, 'isExit': false})
                break;
            case EXIT:
                this.setState({'isEntry': false, 'isEmphasis': false, 'isExit': true})
                break;
            default:
                console.log('Something wrong')
        }
    }
    render() {

        return (
            <React.Fragment>
                {/*<div className="big-anim-box" >
                    <div className="anim-container">
                        {this.renderAnimation()}
                    </div>
                </div>*/}
                <div className={"anim-menu"}>
                    {this.rendersubMenu()}
                </div>
                <div className={"anim-menu"}
                     style={{display: (this.state.isAnimationHasBeenClick) ? 'flex' : 'none'}}>
                    <div className={"anim-input"}>
                        <div>
                            <select className="line-input">
                                <option value="volvo">1</option>
                                <option value="saab">2</option>
                                <option value="opel">3</option>
                                <option value="audi">3</option>
                            </select>
                        </div>
                        <span>Order</span>{/*Z-index*/}
                    </div>
                    <div className={"anim-input"}>
                        <div>
                            <input className="line-input" defaultValue='0'/>
                        </div>
                        <span>Duration</span>
                    </div>
                    <div className={"anim-input"}>
                        <div>
                            <input className="line-input" defaultValue='0' type={"checkbox"}/>
                        </div>
                        <span>Loop</span>
                    </div>
                    <span className={"close-anim-box"} onClick={() => this.closeCurrentAnimationBox()}>
                        x
                    </span>
                </div>
                <div className={"anim-menu"} style={{display: (this.state.isAnimationHasBeenClick) ? 'flex' : 'none'}}>
                    <div className={"sub-edit"}>
                        <img src="../assets/kangoroo_astronaut.png"/>
                        {/*<span>Appear</span>*/}
                    </div>
                    <div className={"sub-edit-container"}>
                        <p>Slide</p>
                        <div className={"sub-edit"}>
                            <div className={"anim-input"}>
                                <div>
                                    <select className="line-input">
                                        <option value="volvo">Right</option>
                                        <option value="saab">Left</option>
                                        <option value="opel">Up</option>
                                        <option value="audi">Down</option>
                                    </select>
                                </div>
                                <span>Direction</span>
                            </div>
                            <div className={"anim-input"}>
                                <div>
                                    <select className="line-input">
                                        <option value="volvo">Linear</option>
                                        <option value="saab">Ease</option>
                                        <option value="opel">Bounce</option>
                                    </select>
                                </div>
                                <span>Easing</span>
                            </div>
                            <div className={"anim-input"}>
                                <div>
                                    <select className="line-input">
                                        <option value="volvo">Normal</option>
                                        <option value="saab">Slow</option>
                                        <option value="opel">Fast</option>
                                    </select>
                                </div>
                                <span>Speed</span>
                            </div>
                            <div className={"anim-input"}>
                                <div>
                                    <select className="line-input">
                                        <option value="volvo">25%</option>
                                        <option value="saab">50%</option>
                                        <option value="opel">75%</option>
                                        <option value="opel">100%</option>
                                    </select>
                                </div>
                                <span>Amount</span>
                            </div>
                            <div className={"anim-input"}>
                                <div>
                                    <input className="line-input" defaultValue='0' type={"checkbox"}/>
                                </div>
                                <span>fade</span>
                            </div>
                            <div className={"anim-input"}>
                                <div>
                                    <input className="line-input" defaultValue='0s'/>
                                </div>
                                <span>delay</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"search"}>
                    <div className="form-inline">
                        <img src="../assets/search.svg" height="28" width="18"/>
                        <input type="text" placeholder="Search entry animations"/>
                    </div>
                </div>
                <div className={"anim-box-container"}>
                    <div className={"anim-box"}>
                        {this.renderMUIEntryItem()}
                        {this.renderMUIExitItem()}
                        <LazyLoad
                            once={true}
                            placeholder={<img src={"../../assets/LiquidDistortion/img/3.jpg"}/>}>
                        <div className="item"
                             style={{display: (this.state.isEmphasis) ? 'flex' : 'none'}}
                             onMouseEnter={() => {
                                 this.d3Effect(2000)
                             }}
                             onMouseLeave={() => {
                                 this.d3Effect(0)
                             }}>
                            <div className='reflection-container'>
                                <div className='reflection-content'>
                                    <img src="../assets/kangoroo_astronaut.png" alt=""/>
                                </div>
                            </div>
                            <span>3d Effect</span>
                        </div></LazyLoad>
                        <LazyLoad
                            once={true}
                            placeholder={<img src={"../../assets/LiquidDistortion/img/3.jpg"}/>}>
                        <div className="item"
                             style={{display: (this.state.isExit) ? 'flex' : 'none'}}>

                            <div className="split active"
                                 onMouseEnter={() => {
                                     this.exitTilesAnim()
                                 }}
                                 onMouseLeave={() => {
                                     this.exitTilesAnim()
                                 }}>
                                <img src="https://github.com/supahfunk/supah-codepen/blob/master/stcz-1.png?raw=true"/>
                            </div>
                            <span>Tiles splitting</span>
                        </div></LazyLoad>
                        <LazyLoad
                            once={true}
                            placeholder={<img src={"../../assets/LiquidDistortion/img/3.jpg"}/>}>
                        <div className="item"
                             style={{display: (this.state.isEmphasis) ? 'flex' : 'none'}}
                             onMouseEnter={() => {
                                 this.startMulticoloring(true)
                             }}
                             onMouseLeave={() => {
                                 this.startMulticoloring(false)
                             }}>
                            <img
                                className={'multico-src-img'}
                                style={{display: (!this.state.isMulticoloring) ? 'initial' : 'none'}}
                                src="https://images.unsplash.com/photo-1547157284-6d35248ba7e7?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
                                alt=""/>
                            <div className="multicoloring"
                                 style={{display: (this.state.isMulticoloring) ? 'table' : 'none'}}>
                                <div className="p a"/>
                                <div className="p b"/>
                                <div className="p c"/>
                                <div className="p d"/>
                            </div>
                            <span>Multicoloring</span>
                        </div></LazyLoad>
                        <LazyLoad
                            once={true}
                            placeholder={<img src={"../../assets/LiquidDistortion/img/3.jpg"}/>}>
                        <div className="item"
                             style={{display: (this.state.isEmphasis) ? 'flex' : 'none'}}
                             onMouseEnter={() => {
                                 this.startTheotherhalf(true)
                             }}
                             onMouseLeave={() => {
                                 this.startTheotherhalf(false)
                             }}>
                            <img
                                className={'theotherhalf-img'}
                                style={{display: (!this.state.isTheotherhalf) ? 'initial' : 'none'}}
                                src="https://images.unsplash.com/photo-1496523720220-b62e33cf3161?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e282d7307d28a70e12f3b40800d04abd&auto=format&fit=crop&w=2089&q=80"
                                alt=""/>
                            <div
                                style={{display: (this.state.isTheotherhalf) ? 'grid' : 'none'}}
                                className="theotherhalf"><a className="a" href="" target="_blank"></a></div>
                            <span>The other Half</span>
                        </div></LazyLoad>
                        <LazyLoad
                            once={true}
                            placeholder={<img src={"../../assets/LiquidDistortion/img/3.jpg"}/>}>
                        <div className="item"
                             style={{display: (this.state.isEmphasis) ? 'flex' : 'none'}}>
                            <div id="death-redemption">
                                <div id="normal"></div>
                                <div id="invert"></div>
                            </div>
                            <span>Redemption</span>
                        </div></LazyLoad>
                        <LazyLoad
                            once={true}
                            placeholder={<img src={"../../assets/LiquidDistortion/img/3.jpg"}/>}>
                        <div className="item"
                             style={{display: (this.state.isEmphasis) ? 'flex' : 'none'}}>
                            <figure className="snip0023">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample26.jpg"
                                     alt="sample26"/>
                                <div>
                                    <div className="curl"></div>
                                    <a href="#"></a>
                                </div>
                            </figure>
                            <span>Book page</span>
                        </div></LazyLoad>
                        <LazyLoad
                            once={true}
                            placeholder={<img src={"../../assets/LiquidDistortion/img/3.jpg"}/>}>
                        <div className="item"
                             style={{display: (this.state.isEmphasis) ? 'flex' : 'none'}}>
                            <figure className="snip1190">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample64.jpg"
                                     alt="sample64"/>
                            </figure>
                            <span>Amazon night</span>
                        </div></LazyLoad>
                        <LazyLoad
                            once={true}
                            placeholder={<img src={"../../assets/LiquidDistortion/img/3.jpg"}/>}>
                        <div className="item"
                             style={{display: (this.state.isExit) ? 'flex' : 'none'}}>
                            <figure className="snip1256">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample42.jpg"
                                     alt="sample42"/>
                            </figure>
                            <span>Fall</span>
                        </div></LazyLoad>
                        <LazyLoad
                            once={true}
                            placeholder={<img src={"../../assets/LiquidDistortion/img/3.jpg"}/>}>
                        <div className="item"
                             style={{display: (this.state.isEmphasis) ? 'flex' : 'none'}}>
                            <figure className="snip1295"><img
                                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample67.jpg" alt="sample67"/>
                                <div className="border one">
                                    <div></div>
                                </div>
                                <div className="border two">
                                    <div></div>
                                </div>
                                <a href="#"></a>
                            </figure>
                            <span>Double Contour</span>
                        </div></LazyLoad>
                        <LazyLoad
                            once={true}
                            placeholder={<img src={"../../assets/LiquidDistortion/img/3.jpg"}/>}>
                        <div className="item"
                             style={{display: (this.state.isEmphasis) ? 'flex' : 'none'}}>
                            <div className="img-pulsing">
                                <div><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/451895/009.jpg"/></div>
                            </div>
                            <span>Pulsing</span>
                        </div></LazyLoad>
                        <LazyLoad
                            once={true}
                            placeholder={<img src={"../../assets/LiquidDistortion/img/3.jpg"}/>}>
                        <div className="item"
                             style={{display: (this.state.isEmphasis) ? 'flex' : 'none'}}>
                            <div className="romantic-zoom">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/41114/5.png" alt="sky"
                                     className="pic5"/>
                            </div>
                            <span>Romantic zoom</span>
                        </div></LazyLoad>
                        <LazyLoad
                            once={true}
                            placeholder={<img src={"../../assets/LiquidDistortion/img/3.jpg"}/>}>
                        <div className="item"
                             style={{display: (this.state.isExit) ? 'flex' : 'none'}}>
                            <div className="split-img">
                                <div className="img"><span></span><span></span><span></span><span></span></div>
                            </div>
                            <span>Split image</span>
                        </div></LazyLoad>

                        <div className="item"
                             style={{display: (this.state.isExit) ? 'flex' : 'none'}}>
                            <div id="shattering"/>
                            <span>Shattering</span>
                        </div>
                        <div className="item"
                             style={{display: (this.state.isEntry) ? 'flex' : 'none'}}
                             onMouseEnter={() => {
                                 this.startDustAnimation(true, 'entrance')
                             }}
                             onMouseLeave={() => {
                                 this.startDustAnimation(false, 'entrance')
                             }}>
                            <div className={"dust-image"}
                                 style={{display: (this.state.dustentranceStatic) ? 'initial' : 'none'}}>
                                <img src="../assets/spring.png" alt=""/>
                            </div>
                            <div id="three-entrance"
                                 style={{display: (!this.state.dustentranceStatic) ? 'initial' : 'none'}}/>
                            <div id={"dust-entrance"}/>
                            <span>Dust entrance</span>
                        </div>
                        <div className="item"
                             style={{display: (this.state.isExit) ? 'flex' : 'none'}}
                             onMouseEnter={() => {
                                 this.startDustAnimation(true, 'exit')
                             }}
                             onMouseLeave={() => {
                                 this.startDustAnimation(false, 'exit')
                             }}>
                            <div className={"dust-image"}
                                 style={{display: (this.state.dustexitStatic) ? 'initial' : 'none'}}>
                                <img src="../assets/winter.png" alt=""/>
                            </div>
                            <div id="three-exit"
                                 style={{display: (!this.state.dustexitStatic) ? 'initial' : 'none'}}/>
                            <div id={"dust-exit"}/>
                            <span>Dust Exit</span>
                        </div>
                        <div className="item"
                             style={{display: (this.state.isEmphasis) ? 'flex' : 'none'}}
                             onMouseEnter={() => {
                                 this.startDustAnimation(true, 'emphasis')
                             }}
                             onMouseLeave={() => {
                                 this.startDustAnimation(false, 'emphasis')
                             }}>
                            <div className={"dust-image"}
                                 style={{display: (this.state.dustemphasisStatic) ? 'initial' : 'none'}}>
                                <img src="../assets/spring.png" alt=""/>
                            </div>
                            <div id="three-emphasis"
                                 style={{display: (!this.state.dustemphasisStatic) ? 'initial' : 'none'}}/>
                            <div id={"dust-emphasis"}/>
                            <span>Dust Emphasis</span>
                        </div>
                        <div className="item"
                             style={{display: (this.state.isEmphasis) ? 'flex' : 'none'}}>
                            <canvas className="p-canvas-webgl" id="canvas-webgl"/>
                            <span>GLSL Glitch</span>
                        </div>
                        <LazyLoad
                            once={true}
                            placeholder={<img src={"../../assets/LiquidDistortion/img/3.jpg"}/>}>
                        <div className="item"
                             style={{display: (this.state.isEmphasis) ? 'flex' : 'none'}}>
                            <div className="assembly" style={{"--n": "8"}}>
                                <div className="slice" style={{"--i": "0"}}/>
                                <div className="slice" style={{"--i": "1"}}/>
                                <div className="slice" style={{"--i": "2"}}/>
                                <div className="slice" style={{"--i": "3"}}/>
                                <div className="slice" style={{"--i": "4"}}/>
                                <div className="slice" style={{"--i": "5"}}/>
                                <div className="slice" style={{"--i": "6"}}/>
                                <div className="slice" style={{"--i": "7"}}/>
                                <div className="slice" style={{"--i": "8"}}/>
                                <div className="slice" style={{"--i": "9"}}/>
                                <div className="slice" style={{"--i": "10"}}/>
                                <div className="slice" style={{"--i": "11"}}/>
                                <div className="slice" style={{"--i": "12"}}/>
                                <div className="slice" style={{"--i": "13"}}/>
                                <div className="slice" style={{"--i": "14"}}/>
                                <div className="slice" style={{"--i": "15"}}/>
                            </div>
                            <span>Slice</span>
                        </div>
                        </LazyLoad>

                        <div className="item"
                             style={{display: (this.state.isEmphasis) ? 'flex' : 'none'}}>
                            <div id="liquiddistorsion-container">
                                <div className="slide-wrapper">
                                    <div className="slide-item">
                                        <img
                                            src="../../assets/LiquidDistortion/img/3.jpg"
                                            className="slide-item__image"/>
                                    </div>
                                </div>
                            </div>
                            <span>Liquid distortion</span>
                        </div>
                    </div>
                </div>
                {/*<div className="big-anim-box">
                    <div className="anim-container">
                        <div className={"anim-block"}>
                            <div>Z-index : </div>
                            <input className="line-input" defaultValue='0'/>
                        </div>
                        <div className={"big-menu-box"}>
                            <div className="thumbs anim-btn-type">
                                <div className="fmb-menu">
                                    <div className="left-btn me-btn2">Entry</div>
                                    <div className="middle-btn me-btn2">Emphasis</div>
                                    <div className="right-btn me-btn2" >Exit</div>
                                </div>
                            </div>
                        </div>
                        <div className={"anim-block"}>
                            <div>Duration : </div>
                            <input className="line-input" defaultValue='0'/>
                        </div>
                        <div className={"anim-block"}>
                            <div>Loop : </div>
                            <input className="line-input" defaultValue='0' type={"checkbox"}/>
                        </div>
                    </div>
                </div>*/}
            </React.Fragment>
        )
    }


}

function mapStateToProps(state) {
    return {
        animations: state.animations
    }
}


export default connect(mapStateToProps, {fetchAnimation})(AnimationPanel);
