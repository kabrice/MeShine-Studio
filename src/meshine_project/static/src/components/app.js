import _ from 'lodash';
import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
//import AnimationPanel from '../containers/AnimationPanel';
import AnimationDetail from '../containers/AnimationDetail';
//import MeFabric from './MeFabric';
import QuestionTag from '../containers/QuestionTag';
import FooterMenu from './FooterMenu';
import Player from './Player';
import {Link} from 'react-router-dom';
import { Route , withRouter} from 'react-router-dom';
import {fetchSummary, notRequestingAPI} from "../actions/index";
import Loader from 'react-loader-advanced';
import { PulseLoader } from 'react-spinners';
import {Utils} from '../helpers';
import FooterMenuBox from "./FooterMenuBox";
import {Animations} from '../helpers';
import MyCanvas from './MyCanvas';
import MyTemplate from "./MyTemplate";
import MyImage from "./MyImage";
import MyElement from "./MyElement";
import MyVideo from "./MyVideo";
import MyText from "./MyText";
import MyBackground from "./MyBackground";
import MyMusic from "./MyMusic";
import AnimationPanel from "./AnimationPanel";
import MyTimeline from "./MyTimeline"
import MyHeader from "./MyHeader";
import MyMenu from "./MyMenu";
import MyMediaItemList from "./MyMediaItemList";
import DragBox from "./DragBox";
import MyMediaCustomization from "./MyMediaCustomization";
import MyColorPicker from "./MyColorPicker"


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            hideSideMenu: false,
            sideButtons: [  {'title': 'Templates', 'value': 'option_template'},
                            {'title': 'Images', 'value': 'option_image'},
                            {'title': 'Videos', 'value': 'option_video'},
                            {'title': 'Music', 'value': 'option_music'},
                            {'title': 'Elements', 'value': 'option_element'},
                            {'title': 'Text', 'value': 'option_text'},
                            {'title': 'Background', 'value': 'option_background'},
                            {'title': 'Uploads', 'value': 'option_upload'}],
            sideButtonsNum: -1,
            counter:0,
            gap: 10,
            objIncrement:1
        }
        this._mycanvas = React.createRef();
    }

    hideSideMenu = () => {
        this.setState({
            hideSideMenu: true
        })
    }

    componentDidMount(){
        this.props.notRequestingAPI();
        const {id} = this.props.match.params;
        this.props.fetchSummary(id);
        Utils.leftToRightResizeble('#design-panel');

        //0. Todo: Just for demo
        var dragTimer;
        $('.animation-panel').on('dragover', function(e) {
            var dt = e.originalEvent.dataTransfer;
            if (dt.types && (dt.types.indexOf ? dt.types.indexOf('Files') != -1 : dt.types.contains('Files'))) {
                $(".eE9U7Q").show();
                window.clearTimeout(dragTimer);
            }
        });
        $('.animation-panel').on('dragleave', function(e) {
            dragTimer = window.setTimeout(function() {
                $(".eE9U7Q").hide();
            }, 25);
        });
        //1. Todo: Just for demo
    }
    displaySideMenu = (sideButtonsNum) => {
        console.log('sideButtonsNum', sideButtonsNum);
        this.setState({
            hideSideMenu: false,
            sideButtonsNum: sideButtonsNum
        })
    }
    renderSideButtons(){
        return  _.map(this.state.sideButtons, (button, i) => {
            return (<div className={`option ${!this.state.hideSideMenu && this.state.sideButtonsNum===i ? 'option-is-clicked' : ''}`}
                 key={button.title}
                 onClick={()=>{this.displaySideMenu(i)}}>
                <img src={`../assets/media/${button.value}.svg`}
                     height={"24px"}
                     width={"24px"}
                     title={`"${button.title}"`}/>
                <span>{button.title}</span>
            </div>)

        });
    }

    handleClickImage = (value) => {
        console.log('handleClickImage', value)
        let objInc = this.state.objIncrement
        objInc++
        let gap = this.state.gap

        let transformX = 170 + gap
        let transformY = 445+ gap

        gap = gap+10
        this.setState({objIncrement: objInc, gap:gap })
        this._mycanvas.current.addDrawingObject(
            {id: objInc, type: 'img', src:value,
                 style:`display: block; transform: translate(${transformX}px, ${transformY}px)`, width:720}
        )
    }
    handleClickDemoText = () => {
        this.setState({sideButtonsNum: 6})
    }

    handleClickSquare = () => {
        let objInc = this.state.objIncrement
        objInc++
        let gap = this.state.gap

        let transformX = 215 + gap
        let transformY = 680+ gap

        gap = gap+10
        this.setState({objIncrement: objInc, gap:gap })
        this._mycanvas.current.addDrawingObject(
            {id: objInc, type: 'rect',
                style:`width: 525px; height: 400px; background: #1890ff; display: block; transform: translate(${transformX}px, ${transformY}px)`, width:720}
        )
    }
    handleClickCircle = () => {
        let objInc = this.state.objIncrement
        objInc++
        let gap = this.state.gap

        let transformX = 215 + gap
        let transformY = 680+ gap

        gap = gap+10
        this.setState({objIncrement: objInc, gap:gap })
        this._mycanvas.current.addDrawingObject(
            {id: objInc, type: 'rect',
                style:`border-radius: 100%; width: 525px; height: 525px; background: #1890ff; display: block; transform: translate(${transformX}px, ${transformY}px)`, width:720}
        )
    }
    render() {

        let summary = this.props.summary;

        console.log("summary", summary);

        const style = {
            spinnerStyle: {
                "display": "flex ",
                "justifyContent": "center ",
                "alignItems": "center ",
                "width": "100% "
            }
        };
        const spinner =   <div style={style.spinnerStyle}>
                            <PulseLoader color={'#FFFFFF'} loading={this.state.loading}/>
                          </div>;
        let requesting = this.props.requestingAPI.isRequestingAPI;
        if(requesting === undefined) {
            requesting = false;
        }
        console.log("requesting App", requesting);

        return (

            <Loader show={requesting} message={spinner}>
                <header>
                    <MyHeader/>
                    <MyMenu addSquare={this.handleClickSquare}
                            addCircle={this.handleClickCircle}/>
                    <MyMediaItemList/>
                </header>
                <main role="main" className="container page-header"
                      //onMouseEnter={()=>{this.initAnimation()}}
                      /*onScroll={()=>{this.initAnimation()}}*/>
                    <div className="row ">
                        <div className="col  bg-inverse" id="design-panel" >
                            <AnimationDetail/>
                            <div className="design-bar"/>
                        </div>
                        <div className="col" id="card-container" >
                            {/*<MeFabric/>*/}
                            <MyCanvas ref = {this._mycanvas} displayTextEdit={this.handleClickDemoText}/>
                            {/*<DragBox/>*/}
                        </div>
                        <div className="col  pt-2 bg-inverse animation-panel fade-in"
                             id={"animation-panel"}
                             style={ { display: (!this.state.hideSideMenu) ? 'block' : 'none' } }>
                            <button className={'hide-side-menu'} onClick={this.hideSideMenu} style={{display: (this.state.sideButtonsNum !== -1) ? 'block' : 'none'}}>
                                <img src="../assets/media/arrow_to_hide.svg"
                                     height={"10px"}
                                     width={"10px"}
                                     title="Hide"/>
                            </button>
                            <div style={{display: (this.state.sideButtonsNum === -1) ? 'block' : 'none'}}>{/*Todo: Customize it later, part of the demo*/}
                                <MyMediaCustomization />
                            </div>
                            <div style={{display: (this.state.sideButtonsNum === 0) ? 'block' : 'none'}}>
                                <MyTemplate />
                            </div>
                            <div style={{display: (this.state.sideButtonsNum === 1) ? 'block' : 'none'}}>
                                <MyImage onSelectImage={this.handleClickImage}/>
                            </div>
                            <div style={{display: (this.state.sideButtonsNum === 2) ? 'block' : 'none'}}>
                                <MyVideo/>
                            </div>
                            <div style={{display: (this.state.sideButtonsNum === 3) ? 'block' : 'none'}}>
                                <MyMusic/>
                            </div>
                            <div style={{display: (this.state.sideButtonsNum === 4) ? 'block' : 'none'}}>
                                <MyElement/>
                            </div>
                            <div style={{display: (this.state.sideButtonsNum === 5) ? 'block' : 'none'}}>
                                <MyText/>
                            </div>
                            <div style={{display: (this.state.sideButtonsNum === 6) ? 'block' : 'none'}}>
                                {/*<MyBackground/> */}<MyMediaCustomization />
                            </div>
                            <div style={{display: (this.state.sideButtonsNum === 7) ? 'block' : 'none'}}>
                                <AnimationPanel/>
                            </div>
                            <MyColorPicker/>{/*Todo: Just for the demo*/}
                            <div className="eE9U7Q" style={{'display' : 'none'}}>
                                <div className="QyTmpQ">
                                    <span aria-hidden="true" className="AY5uHA uEuSRg">
                                      <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          xmlnsXlink="http://www.w3.org/1999/xlink"
                                          width={32}
                                          height={32}
                                          viewBox="0 0 32 32"
                                      >
                                        <defs>
                                          <path
                                              id="_173176357__a"
                                              d="M17 18.41v9.92a1 1 0 1 1-2 0v-9.87l-2.35 2.35a1 1 0 0 1-1.41-1.42l3.13-3.13a2.33 2.33 0 0 1 3.3 0l3.14 3.13a1 1 0 1 1-1.42 1.42L17 18.4zM12 24v2H9v-.02a7.5 7.5 0 0 1-2.32-14.43A8 8 0 0 1 22.6 11a7.5 7.5 0 0 1 .4 14.98V26h-3v-2h2.5a5.5 5.5 0 1 0-2-10.63A6.02 6.02 0 0 0 14.68 6a6 6 0 0 0-5.91 7.05A5.5 5.5 0 0 0 9.66 24H12z"
                                          />
                                        </defs>
                                        <g fill="none" fillRule="evenodd">
                                          <g opacity=".2">
                                            <mask id="_173176357__b" fill="#fff">
                                              <use xlinkHref="#_173176357__a" />
                                            </mask>
                                            <g fill="currentColor" mask="url(#_173176357__b)">
                                              <path d="M0 0h31.03v31.03H0z" />
                                            </g>
                                          </g>
                                          <path
                                              fill="currentColor"
                                              fillRule="nonzero"
                                              d="M17 18.5v10.04c0 .53-.45.96-1 .96s-1-.43-1-.96V18.5l-2.3 2.3a1 1 0 0 1-1.4-1.42l3.29-3.3a2 2 0 0 1 2.82 0l3.3 3.3a1 1 0 1 1-1.42 1.41L17 18.5zm3 7.5v-2h2.5a5.5 5.5 0 0 0 0-11c-.12 0-.35.03-.67.08l-1.18.21V12.1c0-3.34-2.7-6.1-6-6.1a6 6 0 0 0-6 6.23l.03.77-.74.22A5.5 5.5 0 0 0 9.5 24H12v2H9.5a7.5 7.5 0 0 1-2.84-14.44A8 8 0 0 1 14.65 4a8.08 8.08 0 0 1 7.93 7 7.5 7.5 0 0 1-.08 15H20z"
                                          />
                                        </g>
                                      </svg>
                                    </span>
                                    <div className="RIh-gw f0J-cg XvGYmg">Drop to upload your file</div>
                                    <div className="_3MqeCA de2usg XvGYmg">
                                        You can upload multiple .PNGs, .JPGs, .SVGs, .MP4s, .MOVs, .GIFs,
                                        .HEIC/HEIFs, .MP3s, .M4As and .WAVs.
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className={"sidebar-menu col-1"}>
                            {this.renderSideButtons()}
                            <div className={"remaining-block"}/>
                        </div>
                    </div>
                </main>
                <Player/>
                {/*<FooterMenu/>*/}
                <MyTimeline/>
            </Loader>)

        ;
    }
}


function mapStateToProps(state) {
    return {summary: state.summary,
            requestingAPI: state.requestingAPI};
}

export default withRouter(reduxForm({
    form: 'NewSummaryProjectForm'
})(
    connect(mapStateToProps, {fetchSummary, notRequestingAPI})(App)
));

//export default withRouter(App);