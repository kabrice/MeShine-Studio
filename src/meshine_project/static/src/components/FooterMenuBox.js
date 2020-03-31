import _ from 'lodash';
import  React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {fetchIconsFromTheNounProject, createMediaURL, notRequestingAPI, requestingAPI, fetchUserMedia} from '../actions/index'
import {withRouter} from "react-router-dom";
import ProjectModal from "../components/ProjectModal"

const SELECT_BUTTON_CSS = {"backgroundColor": "#353738", "color": "whitesmoke"};
class FooterMenuBox extends Component{

    constructor(props){
        super(props);
        //console.log('this.props.medias', this.props.medias);
        this.state = {
           // medias: [],
            files: []
        }
    }

    componentDidMount() {

        $(".add-media").hover(function(){
            $(this).find('svg').css({"cursor": "pointer"});
            $(this).find('svg').find('path').css({"fill": "#353738"});
            $(this).find('svg').find('rect').css({"stroke": "#353738"});
            $(this).find('p').css({"color": "#353738", "cursor": "pointer"});
            $(this).css("border", "1px solid #353738");
        }, function () {
            $(this).find('svg').find('path').css({"fill": "darkgrey"});
            $(this).find('svg').find('rect').css({"stroke": "darkgrey"});
            $(this).find('p').css({"color": "darkgrey", "cursor": "pointer"});
            $(this).css("border", "1px solid darkgrey");
        });

        this.props.fetchUserMedia(1);
        $('.fmb-menu .left-btn').css({"backgroundColor": "#353738", "color": "whitesmoke"});
    }
    renderField(field){
        return(
            <input {...field.input}
                   type="text"
                   autoComplete="off"
                   placeholder={field.placeholder} />
        )
    }
    fetchIcons(value){
        this.props.fetchIconsFromTheNounProject(value.iconName, (response) =>{
            //console.log("GOOD", response);
            this.setState({medias: response});
        }, (error) => {
            console.log("error", error);
        });
    }

    onChange(e) {
        console.log('onChange', e);
        this.props.requestingAPI();
        let files = e.target.files;

        let fileList = [];
        //console.log('files', files);
        let myFiles = Array.from(files);
        for(let i=0; i<myFiles.length; i++){
            let value = myFiles[i];
            let formData = [];
            let reader = new FileReader();
            //let fileList = [] ;
            reader.readAsDataURL(value);
            reader.onload = (e) => {
                let file = e.target.result;
                let fileType = value.type.substring(0, value.type.indexOf('/'));
                formData = {file: file, name: value.name, user: 1, fileType: fileType};
                fileList.push(formData);
                console.log('files size', files.length);
                if(fileList.length === files.length){
                    this.props.createMediaURL({fileList: fileList}, 1, (response) =>{
                        this.props.notRequestingAPI();
                        console.log("GOOD", response);
                        this.setState({medias: response});
                    }, (error) => {
                        console.log("error", error);
                    });
                }
            };
        }
        //console.log("fileList ", fileList);
    }

    removeSelectedButton(){
        $('.fmb-menu .left-btn').removeAttr("style");
        $('.fmb-menu .middle-btn').removeAttr("style");
        $('.fmb-menu .right-btn').removeAttr("style");
    }

