import React, { Component } from 'react';
import HomeMenu from './home-menu';
import ProjectsContainer from "./projects-container";


class Home extends Component{
    render(){
        return (
            <React.Fragment>
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
            </React.Fragment>
        )
    }
}

export default Home;