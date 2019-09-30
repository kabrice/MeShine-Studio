import React, { Component } from 'react';
import {connect} from 'react-redux';
import HomeMenu from './HomeMenu';
import ProjectsContainer from "./ProjectContainer";
import Loader from 'react-loader-advanced';
import { PulseLoader } from 'react-spinners';
import {notRequestingAPI} from "../actions/index";

class Home extends Component{

    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }

    componentDidMount(){
        this.props.notRequestingAPI();
    }


    render(){
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
        console.log("requesting", requesting);
        return (
            <Loader show={requesting} message={spinner}>
                <header>
                    <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse ">
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                                data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <a className="navbar-brand" href="#" data-placement="right" data-animation="false"
                           data-toggle="tooltip" title="Aller à Mes Summaries">
                            <img src="../assets/summaries-studio-logo.svg" alt="Aller à Mes Summaries"/></a>
                        <HomeMenu/>
                    </nav>
                </header>
                <ProjectsContainer/>
            </Loader>
        )
    }
}

function mapStateToProps(state) {
    return {
        requestingAPI: state.requestingAPI
    };
}

export default connect(mapStateToProps, {notRequestingAPI})(Home);