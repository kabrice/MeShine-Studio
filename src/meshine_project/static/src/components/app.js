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

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }
    componentDidMount(){
        this.props.notRequestingAPI();
        const {id} = this.props.match.params;
        this.props.fetchSummary(id);
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
                </header>
                <main role="main" className="container page-header">
                    <div className="row mt-1">
                        <div className="col  bg-inverse" id="design-panel">
                            <AnimationDetail/></div>
                        <div id="card-container" className="col">
                            <MeFabric/>
                        </div>
                        <div className="col mt-1 pt-2 bg-inverse animation-panel">
                            <AnimationPanel/>
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