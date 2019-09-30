import _ from 'lodash';
import  React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {fetchIconsFromTheNounProject, createMediaURL, notRequestingAPI, requestingAPI, fetchUserImages} from '../actions/index'
import {withRouter} from "react-router-dom";

class FooterMenuBox extends Component{

    constructor(props){
        super(props);
        //console.log('this.props.medias', this.props.medias);
        this.state = {
            medias: []
        };


    }

    componentDidMount() {

        $(".add-media").hover(function(){
            $(this).find('svg').css({"cursor": "pointer"});
            $(this).find('svg').find('path').css({"fill": "#353738"});
            $(this).find('p').css({"color": "#353738", "cursor": "pointer"});
            $(this).css("border", "1px solid #353738");
        }, function () {
            $(this).find('svg').find('path').css({"fill": "darkgrey"});
            $(this).find('p').css({"color": "darkgrey", "cursor": "pointer"});
            $(this).css("border", "1px solid darkgrey");
        });

        this.props.fetchUserImages(1);
        this.setState({medias: ['ha', 'hi']});

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
    render(){
        const {handleSubmit} = this.props;
        let files = _.remove(this.props.files, file => (file.file_type !== 2));
        //console.log('files ', file);
        let medias = _.map(files, (media, index) => {
            console.log('media', media);
            let img = `<img src="http://localhost:8080${media.content}">`;
            return (<div key={index} className="box-img" dangerouslySetInnerHTML={{__html: img}}/>)
        });

        let iconList = _.map(this.state.medias, (media, index) => {
            //console.log('medias------', media);
            return (<div key={index} className="box-img" dangerouslySetInnerHTML={{__html: media}}/>)
        });


        let type = <div className="navg" >
                        <div onChange={handleSubmit(this.fetchIcons.bind(this))}>
                            <Field
                                name="iconName1"
                                placeholder="Search whatever images"
                                component={this.renderField}/>
                        </div>
                   </div>;
        let addImageIcon = <div id="add-media" className="box-img add-media">
                            <label htmlFor="fmb-file">
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
                                <p>Add pic</p>
                            </label>
                            <input style={{"display": "none"}} id="fmb-file" type="file" name="fmb-file" onChange={(e) => this.onChange(e)} multiple/>
                        </div>
        let fmbMenu = <div className="fmb-menu">
                        <div className="left-btn">Images</div>
                        <div className="middle-btn">Videos</div>
                        <div className="right-btn">Youtube</div>
                    </div>

        if(this.props.type === 'figure'){
            addImageIcon = null;
            fmbMenu = null;
            medias = iconList;
            type = <div className="navg" >
                        <div onChange={handleSubmit(this.fetchIcons.bind(this))}>
                            <Field
                                name="iconName"
                                placeholder="Search whatever images"
                                component={this.renderField}/>
                        </div>
                    </div>
        }

        return (<div className="menu-box big-menu-box">
                    {type}
                    <div className="images thumbs">
                        {fmbMenu}
                        <div className="medias-container">
                            {addImageIcon}
                            {medias}
                        </div>
                    </div>
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
                              fetchUserImages,
                              createMediaURL})(FooterMenuBox)
));





