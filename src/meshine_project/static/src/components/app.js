import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import AnimationPanel from '../containers/animation_panel';
import AnimationDetail from '../containers/animation-detail';
import MeFabric from '../components/me_fabric';
import QuestionTag from '../containers/question_tag';
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
                        <div className="col mt-1 pt-2 bg-inverse animation-panel">
                            <AnimationPanel/>
                        </div>
                        <div id="card-container" className="col">
                            <MeFabric/>
                        </div>
                        <div className="col  bg-inverse" id="design-panel">
                            <AnimationDetail/></div>
                    </div>
                </main>
                <footer >
                    <nav className="navbar navbar-toggleable-md navbar-inverse fixed-bottom bg-inverse">

                    <div className="navbar navbar-toggleable-md navbar-inverse fixed-bottom bg-inverse">


                        <div className="container-fluid">
                            <div className="row " >
                                <div className="col" >
                                    <div className="row">
                                        <div id="undo"  className="col-md-2 col-sm-6 col-12" title="Annuler la dernière modification" >
                                            <i className="fa fa-undo " aria-hidden="true"></i>
                                        </div>
                                        <div  id="redo" title="Rétablir la dernière modification" className="col-md-2 col-sm-6 col-12" >
                                            <span><i className="fa fa-repeat" aria-hidden="true"></i></span>
                                        </div>
                                        <div id="zoom" className="col-md-6 col-sm-6 col-12" title="Zoomer l'affichage du Summary">
                                            <button className="btn nav-link" >100%</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col" id="screens">
                                    <div className="row">
                                        <div id="cover-screen" className="col-md-4 col-sm-12 col-12" >
                                            <img src="../assets/cover_screen.svg" title="Customizer le slide de début"/></div>
                                        <div id="screen" className="col-md-4 col-sm-12 col-12">
                                            <img src="../assets/screen.svg" title="Changer de slide"/></div>
                                        <div id="ending-screen" className="col-md-4 col-sm-12 col-12">
                                            <img src="../assets/ending_screen.svg" alt="Customizer le slide de fin"/></div>
                                    </div>
                                </div>
                                <div className="col" id="multimedia">
                                    <div className="row">
                                        <div id="image-gallery" className="col-md-4 col-sm-12 col-12">
                                            <img src="../assets/image_gallery.svg" title="Choisir une image et ajouter à ce Summary"/></div>
                                        <div id="audio-gallery" className="col-md-4 col-sm-12 col-12">
                                            <img src="../assets/audio_gallery.svg" title="Choisir une piste et ajouter à ce Summary"/></div>
                                        <div id="video-gallery" className="col-md-4 col-sm-12 col-12">
                                            <img src="../assets/video_gallery.svg" title="Choisir une vidéo et ajouter à ce Summary"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col" id="graphics">
                                    <div className="row">
                                        <div id="text" className="col-md-3 col-sm-6 col-12">
                                            <img src="../assets/text.svg" title="Ajouter une zone de texte"/></div>
                                        <div id="diagram" className="col-md-3 col-sm-6 col-12" >
                                            <img src="../assets/diagram.svg" title="Choisir un graphique à ajouter"/></div>
                                        <div id="table" className="col-md-3 col-sm-6 col-12">
                                            <img src="../assets/table.svg" title="Choisir un tableau à ajouter"/></div>
                                        <div id="figure" className="col-md-3 col-sm-6 col-12" >
                                            <img src="../assets/figure.svg" title="Choisir une forme ou une ligne"/></div>
                                    </div>
                                </div>
                                <div className="col" id="magic">
                                    <div className="row">
                                        <div id="template" className="col-md-3 col-sm-6 col-12" >
                                            <img src="../assets/template.svg" title="Découvrir et inspirer vous de modèle préfaits"/></div>
                                        <div id="background" className="col-md-3 col-sm-6 col-12">
                                            <img src="../assets/background.svg" alt="Customizer l'arrière plan"/></div>
                                        <div id="animation" className="col-md-3 col-sm-6 col-12" >
                                            <img src="../assets/animation.svg" alt="Afficher ou masquer les options d'animation"/></div>
                                        <div id="format" className="col-md-3 col-sm-6 col-12">
                                            <img src="../assets/format.svg" alt="Afficher ou masquer les options de format de styles"/></div>
                                    </div>
                                </div>
                                <div className="col" id="action" >

                                    <div id="me-tool" className="col-md-2 col-sm-6 col-12"  title="Enregistrer ce Summary" >
                                        <img src="../assets/tool.svg" alt="Profil et paramètres"/>
                                    </div>

                                    <button  id="play"  type="button" className="btn btn-sm">Lire</button>
                                    <button id="publish"  type="button" className="btn btn-sm">Publier</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </nav>
                </footer>
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