    fetchImages(){
        let filesTemp =  JSON.parse(JSON.stringify(this.props.files));
        let files = _.remove(filesTemp, file => (file.file_type === 1));
        this.setState({files: files});
        this.removeSelectedButton();
        $('.fmb-menu .middle-btn').css(SELECT_BUTTON_CSS);
    }
    fetchVideos(){
        let filesTemp =  JSON.parse(JSON.stringify(this.props.files));
        let files = _.remove(filesTemp, file => (file.file_type === 2));
        this.setState({files: files});
        this.removeSelectedButton();
        $('.fmb-menu .right-btn').css(SELECT_BUTTON_CSS);
    }
    fetchMediaSuggestion(){
        let filesTemp =  JSON.parse(JSON.stringify(this.props.files));
        let files = _.remove(filesTemp, file => (file.file_type === 1));
        this.setState({files: files});
        this.removeSelectedButton();
        $('.fmb-menu .left-btn').css(SELECT_BUTTON_CSS);
    }
    fetchBMSuggestion(){
        let filesTemp =  JSON.parse(JSON.stringify(this.props.files));

        let files = _.remove(filesTemp, file => (file.file_type === 3));
        console.log('files', files);
        this.setState({files: files});
        this.removeSelectedButton();
        $('.fmb-menu .left-btn').css(SELECT_BUTTON_CSS);
    }
    fetchBMSample(){
        let filesTemp =  JSON.parse(JSON.stringify(this.props.files));
        let files = _.remove(filesTemp, file => (file.file_type === 3));
        this.setState({files: files});
        this.removeSelectedButton();
        $('.fmb-menu .right-btn').css(SELECT_BUTTON_CSS);
    }
/*    fetchYoutubeVideos(){
        let files = [{id: 'x', url: 'https://www.youtube.com/embed/VwUaqGeN4Pw', file_type: 3},
                     {id: 'y', url: 'https://www.youtube.com/embed/ztikTbgW0rc', file_type: 3},
                     {id: 'z', url: 'https://www.youtube.com/embed/Jss_DN201nc', file_type: 3}];
        this.setState({files: files});
        console.log('files', files);
        this.removeSelectedButton();
        $('.fmb-menu .right-btn').css(SELECT_BUTTON_CSS);
    }*/
    componentWillReceiveProps() {
        let n = 1;
        if(this.props.type === 'figure'){
            n = 2;
        }else if (this.props.type === 'bodymovin'){
            //console.log('HELLO');
            n =3;
        }
        let filesTemp = JSON.parse(JSON.stringify(this.props.files));
        let files = _.remove(filesTemp, file => (file.file_type === n));
        this.setState({files: files});
    }
    render(){

        const {handleSubmit} = this.props;
        let mediaLabel = '';
        //let isYoutube = false;
        /*let files = _.remove(this.props.files, file => (file.file_type !== 2));
        this.setState({files: files});*/
        //console.log('files ', this.state.files);
        let medias = _.map(this.state.files, (media, index) => {
            //console.log('media', media.file_type);
            let myMedia = '';

            if(media.file_type === 1){
                //console.log('1111111', media);
                myMedia = `<img src="http://localhost:8080${media.content}">`;
                mediaLabel = 'Add pic';
            }else if (media.file_type === 2){
                myMedia = `<video controls style="border-radius: 5px" >
                            <!--<source src="../assets/I-lift-my-hands-Hillsong.mp4" type="video/mp4">-->
                              <source src="http://localhost:8080${media.content}" type="video/mp4" crossorigin="Anonymous">
                              Your browser does not support the video tag.
                            </video>`;
                mediaLabel = 'Add video';
            }else if(media.file_type === 3){
                myMedia = `<img src="http://localhost:8080${media.content}">`;
                mediaLabel = 'Add JSON';
            }

            return (<div key={index} className="box-img" dangerouslySetInnerHTML={{__html: myMedia}}/>)
        });

        let iconList = _.map(this.state.medias, (media, index) => {
            //console.log('medias------', media);
            return (<div key={index} className="box-img" dangerouslySetInnerHTML={{__html: media}}/>)
        });


        let searchField = <div className="navg" >
                        <div onChange={handleSubmit(this.fetchIcons.bind(this))}>
                            <Field
                                name="iconName1"
                                placeholder="Search your media"
                                component={this.renderField}/>
                        </div>
                   </div>;
        let addImageIcon = <div id="add-media" className="add-media">
                            <label htmlFor="fmb-file" id="fmb-label">
                                <svg width="58px" height="40px" viewBox="0 0 88 68" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" >
                                    <title>noun_picture add_1585428</title>
                                    <desc>Created with Sketch.</desc>
                                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                        <g id="noun_picture-add_1585428" transform="translate(0.000000, -1.000000)" fill="gray">
                                            <g id="Group" >
                                                <g transform="translate(0.000000, 0.637820)" id="Shape">
                                                    <path d="M10.53125,0.36218 C4.805359,0.36218 0,4.93983 0,10.64343 L0,46.04968 C0,51.75328 4.790368,56.36218 10.53125,56.36218 L56.53125,56.36218 C58.319391,63.239861 64.580774,68.36218 72,68.36218 C80.801021,68.36218 88,61.16318 88,52.36218 C88,45.677754 83.854787,39.90389 78,37.51843 L78,10.64343 C78,4.92438 73.163391,0.36218 67.4375,0.36218 L10.53125,0.36218 L10.53125,0.36218 Z M10.53125,6.36218 L67.4375,6.36218 C70.060657,6.36218 72,8.2762 72,10.64343 L72,29.01843 L65.90625,24.01843 C64.791298,23.1162639 63.1937636,23.1293584 62.09375,24.04968 L52,32.45593 L30.90625,15.04968 C30.2811251,14.5237502 29.4685705,14.2754696 28.65625,14.36218 C28.1608703,14.4221657 27.6882742,14.6047596 27.28125,14.89343 L6,29.61218 L6,10.64343 C6,8.26075 7.908095,6.36218 10.53125,6.36218 L10.53125,6.36218 Z M52,8.36218 C47.064975,8.36218 43,12.42715 43,17.36218 C43,22.2972 47.064963,26.36218 52,26.36218 C56.935032,26.36218 61,22.29721 61,17.36218 C61,12.42714 56.93502,8.36218 52,8.36218 L52,8.36218 Z M52,14.36218 C53.69239,14.36218 55,15.66978 55,17.36218 C55,19.05455 53.692378,20.36218 52,20.36218 C50.307609,20.36218 49,19.05456 49,17.36218 C49,15.66977 50.307597,14.36218 52,14.36218 L52,14.36218 Z M28.84375,21.11218 L50.09375,38.67468 C51.208702,39.5768461 52.8062364,39.5637516 53.90625,38.64343 L64,30.23718 L71.5,36.39343 C63.606018,36.64197 57.130477,42.663662 56.15625,50.36218 L10.53125,50.36218 C7.923086,50.36218 6,48.43228 6,46.04968 L6,36.92468 L28.84375,21.11218 L28.84375,21.11218 Z M72,42.36218 C77.558383,42.36218 82,46.80388 82,52.36218 C82,57.92058 77.558383,62.36218 72,62.36218 C66.441618,62.36218 62,57.92058 62,52.36218 C62,46.80388 66.441618,42.36218 72,42.36218 L72,42.36218 Z M71.96875,45.29968 C71.167611,45.3079318 70.4030499,45.6362605 69.8454025,46.2115178 C69.287755,46.7867752 68.983348,47.5611716 69,48.36218 L69,49.36218 L68,49.36218 C67.8959041,49.3567515 67.7915959,49.3567515 67.6875,49.36218 C66.6155694,49.417823 65.654773,50.0411715 65.1671067,50.9973686 C64.6794404,51.9535657 64.7390102,53.0973072 65.3233723,53.9976695 C65.9077344,54.8980318 66.9280888,55.4181954 68,55.36218 L69,55.36218 L69,56.36218 C68.9846991,57.4440877 69.5531259,58.4504241 70.4876185,58.9958432 C71.4221112,59.5412622 72.5778888,59.5412622 73.5123815,58.9958432 C74.4468741,58.4504241 75.0153009,57.4440877 75,56.36218 L75,55.36218 L76,55.36218 C77.0819077,55.3774809 78.0882441,54.8090541 78.6336632,53.8745615 C79.1790822,52.9400688 79.1790822,51.7842912 78.6336632,50.8497985 C78.0882441,49.9153059 77.0819077,49.3468791 76,49.36218 L75,49.36218 L75,48.36218 C75.0168793,47.5503324 74.7039673,46.7663125 74.1327324,46.1891885 C73.5614974,45.6120645 72.7807281,45.291128 71.96875,45.29968 L71.96875,45.29968 Z"/>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                <p>{mediaLabel}</p>
                            </label>
                            <input style={{"display": "none"}} id="fmb-file" type="file" name="fmb-file" onChange={(e) => this.onChange(e)} multiple/>
                        </div>
        let fmbMenu = <div className="fmb-menu">
                        <div className="left-btn me-btn" onClick={this.fetchMediaSuggestion.bind(this)}>Explore</div>
                        <div className="middle-btn me-btn" onClick={this.fetchImages.bind(this)}>Image</div>
                        <div className="right-btn me-btn" onClick={this.fetchVideos.bind(this)}>Video</div>
                     </div>;
        console.log('this.props.type', this.props.type);
        if(this.props.type === 'figure'){
            addImageIcon = null;
            fmbMenu = null;
            medias = iconList;
            searchField = <div className="navg" >
                        <div onChange={handleSubmit(this.fetchIcons.bind(this))}>
                            <Field
                                name="iconName"
                                placeholder="Search whatever images"
                                component={this.renderField}/>
                        </div>
                    </div>
        } else if(this.props.type === 'bodymovin'){
            fmbMenu = <div className="fmb-menu">
                        <div className="left-btn me-btn" onClick={this.fetchBMSuggestion.bind(this)}>Suggestion</div>
                        <div className="right-btn me-btn" onClick={this.fetchBMSample.bind(this)}>Sample</div>
                      </div>;
            //medias = null;
            addImageIcon = <div
                                className="add-media">
                                <svg
                                    data-toggle="modal"
                                    data-target="#project-modal"
                                    data-animation="false"
                                    width="44px"
                                    height="56px"
                                    viewBox="0 0 44 56"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <title>noun_JSON File_925772</title>
                                    <desc>Created with Sketch.</desc>
                                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                        <g id="noun_JSON-File_925772" fillRule="nonzero" fill="gray">
                                            <g id="Group">
                                                <path d="M28.8,1.5 C27.8,0.5 26.4,0 25,0 L10,0 C4.8,0 0.5,4.3 0.5,9.5 L0.5,46.5 C0.5,51.7 4.8,56 10,56 L34,56 C39.2,56 43.5,51.7 43.5,46.5 L43.5,17.7 C43.5,16.2 42.9,14.7 41.8,13.7 L28.8,1.5 Z M38.2,14.5 L30.6,14.5 C29.2,14.5 28.1,13.4 28.1,12 L28.1,5 L38.2,14.5 Z M40.5,46.5 C40.5,50.1 37.6,53 34,53 L10,53 C6.4,53 3.5,50.1 3.5,46.5 L3.5,9.5 C3.5,5.9 6.4,3 10,3 L25,3 C25,3 25.1,3 25.1,3 L25.1,12 C25.1,15 27.6,17.5 30.6,17.5 L40.5,17.5 C40.5,17.6 40.5,17.7 40.5,17.7 L40.5,46.5 Z" id="Shape"></path>
                                                <path d="M8.9,35.1 C8.2,35.1 7.7,35.7 7.7,36.3 C7.7,37 8.3,37.5 8.9,37.5 C9.5,37.5 10.1,36.9 10.1,36.3 C10.1,35.6 9.6,35.1 8.9,35.1 Z" id="Shape"></path>
                                                <path d="M12.9,28.2 C12.3,28.2 11.8,28.7 11.8,29.3 C11.8,29.9 12.3,30.5 12.9,30.5 C13.5,30.5 14.1,30 14.1,29.3 C14.1,28.7 13.6,28.2 12.9,28.2 Z" id="Shape"></path>
                                                <path d="M11.9,37.3 C11.9,38 11.6,38.3 11.1,38.3 C10.7,38.3 10.5,38.2 10.3,38 L9.8,39.5 C10.3,39.8 10.6,39.9 11.5,39.9 C13.2,39.9 13.9,38.8 13.9,37.3 L13.9,31.1 L11.9,31.1 L11.9,37.3 L11.9,37.3 Z" id="Shape"></path>
                                                <path d="M17,32.9 C17,32.7 17.3,32.5 17.8,32.5 C18.6,32.5 19.3,32.8 19.6,33.2 L20.4,31.8 C19.7,31.3 18.8,31 17.8,31 C16.1,31 15.1,32 15.1,33.1 C15.1,35.6 18.8,34.8 18.8,35.6 C18.8,35.9 18.6,36 18,36 C17.3,36 16.3,35.6 15.8,35.2 L15,36.6 C15.7,37.2 16.8,37.6 18,37.6 C19.8,37.6 20.8,36.7 20.8,35.5 C20.6,32.9 17,33.6 17,32.9 Z" id="Shape"></path>
                                                <path d="M24.7,30.9 C22.6,30.9 21.3,32.4 21.3,34.2 C21.3,36 22.6,37.5 24.7,37.5 C26.9,37.5 28.1,36 28.1,34.2 C28.1,32.5 26.8,30.9 24.7,30.9 Z M24.7,35.8 C23.8,35.8 23.3,35.1 23.3,34.3 C23.3,33.5 23.8,32.8 24.7,32.8 C25.6,32.8 26.1,33.5 26.1,34.3 C26,35.1 25.5,35.8 24.7,35.8 Z" id="Shape"></path>
                                                <path d="M33.3,30.9 C32.2,30.9 31.5,31.4 31.1,31.8 L31.1,31 L29.1,31 L29.1,37.3 L31.1,37.3 L31.1,33.2 C31.3,32.9 31.7,32.6 32.3,32.6 C32.9,32.6 33.3,32.9 33.3,33.6 L33.3,37.2 L35.3,37.2 L35.3,32.8 C35.4,31.8 34.8,30.9 33.3,30.9 Z" id="Shape"></path>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                <p> Add JSON </p>
                            </div>

        }else{
            //this.fetchImages();
            //console.log('mediasx', this.props.files,'====', this.state.files);

        }
        //console.log('media.file_type', medias);
        return (<div className="menu-box big-menu-box">
                    {searchField}
                    <div className="images thumbs">
                        {fmbMenu}
                        <div className="medias-container">
                            {addImageIcon}
                            {medias}
                        </div>
                    </div>
                    <ProjectModal  type={"forBodymovin"}/>
                </div>)

    }
}
function validate(values){
    const errors = {};

    // Validate the inputs from

    if(!values.iconName){
        errors.iconName="Search whatever images";
    }

    // If errors is empty, the form is fine to submit
    //If errors has *any* properties, redux form assumes form is invalid
    return errors;
}

function mapStateToProps(state) {
    return {requestingAPI: state.requestingAPI,
            files: state.files}
}


export default withRouter(reduxForm({
    validate,
    form: 'TheNounProjectForm'
})(
    connect(mapStateToProps, {fetchIconsFromTheNounProject,
                              requestingAPI,
                              notRequestingAPI,
                              fetchUserMedia,
                              createMediaURL})(FooterMenuBox)
));





