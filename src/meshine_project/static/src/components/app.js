import _ from 'lodash';
import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import AnimationPanel from '../containers/AnimationPanel';
import AnimationDetail from '../containers/AnimationDetail';
import MeFabric from './MeFabric';
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

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            hideSideMenu: false,
            sideButtons: [  {'title': 'Templates', 'value': 'option_template'},
                            {'title': 'Animations', 'value': 'option_animation'},
                            {'title': 'Images', 'value': 'option_image'},
                            {'title': 'Videos', 'value': 'option_video'},
                            {'title': 'Music', 'value': 'option_music'},
                            {'title': 'Elements', 'value': 'option_element'},
                            {'title': 'Text', 'value': 'option_text'},
                            {'title': 'Background', 'value': 'option_background'}],
            sideButtonsNum: 0,
            counter:0
        }
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
    initAnimation = () =>{

        // console.log('initAnimation', this.state.counter)
        // if(this.state.counter<=2){
            Animations.splitForTilesAnimations();
            // sessionStorage.dustAnimationStatic = true
            /*$(`#dust-entrance`).trigger('click');
            $(`#dust-exit`).trigger('click');
            $(`#dust-emphasis`).trigger('click');*/
            /*let i = this.state.counter + 1;*/
            //console.log('iiiii', i)
           // this.setState({counter: i})
        // }
        //Animations.dustAnimation()
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
                    <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse ">
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                                data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <Link className="navbar-brand" href="#" data-placement="right" data-animation="false" to="/"
                           data-toggle="tooltip" title="Aller à Mes Summaries">
                            <img src="../assets/summaries-studio-logo.svg" alt="Aller à Mes Summaries"/></Link>
                            <QuestionTag/>
                    </nav>
                    <nav className={"editor-menu navbar navbar-toggleable-md navbar-inverse bg-inverse "}>
                        <div className="editor-item">
                            <button></button>
                        </div>
                        <div className="editor-item">
                            <button><i className="fa fa-undo " aria-hidden="true"></i></button>
                            <button><i className="fa fa-repeat" aria-hidden="true"></i></button>
                        </div>
                        <div className="editor-item"></div>
                        <div className="editor-item">
                            <button>
                                <img src="../assets/anim_menu_btn.svg"
                                     height={"20px"}
                                     width={"20px"}
                                     title={"Animate"}/>
                            </button>
                            <button>
                                <img src="../assets/anim_order_btn.svg"
                                     height={"20px"}
                                     width={"20px"}
                                     title={"Animation list"}/>
                            </button>
                        </div>
                    </nav>
                </header>
                <main role="main" className="container page-header"
                      onMouseEnter={()=>{this.initAnimation()}}
                      /*onScroll={()=>{this.initAnimation()}}*/>
                    <div className="row ">
                        <div className="col  bg-inverse" id="design-panel" >
                            <AnimationDetail/>
                            <div className="design-bar"/>
                        </div>
                        <div className="col" id="card-container" >
                            <MeFabric/>
                        </div>
                        <div className="col  pt-2 bg-inverse animation-panel fade-in"
                             style={ { display: (!this.state.hideSideMenu) ? 'block' : 'none' } }>
                            <button className={'hide-side-menu'} onClick={this.hideSideMenu}>
                                <img src="../assets/arrow_to_hide.svg"
                                     height={"10px"}
                                     width={"10px"}
                                     title="Hide"/>
                            </button>
                            <AnimationPanel/>
                        </div>
                        <div className={"sidebar-menu col-1"}>
                            {this.renderSideButtons()}
                            <div className={"remaining-block"}></div>
                        </div>
                    </div>
                </main>
                <Player/>
                <FooterMenu/>
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