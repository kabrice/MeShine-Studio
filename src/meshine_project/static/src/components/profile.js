import  React, { Component } from 'react';

export default class Profile extends Component{


    render(){

        return (
            <React.Fragment>
                <a className="nav-link" href="#" data-placement="left" data-animation="false" data-toggle="tooltip"
                   title="Profil et paramètres" style={{"marginLeft": "-10px"}}>
                    <img src="../assets/edgar.jpeg" className="rounded-circle" height="32" width="32"
                         alt="Profil et paramètres"/>
                    <span>Edgar</span>
                </a>
            </React.Fragment>)
    }


}




