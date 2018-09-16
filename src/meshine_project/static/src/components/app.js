import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import AnimationPanel from '../containers/animation_panel';
import AnimationDetail from '../containers/animation-detail';
import MeFabric from '../components/me_fabric';
import QuestionTag from '../containers/question_tag';
import FooterMenu from '../components/footer_menu';
import {Link} from 'react-router-dom';
import { Route , withRouter} from 'react-router-dom';
import {fetchSummary} from "../actions/index";

class App extends Component {

    componentDidMount(){
        const {id} = this.props.match.params;
        this.props.fetchSummary(id);
    }

    render() {

        let summary = this.props.summary;

        console.log("summary", summary);

        return (

            <React.Fragment>
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
                <FooterMenu/>
            </React.Fragment>)

        ;
    }
}


function mapStateToProps(state) {
    return {summary: state.summary};
}

export default withRouter(reduxForm({
    form: 'NewSummaryProjectForm'
})(
    connect(mapStateToProps, {fetchSummary})(App)
));

//export default withRouter(App);