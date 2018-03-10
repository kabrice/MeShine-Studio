import  React, { Component } from 'react';
import Profile from "../components/profile";
import {connect } from 'react-redux';
import {bindActionCreators} from 'redux';


export default class HomeMenu extends Component{


    render(){

        return (
            <React.Fragment>
                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#"><img src="../assets/projects.svg" height="28"
                                                                  width="18" alt="Aller à Mes Summaries"/>Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><img src="../assets/tutorials.svg" height="28"
                                                                  width="18" alt="Aller à Mes Summaries"/>Tutorials</a>
                        </li>
                        <li id="search">
                            <form className="form-inline">
                                <img src="../assets/search.svg" height="28" width="18"/>
                                <input type="text" placeholder="Search Projects ?"/>
                            </form>
                            <span/>
                        </li>
                    </ul>
                    <div className="user-profile">
                        <span className="navbar-nav">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item"><a className="nav-link">Feedbacks</a></li>
                                <li className="nav-item"><a className="nav-link">Developper</a></li>
                                <li className="nav-item"><a className="nav-link">Help</a></li>
                                <li className="nav-item"><a className="nav-link"><img src="../assets/notification.svg" alt="" height="18" width="18" /></a></li>
                            </ul>
                            <Profile/>
                        </span>
                    </div>
                </div>
            </React.Fragment>
        )
    }


}




