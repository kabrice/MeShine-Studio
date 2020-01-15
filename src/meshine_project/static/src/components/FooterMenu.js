import  React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FooterMenuBox from './FooterMenuBox';

export default class FooterMenu extends Component{

    constructor(props){
        super(props);
        this.state = {
            showInputForm: false,
            boxId: 0
        };
    }
    componentDidMount() {
        document.addEventListener('click', this.handleClickOutsideFigure, true);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutsideFigure, true);
    }

    handleClickOutsideFigure = event => {
        const domNode = ReactDOM.findDOMNode(this);
        console.log('domNode', domNode.querySelector('.show'));
        if ((!domNode || !domNode.contains(event.target)) &&
            !domNode.querySelector('.show')) {
            //console.log('domNode', domNode.querySelector('.modal-under-background'));
            this.setState({ boxId: 0});
        }
    }

    handleClickIcon = () => {
        this.setState({boxId: 1});
    };
    handleClickMedia = () => {
        this.setState({boxId: 2});
    };
    handleClickBodymovin = () => {
        this.setState({boxId: 3});
    };
    componentDidUpdate() {
        if (this.state.showInputForm) {
            this.input.focus();
        }
    }
    render(){

        return (
            <footer >
                <nav className="navbar navbar-toggleable-md navbar-inverse fixed-bottom bg-inverse">

                    <div className="navbar navbar-toggleable-md navbar-inverse fixed-bottom bg-inverse">

                        <div className="container-fluid">
                            <div className="row" >
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
                                {/*<canvas hidden='hidden' id='tempCanvas'/>*/}
                                <div className="col" id="multimedia">
                                    <div id="mG2" className="microGallery"/>
                                    <div className="row">
                                        <div id="image-gallery" className="col-md-4 col-sm-12 col-12">
                                            <div style={ { display: (this.state.boxId===3) ? 'block' : 'none' } }  >
                                                <FooterMenuBox type={"bodymovin"}
                                                               onClick={this.handleClickOutsideFigure}/>
                                            </div>
                                            <img src="../assets/bodymovin.svg"
                                                 onClick={this.handleClickBodymovin}
                                                 title="Ajouter une animation via un json Bodymovin"/>
                                        </div>
                                        <div id="audio-gallery" className="col-md-4 col-sm-12 col-12">
                                            <img src="../assets/audio_gallery.svg" title="Choisir une piste et ajouter à ce Summary"/></div>
                                        <div id="video-gallery" className="col-md-4 col-sm-12 col-12">
                                            <div style={ { display: (this.state.boxId===2) ? 'block' : 'none' } }  >
                                                <FooterMenuBox type={"medias"}
                                                               onClick={this.handleClickOutsideFigure}/>
                                            </div>
                                            <img src="../assets/video_gallery.svg"
                                                 onClick={this.handleClickMedia}
                                                 title="Choisir une vidéo et ajouter à ce Summary"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col" id="graphics">
                                    <div className="row">
                                        <div id="add-text" className="col-md-3 col-sm-6 col-12">
                                            <img src="../assets/text.svg" title="Ajouter une zone de texte"/></div>
                                        {/*<div id="diagram" className="col-md-3 col-sm-6 col-12" >
                                            <img src="../assets/diagram.svg" title="Choisir un graphique à ajouter"/></div>*/}
                                        <div id="add-rectbg" className="col-md-3 col-sm-6 col-12">
                                            <img src="../assets/text_bg.svg" title="Make the text background more attractive"/></div>
                                        {/*<div id="mG3" className="microGallery"/>*/}
                                        <div id="figure" className="col-md-3 col-sm-6 col-12" >
                                            <div style={ { display: (this.state.boxId===1) ? 'block' : 'none' } }  >
                                                <FooterMenuBox type={"figure"}
                                                               onClick={this.handleClickOutsideFigure}/></div>
                                                <img src="../assets/figure.svg"
                                                     onClick={this.handleClickIcon}
                                                     title="Choisir une forme ou une ligne"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col" id="magic">
                                    <div className="row">
                                        <div id="template" className="col-md-3 col-sm-6 col-12" >
                                            <img src="../assets/template.svg" title="Découvrir et inspirer vous de modèle préfaits"/></div>
                                        <div id="background" className="col-md-3 col-sm-6 col-12">
                                            <img src="../assets/background.svg" title="Customizer l'arrière plan"/></div>
                                        <div id="animation" className="col-md-3 col-sm-6 col-12" >
                                            <img src="../assets/animation.svg" title="Afficher ou masquer les options d'animation"/></div>
                                        {/*<div id="format" className="col-md-3 col-sm-6 col-12">
                                            <img src="../assets/format.svg" title="Afficher ou masquer les options de format de styles"/>
                                        </div>*/}
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
            </footer>)
    }


}




