import _ from 'lodash';
import  React, { Component } from 'react';

import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchSummaryByUser} from "../actions/index";
import ProjectModal from "../components/project-modal"

class ProjectsContainer extends Component{

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.fetchSummaryByUser(1);
    }

    renderSummaries(){
        //console.log("this.props.projects", this.props.projects);
        const myString = "Qui finance Twitter ?";
        this.renderSummaryQuestionText(myString, 270);
       return _.map(this.props.projects, project => {
           let svgData = this.renderSummaryQuestionText(project.question.title, 270);
           return(
               <div key={project.id}  className="col-lg-3 col-md-4 col-xs-6">
                   <Link to="/summary" className="d-block mb-4 h-100">
                       <svg  className="img-fluid img-thumbnail" style={{"cursor": "pointer"}} width="324px"
                             height="354px" viewBox="0 0 324 354" version="1.1" xmlns="http://www.w3.org/2000/svg"
                             xmlnsXlink="http://www.w3.org/1999/xlink">
                           <title>Summary project</title>
                           <desc>Created with Sketch.</desc>
                           <defs>
                               <rect id="path-1" x="0" y="0" width="320" height="240" rx="5"></rect>
                               <filter x="0.0%" y="0.0%" width="100.0%" height="100.0%" filterUnits="objectBoundingBox"
                                       id="filter-3">
                                   <feGaussianBlur stdDeviation="0" in="SourceGraphic"></feGaussianBlur>
                               </filter>
                               <linearGradient x1="50%" y1="0%" x2="50%" y2="23.6951576%" id="linearGradient-4">
                                   <stop stopColor="#000000" stopOpacity="0" offset="0%"></stop>
                                   <stop stopColor="#000000" offset="100%"></stop>
                               </linearGradient>
                               <filter x="-24.4%" y={svgData.fy+"%"} width="148.8%" height={svgData.fh+"%"}
                                       filterUnits="objectBoundingBox" id="filter-5">
                                   <feGaussianBlur stdDeviation="0.204228672 25.9991979" in="SourceGraphic"></feGaussianBlur>
                               </filter>
                               <rect id="path-6" x="0" y="0.616679572" width="320" height="101.282314"></rect>
                           </defs>
                           <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                               <g id="Home-Connexion-Page" transform="translate(-399, -121)">
                                   <g id="Post" transform="translate(401, 121)">
                                       <g id="photo-layer">
                                           <mask id="mask-2" fill="white">
                                               <use xlinkHref="#path-1"></use>
                                           </mask>
                                           <g id="Mask"></g>
                                           <image  id={project.summary.cover_image} filter="url(#filter-3)" mask="url(#mask-2)"
                                                   x="-3.75582787" y="0" width="329.032258" height="240"
                                                   xlinkHref={project.summary.cover_image}></image>
                                       </g>
                                       <g id="Question-with-details" transform={"translate("+svgData.t[0]+", "+svgData.t[1]+")"}>
                                           <rect id="Rectangle" fill="url(#linearGradient-4)" style={{"mixBlendMode": "luminosity"}}
                                                 filter="url(#filter-5)" x="0" y={svgData.y} width="320" height={svgData.h+"px"}></rect>
                                           <g id="Comment-sauver-20-ba" transform={"translate(10, "+svgData.tY+")"}>
                                               <mask id="mask-7" fill="white">
                                                   <use xlinkHref="#path-6"></use>
                                               </mask>
                                               <g id="Mask"></g>
                                               <text id="Comment-des-habitant"  fontFamily="AvenirNext-Heavy, Avenir Next" fontSize="16"
                                                     fontWeight="100" fill="#FFFFFF" dangerouslySetInnerHTML={{__html: svgData.tspans.join('')}}/>
                                           </g>
                                       </g>
                                   </g>
                               </g>
                           </g>
                       </svg>
                   </Link>
               </div>
           );
       })
    }

    makeTspans(linespace, rows){
        let tspans = [];
        for(let i=0; i<rows.length; i++){
            tspans.push(`<tspan x='0' y=${linespace}>${rows[i]}</tspan>`);
            linespace+=22;
        }
        return tspans;
    }

    getWidth(pText, pFontSize, pStyle) {

        let div = document.createElement('div');

        document.body.appendChild(div);

        if (pStyle !== null) {
            div.style = pStyle;
        }

        div.style.fontSize = "" + pFontSize + "px";
        div.style.position = "absolute";
        div.style.fontWeight= "600";
        div.style.left = -1000;
        div.style.top = -1000;

        div.innerHTML = pText;
        const width = div.clientWidth;

        document.body.removeChild(div);
        div = null;

        return width;

    }

    renderSummaryQuestionText(text, maxWidth){
        
        const words = text.split(' ');
        let current = '';
        let rows = [];
        
        for(let i=0; i<words.length; i++){

            const word = words[i];
            const temp = current + (current === '' ? '' : ' ') + word;
            
            if(this.getWidth(temp, 16, 'AvenirNext-Heavy, Avenir Next') > maxWidth){
                rows.push(current.trim());
                current = words[i];
            }else{
                current = temp;
            }
        }

        //Handle the remaining result
        rows.push(current.trim());

        switch(rows.length) {
            case 1:
                return {'tspans': this.makeTspans(122, rows), 'fy': -74.3, 'fh': 248.7, 't': [0, 74], 'tY': 3, 'y': 64, 'h': 105};
            case 2:
                return {'tspans': this.makeTspans(100, rows), 'fy': -63.7, 'fh': 227.4, 't': [0, 74], 'tY': 2, 'y': 46.55, 'h': 122.44};
            case 3:
                return {'tspans': this.makeTspans(14, rows), 'fy': -59, 'fh': 218, 't': [0, 107], 'tY': 33, 'y': 0.39, 'h': 132.42};
            case 4:
                return {'tspans': this.makeTspans(32, rows), 'fy': -47, 'fh': 194, 't': [0, 72], 'tY': 23, 'y': 0.60, 'h': 166};
            case 5:
                return {'tspans': this.makeTspans(34, rows), 'fy': -45.6, 'fh': 191.1, 't': [0, 66], 'tY': 10, 'y': 0.82, 'h': 171.18};
            case 6:
                return {'tspans': this.makeTspans(42, rows), 'fy': -34.7, 'fh': 169.3, 't': [0, 14], 'tY': 30, 'y': 0.21, 'h': 225};
            default:
                return {'tspans': this.makeTspans(42, rows), 'fy': -34.7, 'fh': 169.3, 't': [0, 14], 'tY': 30, 'y': 0.21, 'h': 225};
        }

    }

    render() {
        return (
            <main role="main" className="container page-header" >

                <div className="projects-container row text-center text-lg-left" >

                    <div className="col-lg-3 col-md-4 col-xs-6" >
                        <a href="#" className="d-block mb-4 h-100">
                            <img className="img-fluid img-thumbnail" data-toggle="modal" data-target="#project-modal" data-animation="false" src="../assets/new-summary.svg" alt=""/>
                        </a>
                    </div>
                    {this.renderSummaries()}
                </div>
                <ProjectModal  />
            </main>
        );
    }

};

function mapStateToProps(state) {
    return {projects: state.summaryByUser}
}

export default connect(mapStateToProps, {fetchSummaryByUser})(ProjectsContainer);




