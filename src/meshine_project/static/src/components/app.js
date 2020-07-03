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
            sideButtonsNum: 0,
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
                <img src={`../assets/${button.value}.svg`}
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
                    <MyMenu/>
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
                            <MyCanvas ref = {this._mycanvas}/>
                            {/*<DragBox/>*/}
                        </div>
                        <div className="col  pt-2 bg-inverse animation-panel fade-in"
                             id={"animation-panel"}
                             style={ { display: (!this.state.hideSideMenu) ? 'block' : 'none' } }>
                            <button className={'hide-side-menu'} onClick={this.hideSideMenu}>
                                <img src="../assets/arrow_to_hide.svg"
                                     height={"10px"}
                                     width={"10px"}
                                     title="Hide"/>
                            </button>
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
                                <MyBackground/>
                            </div>
                            <div style={{display: (this.state.sideButtonsNum === 7) ? 'block' : 'none'}}>
                                <AnimationPanel/>
                            </div>
                            {/*<AnimationPanel/>*/}

                        </div>
                        <div className={"sidebar-menu col-1"}>
                            {this.renderSideButtons()}
                            <div className={"remaining-block"}></div>
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