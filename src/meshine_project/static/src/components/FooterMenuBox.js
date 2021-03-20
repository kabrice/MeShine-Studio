import _ from 'lodash';
import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {
    fetchIconsFromTheNounProject,
    createMediaURL,
    notRequestingAPI,
    requestingAPI,
    fetchUserMedia
} from '../actions/index'
import {withRouter} from "react-router-dom";
import ProjectModal from "../components/ProjectModal"
import lottie from 'lottie-web'
import { Editor } from "react-draft-wysiwyg";
import {EditorState} from "draft-js";

const SELECT_BUTTON_CSS = {"backgroundColor": "#353738", "color": "whitesmoke"};

class FooterMenuBox extends Component {

    constructor(props) {
        super(props);
        //console.log('this.props.medias', this.props.medias);
        this.state = {
            // medias: [],
            files: [],
            displaySource: true,
            displayAuthors: false,
            displayAbout: false,
            editorState: EditorState.createEmpty(),
            iAdd : 0,
        }
    }
    onEditorStateChange =  (editorState) => {
        // console.log(editorState)
        this.setState({
            editorState,
        });
    };

    uploadImageCallBack = (file) => {
        return new Promise(
            (resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.open('POST', 'https://api.imgur.com/3/image');
                xhr.setRequestHeader('Authorization', 'Client-ID XXXXX');
                const data = new FormData();
                data.append('image', file);
                xhr.send(data);
                xhr.addEventListener('load', () => {
                    const response = JSON.parse(xhr.responseText);
                    resolve(response);
                });
                xhr.addEventListener('error', () => {
                    const error = JSON.parse(xhr.responseText);
                    reject(error);
                });
            }
        );
    }
    
    

    componentDidMount() {


        $('._1j7uJw').click(function () {
            let myLottie = lottie.loadAnimation({
                container: document.getElementById('bm'), // the dom element that will contain the animation
                renderer: 'svg',
                loop: false,
                autoplay: true,
                path: '../../assets/demo/snap1/success-counter.json' // the path to the animation json

            });
            myLottie.play()
            myLottie.addEventListener('complete', () => {
                console.log('onComplete')
                $('.successtext').show()
            })
        })

        $(".add-media").hover(function () {
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

        var ce = document.querySelectorAll('[contenteditable]')
        for (let i = 0; i < ce.length; i++) {
            ce[i].addEventListener('paste', function (e) {
                e.preventDefault()
                var text = e.clipboardData.getData('text/plain')
                document.execCommand('insertText', false, text)
            })
        }
    }

    renderField(field) {
        return (
            <input {...field.input}
                   type="text"
                   autoComplete="off"
                   placeholder={field.placeholder}/>
        )
    }

    fetchIcons(value) {
        this.props.fetchIconsFromTheNounProject(value.iconName, (response) => {
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
        for (let i = 0; i < myFiles.length; i++) {
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
                if (fileList.length === files.length) {
                    this.props.createMediaURL({fileList: fileList}, 1, (response) => {
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

    removeSelectedButton() {
        $('.fmb-menu .left-btn').removeAttr("style");
        $('.fmb-menu .middle-btn').removeAttr("style");
        $('.fmb-menu .right-btn').removeAttr("style");
    }

    fetchImages() {
        let filesTemp = JSON.parse(JSON.stringify(this.props.files));
        let files = _.remove(filesTemp, file => (file.file_type === 1));
        this.setState({files: files});
        this.removeSelectedButton();
        $('.fmb-menu .middle-btn').css(SELECT_BUTTON_CSS);
    }

    fetchVideos() {
        let filesTemp = JSON.parse(JSON.stringify(this.props.files));
        let files = _.remove(filesTemp, file => (file.file_type === 2));
        this.setState({files: files});
        this.removeSelectedButton();
        $('.fmb-menu .right-btn').css(SELECT_BUTTON_CSS);
    }

    fetchMediaSuggestion() {
        let filesTemp = JSON.parse(JSON.stringify(this.props.files));
        let files = _.remove(filesTemp, file => (file.file_type === 1));
        this.setState({files: files});
        this.removeSelectedButton();
        $('.fmb-menu .left-btn').css(SELECT_BUTTON_CSS);
    }

    fetchBMSuggestion() {
        let filesTemp = JSON.parse(JSON.stringify(this.props.files));

        let files = _.remove(filesTemp, file => (file.file_type === 3));
        console.log('files', files);
        this.setState({files: files});
        this.removeSelectedButton();
        $('.fmb-menu .left-btn').css(SELECT_BUTTON_CSS);
    }

    fetchBMSample() {
        let filesTemp = JSON.parse(JSON.stringify(this.props.files));
        let files = _.remove(filesTemp, file => (file.file_type === 3));
        this.setState({files: files});
        this.removeSelectedButton();
        $('.fmb-menu .right-btn').css(SELECT_BUTTON_CSS);
    }

    onclickNextDemo = () => {
        console.log('onclickNextDemo')

        this.setState( {
            displaySource: false,
            displayAuthors: true,
            displayAbout: false
        })
    }
    onclickNext2Demo = () => {
        this.setState(  {
            displaySource: false,
            displayAuthors: false,
            displayAbout: true
        })
    }
    onclickSaveDemo = () => {
        this.setState( {
            displaySource: false,
            displayAuthors: false,
            displayAbout: false
        })
    }

    onclickSources = () => {
        this.setState( {
            displaySource: true,
            displayAuthors: false,
            displayAbout: false
        })
    }
    onclickAuthors = () => {
        this.setState( {
            displaySource: false,
            displayAuthors: true,
            displayAbout: false
        })
    }

    onclickAbout = () => {
        this.setState( {
            displaySource: false,
            displayAuthors: false,
            displayAbout: true
        })
    }

    onclickAdd = () => {
        console.log('iAdd', this.state.iAdd)
        $('.content1').html(" ")
        let i = this.state.iAdd
        i++;
        this.setState({iAdd: i});
    }

    componentWillReceiveProps() {
        let n = 1;
        if (this.props.type === 'figure') {
            n = 2;
        } else if (this.props.type === 'bodymovin') {
            //console.log('HELLO');
            n = 3;
        }
        let filesTemp = JSON.parse(JSON.stringify(this.props.files));
        let files = _.remove(filesTemp, file => (file.file_type === n));
        this.setState({files: files});
    }

    demoClickOnSocialMedia = () => {
        this.setState({displaySuccessGeneration: true})
    }
    demoDragOver = () => {
        console.log('Im in')
        this.setState({hideDemo: true})
    }
    demoDragEnd = () => {
        console.log('Im out')
        this.setState({hideDemo: false})
    }
    render() {

        const {handleSubmit} = this.props;
        let mediaLabel = '';
        //let isYoutube = false;
        /*let files = _.remove(this.props.files, file => (file.file_type !== 2));
        this.setState({files: files});*/
        //console.log('files ', this.state.files);
        let medias = _.map(this.state.files, (media, index) => {
            //console.log('media', media.file_type);
            let myMedia = '';

            if (media.file_type === 1) {
                //console.log('1111111', media);
                myMedia = `<img src="http://localhost:8080${media.content}">`;
                mediaLabel = 'Add pic';
            } else if (media.file_type === 2) {
                myMedia = `<video controls style="border-radius: 5px" >
                            <!--<source src="../assets/I-lift-my-hands-Hillsong.mp4" type="video/mp4">-->
                              <source src="http://localhost:8080${media.content}" type="video/mp4" crossorigin="Anonymous">
                              Your browser does not support the video tag.
                            </video>`;
                mediaLabel = 'Add video';
            } else if (media.file_type === 3) {
                myMedia = `<img src="http://localhost:8080${media.content}">`;
                mediaLabel = 'Add JSON';
            }

            return (<div key={index} className="box-img" dangerouslySetInnerHTML={{__html: myMedia}}/>)
        });

        let iconList = _.map(this.state.medias, (media, index) => {
            //console.log('medias------', media);
            return (<div key={index} className="box-img" dangerouslySetInnerHTML={{__html: media}}/>)
        });


        let searchField = '';
        let addImageIcon = <div className="QF_oCg" style={{width: '100%'}}>
            <div className="teD6Yg _1j7uJw" onClick={this.demoClickOnSocialMedia}>
                <div className="V2rkJw">
                    <button
                        className="_1QoxDw Qkd66A fFOiLQ fP4ZCw o4TrkA cclg9A YPTJew Qkd66A fFOiLQ fP4ZCw lsXp-w GnpDIA zQlusQ uRvRjQ _3AH3gw _69CJNA _84BrJQ"
                        aria-label="Present" type="button">
                                <span className="TcNIhA">
                                    <span aria-hidden="true" className="NA_Img dkWypw">
                                         <svg fill="white"
                                              xmlns="http://www.w3.org/2000/svg"
                                              xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px"
                                              viewBox="0 0 95 118.75" enableBackground="new 0 0 95 95"
                                              xmlSpace="preserve">
                                            <g>
                                                <g>
                                                    <path
                                                        d="M47.624,41.629c-9.585,0-17.383-7.798-17.383-17.383S38.039,6.863,47.624,6.863s17.383,7.798,17.383,17.383    S57.209,41.629,47.624,41.629z M47.624,7.863c-9.033,0-16.383,7.35-16.383,16.383s7.35,16.383,16.383,16.383    s16.383-7.35,16.383-16.383S56.657,7.863,47.624,7.863z M47.624,38.867c-8.063,0-14.622-6.559-14.622-14.621    c0-8.063,6.56-14.623,14.622-14.623s14.622,6.56,14.622,14.623C62.246,32.309,55.687,38.867,47.624,38.867z M47.624,10.623    c-7.511,0-13.622,6.111-13.622,13.623c0,7.511,6.111,13.621,13.622,13.621c7.512,0,13.622-6.11,13.622-13.621    C61.246,16.734,55.136,10.623,47.624,10.623z"/>
                                                </g>
                                                <g>
                                                    <path
                                                        d="M74.282,88.137c-3.035,0-6.036-0.807-8.678-2.333c-4.021-2.32-6.897-6.068-8.099-10.554    c-1.202-4.485-0.584-9.17,1.737-13.19c3.097-5.362,8.869-8.693,15.067-8.693c3.033,0,6.034,0.807,8.678,2.332    c4.021,2.322,6.897,6.071,8.099,10.557c1.202,4.484,0.585,9.168-1.737,13.189C86.254,84.806,80.48,88.137,74.282,88.137z     M74.311,54.366c-5.842,0-11.283,3.14-14.201,8.193c-2.188,3.79-2.771,8.204-1.638,12.432s3.844,7.76,7.633,9.947    c2.49,1.438,5.317,2.198,8.178,2.198c5.843,0,11.284-3.139,14.201-8.192c2.189-3.79,2.771-8.204,1.638-12.431    c-1.132-4.228-3.843-7.761-7.633-9.95C79.997,55.126,77.169,54.366,74.311,54.366z M74.282,85.376    c-2.551,0-5.074-0.679-7.298-1.962c-3.382-1.953-5.802-5.106-6.813-8.878c-1.01-3.773-0.491-7.714,1.462-11.097    c2.604-4.511,7.462-7.313,12.677-7.313c2.551,0,5.075,0.679,7.298,1.962c3.382,1.953,5.802,5.106,6.813,8.879    c1.011,3.773,0.491,7.714-1.461,11.097C84.354,82.574,79.497,85.376,74.282,85.376z M74.311,57.127    c-4.858,0-9.384,2.61-11.811,6.813c-1.819,3.151-2.304,6.823-1.362,10.338c0.942,3.514,3.196,6.451,6.347,8.271    c2.071,1.195,4.422,1.827,6.798,1.827c4.858,0,9.384-2.61,11.812-6.812c1.819-3.151,2.303-6.822,1.361-10.338    c-0.942-3.515-3.196-6.452-6.347-8.272C79.037,57.759,76.687,57.127,74.311,57.127z"/>
                                                </g>
                                                <g>
                                                    <path
                                                        d="M20.717,88.01c-6.192,0-11.962-3.325-15.06-8.679c-2.325-4.019-2.946-8.702-1.749-13.188    c1.196-4.487,4.069-8.238,8.088-10.563c2.644-1.531,5.65-2.341,8.693-2.341c6.191,0,11.961,3.325,15.058,8.678    c2.326,4.02,2.947,8.703,1.75,13.189c-1.196,4.486-4.069,8.237-8.088,10.562C26.766,87.2,23.76,88.01,20.717,88.01z M20.689,54.24    c-2.867,0-5.7,0.763-8.192,2.206c-3.788,2.19-6.495,5.727-7.623,9.955c-1.128,4.228-0.543,8.642,1.648,12.43    c2.919,5.045,8.358,8.179,14.194,8.179c2.867,0,5.699-0.763,8.191-2.206c3.788-2.191,6.495-5.727,7.623-9.954    c1.128-4.229,0.542-8.643-1.649-12.432C31.963,57.374,26.524,54.24,20.689,54.24z M20.717,85.25    c-5.209,0-10.064-2.798-12.67-7.302c-1.957-3.38-2.479-7.319-1.472-11.093c1.007-3.773,3.423-6.93,6.804-8.886    c2.227-1.289,4.755-1.97,7.311-1.97c5.209,0,10.063,2.798,12.668,7.302c1.957,3.379,2.48,7.319,1.473,11.093    c-1.007,3.773-3.423,6.93-6.804,8.886C25.8,84.569,23.272,85.25,20.717,85.25z M20.689,57c-2.38,0-4.734,0.635-6.81,1.835    c-3.149,1.823-5.4,4.763-6.339,8.278c-0.938,3.515-0.451,7.186,1.371,10.335c2.428,4.195,6.951,6.802,11.805,6.802    c2.38,0,4.734-0.635,6.809-1.835c3.149-1.822,5.4-4.763,6.339-8.278s0.451-7.186-1.372-10.334C30.065,59.606,25.543,57,20.689,57z    "/>
                                                </g>
                                                <g>
                                                    <path
                                                        d="M24.43,53.56l-0.54-0.104c-0.857-0.165-1.756-0.264-2.669-0.293l-0.533-0.018l0.052-0.53    c0.757-7.889,4.955-15.011,11.516-19.542l0.436-0.301l0.275,0.451c0.499,0.816,1.009,1.529,1.56,2.18l0.357,0.422l-0.455,0.313    c-5.678,3.903-9.303,10.053-9.946,16.873L24.43,53.56z M21.79,52.188c0.594,0.036,1.181,0.101,1.753,0.191    c0.786-6.722,4.354-12.775,9.874-16.753c-0.353-0.445-0.69-0.919-1.021-1.43C26.467,38.468,22.631,44.975,21.79,52.188z"/>
                                                </g>
                                                <g>
                                                    <path
                                                        d="M47.487,82.085c-3.979,0-7.836-0.87-11.459-2.586l-0.48-0.228l0.256-0.466c0.445-0.809,0.82-1.629,1.113-2.438    l0.188-0.519l0.497,0.237c3.122,1.484,6.448,2.237,9.886,2.237c3.408,0,6.709-0.741,9.812-2.202l0.505-0.238l0.181,0.528    c0.285,0.835,0.643,1.664,1.063,2.463l0.243,0.464l-0.475,0.222C55.23,81.235,51.419,82.085,47.487,82.085z M36.933,78.814    c3.35,1.507,6.897,2.271,10.555,2.271c3.613,0,7.121-0.745,10.436-2.217c-0.26-0.529-0.493-1.068-0.698-1.613    c-3.09,1.373-6.363,2.069-9.737,2.069c-3.408,0-6.71-0.709-9.824-2.107C37.45,77.749,37.206,78.284,36.933,78.814z"/>
                                                </g>
                                                <g>
                                                    <path
                                                        d="M70.563,53.922l-0.044-0.557c-0.539-6.831-4.068-13.037-9.684-17.025l-0.45-0.319l0.363-0.417    c0.582-0.667,1.122-1.391,1.604-2.151l0.282-0.446l0.431,0.307C69.533,37.93,73.614,45.1,74.261,52.984l0.043,0.523l-0.524,0.018    c-0.917,0.03-1.814,0.129-2.668,0.292L70.563,53.922z M61.855,35.845c5.453,4.059,8.927,10.163,9.611,16.896    c0.57-0.09,1.155-0.153,1.75-0.189c-0.737-7.215-4.466-13.768-10.312-18.117C62.576,34.922,62.225,35.394,61.855,35.845z"/>
                                                </g>
                                                <g>
                                                    <path
                                                        d="M47.499,67.128C47.5,67.128,47.5,67.128,47.499,67.128c6.579,0,11.932-5.352,11.932-11.931    c0-6.578-5.353-11.93-11.931-11.93c0,0,0,0-0.001,0c-6.578,0-11.93,5.352-11.93,11.93S40.921,67.128,47.499,67.128z     M47.499,65.469c-1.587,0-3.251-2.006-4.116-5.296h8.233C50.751,63.463,49.087,65.469,47.499,65.469z M43.034,58.514    c-0.163-1.021-0.255-2.129-0.255-3.316s0.093-2.297,0.255-3.318h8.931c0.163,1.021,0.256,2.131,0.256,3.318    s-0.093,2.295-0.255,3.316H43.034z M51.292,64.838c0.873-1.193,1.571-2.791,2.021-4.665h3.279    C55.432,62.286,53.554,63.944,51.292,64.838z M57.868,55.197c0,1.16-0.201,2.273-0.554,3.316h-3.681    c0.157-1.05,0.246-2.159,0.246-3.316c0-1.158-0.09-2.268-0.247-3.318h3.681C57.667,52.923,57.868,54.036,57.868,55.197z     M56.591,50.221h-3.278c-0.45-1.874-1.147-3.471-2.021-4.663C53.553,46.45,55.431,48.109,56.591,50.221z M47.499,44.926    c1.588,0,3.251,2.006,4.117,5.295h-8.232C44.249,46.932,45.912,44.926,47.499,44.926z M43.708,45.558    c-0.874,1.192-1.57,2.789-2.021,4.663h-3.278C39.569,48.109,41.446,46.451,43.708,45.558z M37.132,55.197    c0-1.161,0.2-2.274,0.555-3.318h3.68c-0.157,1.051-0.246,2.16-0.246,3.318c0,1.157,0.089,2.267,0.246,3.316h-3.681    C37.332,57.471,37.132,56.357,37.132,55.197z M41.688,60.173c0.449,1.874,1.146,3.472,2.021,4.665    c-2.263-0.894-4.14-2.553-5.3-4.665H41.688z"/>
                                                </g>
                                                <g>
                                                    <path
                                                        d="M41.552,33.379h12.146c1.37,0,2.481-1.111,2.481-2.482c0,0,0.15-1.391,0-1.82c-0.68-1.95-2.584-3.098-4.776-3.673    c-1.029,0.847-2.346,1.356-3.778,1.356s-2.748-0.51-3.777-1.356c-2.192,0.575-4.098,1.723-4.777,3.673c-0.149,0.43,0,1.82,0,1.82    C39.069,32.268,40.182,33.379,41.552,33.379z"/>
                                                </g>
                                                <g>
                                                    <circle cx="47.624" cy="20.803" r="5.46"/>
                                                </g>
                                                <g>
                                                    <circle cx="77.278" cy="72.473" r="5.46"/>
                                                </g>
                                                <g>
                                                    <path
                                                        d="M72.12,69.495c0.716-1.241,1.815-2.126,3.063-2.594c0.599-2.187,0.558-4.409-0.791-5.974    c-0.298-0.344-1.577-0.91-1.577-0.91c-1.187-0.686-2.705-0.278-3.39,0.908l-6.074,10.518c-0.686,1.188-0.279,2.705,0.908,3.391    c0,0,1.131,0.826,1.577,0.91c2.028,0.387,3.975-0.689,5.568-2.301C71.186,72.129,71.403,70.736,72.12,69.495z"/>
                                                </g>
                                                <g>
                                                    <circle cx="17.723" cy="72.35" r="5.46"/>
                                                </g>
                                                <g>
                                                    <path
                                                        d="M22.879,69.365c0.718,1.24,0.936,2.635,0.719,3.949c1.596,1.609,3.543,2.684,5.571,2.295    c0.446-0.086,1.576-0.912,1.576-0.912c1.185-0.686,1.59-2.205,0.903-3.391l-6.083-10.512c-0.687-1.188-2.205-1.592-3.391-0.906    c0,0-1.279,0.568-1.576,0.912c-1.348,1.566-1.387,3.789-0.785,5.975C21.062,67.242,22.16,68.126,22.879,69.365z"/>
                                                </g>
                                            </g>
                                        </svg>
                                    </span>
                                </span>
                    </button>
                </div>
                <p className="HDEzSQ l864gg _5RSqIg fP4ZCw _2xcaIA ZSdr0w I-IZwQ KZvVOQ"
                   style={{WebkitLineClamp: 2, maxHeight: 'calc(3.2em)'}}>
                    <span className="stchsg ERJ0uQ">Social Media</span>
                </p>
            </div>
            <div className="teD6Yg _1j7uJw">
                <div className="V2rkJw">
                    <button
                        className="_1QoxDw Qkd66A fFOiLQ fP4ZCw o4TrkA cclg9A YPTJew Qkd66A fFOiLQ fP4ZCw lsXp-w GnpDIA zQlusQ uRvRjQ _3AH3gw _69CJNA _84BrJQ"
                        aria-label="Present and record" type="button">
                                <span className="TcNIhA">
                                    <span aria-hidden="true" className="NA_Img dkWypw">
                                       <svg fill="white"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 80" x="0px" y="0px">
                                            <title>Website</title>
                                            <g>
                                                <path
                                                    d="M11,11a3,3,0,1,0,3,3A3,3,0,0,0,11,11Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,11,15Z"/>
                                                <path
                                                    d="M20,11a3,3,0,1,0,3,3A3,3,0,0,0,20,11Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,20,15Z"/>
                                                <path
                                                    d="M29,11a3,3,0,1,0,3,3A3,3,0,0,0,29,11Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,29,15Z"/>
                                                <path
                                                    d="M57,7H7a5,5,0,0,0-5,5V52a5,5,0,0,0,5,5H57a5,5,0,0,0,5-5V12A5,5,0,0,0,57,7ZM4,12A3,3,0,0,1,7,9H57a3,3,0,0,1,3,3v7H4ZM57,55H7a3,3,0,0,1-3-3V21H60V52A3,3,0,0,1,57,55Z"/>
                                                <path
                                                    d="M9,39H25a1,1,0,0,0,1-1V26a1,1,0,0,0-1-1H9a1,1,0,0,0-1,1V38A1,1,0,0,0,9,39Zm1-12H24V37H10Z"/>
                                                <path d="M55,25H31a1,1,0,0,0,0,2H55a1,1,0,0,0,0-2Z"/>
                                                <path d="M55,31H31a1,1,0,0,0,0,2H55a1,1,0,0,0,0-2Z"/>
                                                <path d="M55,37H31a1,1,0,0,0,0,2H55a1,1,0,0,0,0-2Z"/>
                                                <path d="M55,43H9a1,1,0,0,0,0,2H55a1,1,0,0,0,0-2Z"/>
                                                <path d="M55,49H9a1,1,0,0,0,0,2H55a1,1,0,0,0,0-2Z"/>
                                            </g>
                                        </svg>

                                    </span>
                                </span>
                    </button>
                </div>
                <p className="HDEzSQ l864gg _5RSqIg fP4ZCw _2xcaIA ZSdr0w I-IZwQ KZvVOQ"
                   style={{WebkitLineClamp: 2, maxHeight: 'calc(3.2em)'}}>
                    <span className="stchsg ERJ0uQ">Website</span>
                </p>
            </div>
        </div>
        let fmbMenu = <div className="fmb-menu">
            PUBLISH TO
        </div>;
        console.log('this.props.type', this.props.type);
        if (this.props.type === 'figure') {
            addImageIcon = null;
            fmbMenu = null;
            medias = iconList;
            searchField = <div className="navg">
                <div onChange={handleSubmit(this.fetchIcons.bind(this))}>
                    <Field
                        name="iconName"
                        placeholder="Search whatever images"
                        component={this.renderField}/>
                </div>
            </div>
        } else if (this.props.type === 'bodymovin') {
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
                                <path
                                    d="M28.8,1.5 C27.8,0.5 26.4,0 25,0 L10,0 C4.8,0 0.5,4.3 0.5,9.5 L0.5,46.5 C0.5,51.7 4.8,56 10,56 L34,56 C39.2,56 43.5,51.7 43.5,46.5 L43.5,17.7 C43.5,16.2 42.9,14.7 41.8,13.7 L28.8,1.5 Z M38.2,14.5 L30.6,14.5 C29.2,14.5 28.1,13.4 28.1,12 L28.1,5 L38.2,14.5 Z M40.5,46.5 C40.5,50.1 37.6,53 34,53 L10,53 C6.4,53 3.5,50.1 3.5,46.5 L3.5,9.5 C3.5,5.9 6.4,3 10,3 L25,3 C25,3 25.1,3 25.1,3 L25.1,12 C25.1,15 27.6,17.5 30.6,17.5 L40.5,17.5 C40.5,17.6 40.5,17.7 40.5,17.7 L40.5,46.5 Z"
                                    id="Shape"></path>
                                <path
                                    d="M8.9,35.1 C8.2,35.1 7.7,35.7 7.7,36.3 C7.7,37 8.3,37.5 8.9,37.5 C9.5,37.5 10.1,36.9 10.1,36.3 C10.1,35.6 9.6,35.1 8.9,35.1 Z"
                                    id="Shape"></path>
                                <path
                                    d="M12.9,28.2 C12.3,28.2 11.8,28.7 11.8,29.3 C11.8,29.9 12.3,30.5 12.9,30.5 C13.5,30.5 14.1,30 14.1,29.3 C14.1,28.7 13.6,28.2 12.9,28.2 Z"
                                    id="Shape"></path>
                                <path
                                    d="M11.9,37.3 C11.9,38 11.6,38.3 11.1,38.3 C10.7,38.3 10.5,38.2 10.3,38 L9.8,39.5 C10.3,39.8 10.6,39.9 11.5,39.9 C13.2,39.9 13.9,38.8 13.9,37.3 L13.9,31.1 L11.9,31.1 L11.9,37.3 L11.9,37.3 Z"
                                    id="Shape"></path>
                                <path
                                    d="M17,32.9 C17,32.7 17.3,32.5 17.8,32.5 C18.6,32.5 19.3,32.8 19.6,33.2 L20.4,31.8 C19.7,31.3 18.8,31 17.8,31 C16.1,31 15.1,32 15.1,33.1 C15.1,35.6 18.8,34.8 18.8,35.6 C18.8,35.9 18.6,36 18,36 C17.3,36 16.3,35.6 15.8,35.2 L15,36.6 C15.7,37.2 16.8,37.6 18,37.6 C19.8,37.6 20.8,36.7 20.8,35.5 C20.6,32.9 17,33.6 17,32.9 Z"
                                    id="Shape"></path>
                                <path
                                    d="M24.7,30.9 C22.6,30.9 21.3,32.4 21.3,34.2 C21.3,36 22.6,37.5 24.7,37.5 C26.9,37.5 28.1,36 28.1,34.2 C28.1,32.5 26.8,30.9 24.7,30.9 Z M24.7,35.8 C23.8,35.8 23.3,35.1 23.3,34.3 C23.3,33.5 23.8,32.8 24.7,32.8 C25.6,32.8 26.1,33.5 26.1,34.3 C26,35.1 25.5,35.8 24.7,35.8 Z"
                                    id="Shape"></path>
                                <path
                                    d="M33.3,30.9 C32.2,30.9 31.5,31.4 31.1,31.8 L31.1,31 L29.1,31 L29.1,37.3 L31.1,37.3 L31.1,33.2 C31.3,32.9 31.7,32.6 32.3,32.6 C32.9,32.6 33.3,32.9 33.3,33.6 L33.3,37.2 L35.3,37.2 L35.3,32.8 C35.4,31.8 34.8,30.9 33.3,30.9 Z"
                                    id="Shape"></path>
                            </g>
                        </g>
                    </g>
                </svg>
                <p> Add JSON </p>
            </div>

        } else {
            //this.fetchImages();
            //console.log('mediasx', this.props.files,'====', this.state.files);

        }
        //console.log('media.file_type', medias);
        return (/*DEMO FOR SUCCESS PROCESS<div className="menu-box big-menu-box" style={{left: this.state.displaySuccessGeneration ? '39%' : 'none',
                        top: this.state.displaySuccessGeneration ? '17%' : 'none'}}>
                    {searchField}
                    <div className="images thumbs" style={{width: this.state.displaySuccessGeneration ? 400 : null,
                                                          height: this.state.displaySuccessGeneration ? 320 : null ,
                                                         display: this.state.displaySuccessGeneration ? 'flex' : null}}>
                        { !this.state.displaySuccessGeneration ? fmbMenu : ''}
                        <div className="medias-container" style={{flexDirection: this.state.displaySuccessGeneration ? 'column' : null, color: 'white'}}>
                             { !this.state.displaySuccessGeneration ? addImageIcon : ''}
                             { !this.state.displaySuccessGeneration ? medias : ''}
                            <p id="bm" style={{display: this.state.displaySuccessGeneration ? 'contents' : 'none' , width: 200, paddingLeft: 95}}/>
                            <p style={{display: 'none', fontWeight: '100'}} className={"successtext"}>
                                <p style={{fontWeight: '700'}}>Congrats 🎉 </p>
                                <p>Your summary has been generated 😇</p>
                                <p><span style={{fontWeight: '700'}}>Next :</span> Open your phone app and share 🤳</p>
                            </p>
                        </div>
                    </div>
                    <ProjectModal  type={"forBodymovin"}/>
                </div>*/
            <div className="menu-box big-menu-box" style={{left: '30%', top: '17%', overflow: 'scroll'}}>
                <div className="images thumbs mydemo" style={{width: 700, height: 400}}>
                    <div className="runtime_sales_pathassistantPathAssistant" data-aura-rendered-by="352:0"
                         data-aura-class="runtime_sales_pathassistantPathAssistant">
                        <article className data-aura-rendered-by="353:0">
                            <div className="slds-card__body slds-card__body_inner" data-aura-rendered-by="354:0">
                                <h2 className="slds-assistive-text"
                                    data-aura-rendered-by="483:0">Path</h2>{/*render facet: 422:0*/}
                                <div className="slds-path" data-aura-rendered-by="423:0">
                                    <div data-aura-rendered-by="474:0"
                                         className="runtime_sales_pathassistantCollapsibleDrawer"
                                         data-aura-class="runtime_sales_pathassistantCollapsibleDrawer" id="424:0">
                                        <div className="slds-grid slds-path__track"
                                             data-aura-rendered-by="475:0">{/*render facet: 476:0*/}{/*render facet: 477:0*/}
                                            <div
                                                className="slds-grid slds-path__scroller-container runtime_sales_pathassistantPathAssistantTabSet"
                                                data-aura-rendered-by="432:0"
                                                data-aura-class="runtime_sales_pathassistantPathAssistantTabSet">{/*render facet: 442:0*/}
                                                <div
                                                    className="slds-path__scroller uiScroller scroller-wrapper scroll-horizontal"
                                                    tabIndex={-1} style={{}} data-aura-rendered-by="444:0"
                                                    data-aura-class="uiScroller">
                                                    <div className="slds-path__scroller_inner scroller"
                                                         data-aura-rendered-by="445:0">{/*render facet: 436:0*/}
                                                        <div role="listbox" aria-label="Path Header"
                                                             data-aura-rendered-by="437:0">
                                                            <ul className="slds-path__nav" aria-orientation="horizontal"
                                                                role="tablist" aria-label="Path"
                                                                data-aura-rendered-by="438:0">
                                                                <li onClick={this.onclickSources}
                                                                    className = {`slds-is-current ${this.state.displaySource ? 'slds-is-active' : 'slds-is-incomplete'} slds-path__item runtime_sales_pathassistantPathAssistantTab`}
                                                                    role="tab" data-aura-rendered-by="682:0"
                                                                    data-aura-class="runtime_sales_pathassistantPathAssistantTab"
                                                                    data-original-width={235}
                                                                    data-name="OpenNotContacted"
                                                                    data-walkthrough-target-hint="self">
                                                                    <a className="tabHeader slds-path__link"
                                                                       aria-selected="true"
                                                                       data-tab-name="OpenNotContacted" tabIndex={0}
                                                                       role="option" data-aura-rendered-by="683:0"
                                                                       href="javascript:void(0);" data-refid="tab-name"
                                                                       title="Open - not contacted">
                                                                        <span className="current slds-path__stage"
                                                                              data-aura-rendered-by="684:0">{/*render facet: 685:0*/}</span>
                                                                        <span className="title slds-path__title"
                                                                              data-aura-rendered-by="686:0">Sources &amp; References</span>{/*render facet: 688:0*/}
                                                                    </a>
                                                                </li>
                                                                <li onClick={this.onclickAuthors}
                                                                    className = {`slds-is-current ${this.state.displayAuthors ? 'slds-is-active' : 'slds-is-incomplete'} slds-path__item runtime_sales_pathassistantPathAssistantTab`}
                                                                    role="tab" data-aura-rendered-by="732:0"
                                                                    data-aura-class="runtime_sales_pathassistantPathAssistantTab"
                                                                    data-original-width={230}
                                                                    data-name="Refused - not converted"
                                                                    data-walkthrough-target-hint="self">
                                                                    <a className="tabHeader slds-path__link"
                                                                       aria-selected="false"
                                                                       data-tab-name="Refused - not converted"
                                                                       tabIndex={-1} role="option"
                                                                       title="Refused - not converted"
                                                                       data-aura-rendered-by="733:0"
                                                                       href="javascript:void(0);" data-refid="tab-name">
                                                                        <span className="ahead slds-path__stage"
                                                                              data-aura-rendered-by="734:0">{/*render facet: 735:0*/}</span>
                                                                        <span className="title slds-path__title"
                                                                              data-aura-rendered-by="736:0">Authors of the content</span>{/*render facet: 738:0*/}
                                                                    </a>
                                                                </li>
                                                                <li onClick={this.onclickAbout}
                                                                    className = {`slds-is-current ${this.state.displayAbout ? 'slds-is-active' : 'slds-is-incomplete'} slds-path__item runtime_sales_pathassistantPathAssistantTab`}
                                                                    role="tab" data-aura-rendered-by="742:0"
                                                                    data-aura-class="runtime_sales_pathassistantPathAssistantTab"
                                                                    data-original-width={234} data-name="converted"
                                                                    data-walkthrough-target-hint="self">
                                                                    <a className="tabHeader slds-path__link"
                                                                       aria-selected="false" data-tab-name="converted"
                                                                       tabIndex={-1} role="option" title="Converted"
                                                                       data-aura-rendered-by="743:0"
                                                                       href="javascript:void(0);" data-refid="tab-name">
                                                                        <span className="ahead slds-path__stage"
                                                                              data-aura-rendered-by="744:0">{/*render facet: 745:0*/}</span>
                                                                        <span className="title slds-path__title"
                                                                              data-aura-rendered-by="746:0">About the Website</span>{/*render facet: 748:0*/}
                                                                    </a>
                                                                </li>
                                                                {/*render facet: 440:0*/}
                                                            </ul>
                                                        </div>
                                                        {/*render facet: 447:0*/}
                                                    </div>
                                                </div>
                                                <div className="slds-path__scroll-controls"
                                                     data-aura-rendered-by="448:0">{/*render facet: 449:0*/}{/*render facet: 450:0*/}</div>
                                                <div className="tooltip tooltip-hidden" role="tooltip" id="pa-tooltip"
                                                     data-aura-rendered-by="451:0" aria-hidden="true"
                                                     style={{left: '361.5px'}}>
                                                    <div className="wrapper" data-aura-rendered-by="428:0">
                                                        <span className="defaultTabHoverString"
                                                              data-aura-rendered-by="429:0">Open - contacted</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slds-path__content slds-is-expanded"
                                             data-aura-rendered-by="480:0">
                                            <div data-aura-rendered-by="472:0">
                                                <span
                                                    className="slds-path__coach slds-grid runtime_sales_pathassistantPathAssistantBody"
                                                    data-aura-rendered-by="650:0"
                                                    data-aura-class="runtime_sales_pathassistantPathAssistantBody">{/*render facet: 651:0*/}{/*render facet: 652:0*/}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*render facet: 488:0*/}{/*render facet: 491:0*/}
                            </div>
                        </article>
                    </div>
                    {/* Sources & references */}
                    <div style={{padding: '10px 25px 0px 40px', display: this.state.displaySource ? '' : "none"}}>
                        <ol style={{fontSize: 13, fontFamily: 'inherit', fontWeight: 'normal'}}>
                            <li style={{marginBottom: '10px',
                                             display: this.state.iAdd>=1 ? '' : "none"}}>[p1] (en) <i><a
                                href={'https://www.catalogueoflife.org/data/taxon/XV4Y'}>Conraua derooi Hulselmans,
                                1972</a></i> (consulté le 16 décembre 2020)
                            </li>
                            <li style={{marginBottom: '10px', display: this.state.iAdd>=2 ? '' : "none"}}>[p2] (en) Halliday, T. (2016). The Book of Frogs: A
                                Life-Size Guide to Six Hundred Species from around the World. University of Chicago
                                Press. p. 527. <i><a
                                    href="https://en.wikipedia.org/wiki/Special:BookSources/978-0226184654"
                                    className="href">ISBN 978-0226184654</a></i></li>
                            <li style={{marginBottom: '10px', display: this.state.iAdd>=3 ? '' : "none"}}>[p5] (fr) <i><a
                                href="http://espace-svt.ac-rennes.fr/applic/dissect/grenouil/gren.htm"> Dissection de la
                                grenouille</a></i> sur <i><a
                                href="http://espace-svt.ac-rennes.fr/index.html"> le site de SVT</a></i> de l'Académie
                                de Rennes (consulté le 20 juin 2013)
                            </li>
                        </ol>
                    </div>
                    <p className="q-flex qu-bg--gray_ultralight qu-px--medium qu-py--small qu-alignItems--center"
                       style={{boxSizing: 'border-box', display: this.state.displaySource ? 'flex' : "none"}}>
                        <div
                            className="q-text qu-color--gray_dark qu-fontSize--regular qu-py--small qu-px--medium qu-bg--white qu-borderRadius--large qu-ml--small TextInputWrapper___StyledText-abzlxg-0 bOaUnz _2bloUA9j5uUJEE0M8fMbS6"
                            style={{
                                boxSizing: 'border-box',
                                flex: '1 1 0%',
                                minWidth: 0,
                                boxShadow: 'rgb(222, 224, 225) 0px 0px 0px 1px inset'
                            }}>
                            <div className="q-box editor_wrapper u-layout-direction--ltr qu-whiteSpace--pre-wrap"
                                 style={{boxSizing: 'border-box', outline: 'none', tabSize: 4}}>
                                <div className="q-box editor_inner editor_padding_reset"
                                     style={{boxSizing: 'border-box'}}>
                                    <div className="q-relative" style={{boxSizing: 'border-box', position: 'relative'}}>
                                        <div className="q-box" style={{boxSizing: 'border-box'}}>
                                            <div className="doc empty" data-placeholder="Add a comment..."
                                                 contentEditable="true" data-kind="doc">
                                                <div className="section" data-type="plain" data-dir="LTR"
                                                     data-dir-confirmed="false" data-indent={0} data-kind="section">
                                                    <div className="span active" data-kind="span">
                                                        <div className="content1">Fill a good source here</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <input type="file" accept=".jpg, .png, .jpeg, .gif, .bmp|images/*" multiple
                                               style={{display: 'none'}}/>
                                        <div
                                            className="q-absolute qu-full drop_zone qu-alignItems--center qu-justifyContent--center qu-borderWidth--retinaOverride qu-display--none qu-zIndex--inline_overlay"
                                            style={{
                                                boxSizing: 'border-box',
                                                position: 'absolute',
                                                borderColor: 'transparent',
                                                borderWidth: 4,
                                                borderStyle: 'dashed'
                                            }}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="q-box qu-ml--tiny" style={{boxSizing: 'border-box'}}>
                            <div className="q-flex qu-alignItems--center qu-justifyContent--flex-end"
                                 style={{boxSizing: 'border-box', display: 'flex'}}>
                                <button
                                    onClick={this.onclickAdd}
                                    className="q-click-wrapper qu-active--textDecoration--none qu-focus--textDecoration--none qu-disabled base___StyledClickWrapper-lx6eke-1 kNZJaja   qu-borderRadius--pill qu-alignItems--center qu-justifyContent--center qu-whiteSpace--nowrap qu-userSelect--none qu-display--inline-flex qu-bg--blue qu-tapHighlight--white qu-textAlign--center qu-cursor--pointer qu-hover--textDecoration--none"
                                    type="button" tabIndex={0} role="button" style={{
                                    boxSizing: 'border-box',
                                    font: 'inherit',
                                    outline: 'none',
                                    padding: '0px 15px',
                                    height: 30,
                                    minWidth: 30,
                                    position: 'relative',
                                    borderWidth: 0,
                                    color: 'inherit',
                                    background: 'var(--lwc-colorBackgroundPathIncomplete, #ecebea)'
                                }}>
                                    <div className="q-flex qu-alignItems--center qu-justifyContent--center"
                                         style={{boxSizing: 'border-box', display: 'flex', maxWidth: '100%'}}>
                                        <div
                                            className="q-text qu-display--inline-flex qu-alignItems--center qu-overflow--hidden puppeteer_test_button_text qu-medium qu-color--white"
                                            style={{boxSizing: 'border-box', fontSize: 13}}>
                                            <div className="q-text qu-ellipsis qu-whiteSpace--nowrap" style={{
                                                boxSizing: 'border-box',
                                                color: 'var(--lwc-colorTextDefault, #080707)'
                                            }}>Add
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </p>
                    {/* Sources & references end*/}
                    <div className="q-box" width={602} style={{
                        display: this.state.displayAuthors ? '' : 'none',
                        boxSizing: 'border-box',
                        width: 602,
                        margin: 'auto',
                        fontSize: '13px',
                        borderBottomStyle: 'solid',
                        borderWidth: 1,
                        borderColor: '#393839',
                        paddingBottom: 5
                    }}>
                        <div className="q-flex qu-alignItems--center"
                             onDragOver={()=>this.demoDragOver()}
                             onDragEnd={()=>this.demoDragEnd()}
                             style={{boxSizing: 'border-box',  display: 'flex'}}>
                            <div className="q-inlineFlex qu-flex--none"
                                 style={{boxSizing: 'border-box', display: 'inline-flex', position: 'relative'}}>
                                <div className="q-inlineFlex"
                                     style={{boxSizing: 'border-box', display: 'inline-flex', position: 'relative'}}>
                                    <div className="q-inlineFlex qu-overflow--hidden qu-borderRadius--circle" style={{
                                        boxSizing: 'border-box',
                                        display: 'inline-flex',
                                        position: 'relative'
                                    }}>
                                        <div className="q-box qu-bg--white__ignore_dark_mode qu-borderRadius--circle"
                                             style={{boxSizing: 'border-box', position: 'absolute', inset: 1}}/>
                                        <img

                                            className="q-image qu-display--block"
                                            //src="../../assets/demo/selfieresearcher.jpeg"
                                            src={`../../assets/${this.state.hideDemo ? 'demo/selfieresearcher.jpeg' : 'images/profilepic.png'} `}
                                             //src="../../assets/images/profilepic.png"
                                            style={{
                                                boxSizing: 'border-box',
                                                maxWidth: '100%',
                                                width: 100,
                                                height: 100,
                                                minWidth: 100,
                                                position: 'relative'
                                            }}/>
                                        <div
                                            className="q-box qu-borderRadius--circle qu-borderAll qu-borderColor--darken Photo___StyledBox-sc-1x7c6d3-0 jXogTe"
                                            style={{boxSizing: 'border-box', position: 'absolute', inset: 0}}/>
                                        <div
                                            className="q-absolute qu-fullX qu-fullY qu-borderAll qu-borderColor--darken qu-borderRadius--circle BadgeWrapper___StyledAbsolute-kazm88-0 bgqkju"
                                            style={{boxSizing: 'border-box', position: 'absolute', zIndex: 1}}/>
                                    </div>
                                </div>
                            </div>
                            <div className="q-box qu-ml--medium" style={{boxSizing: 'border-box'}}>
                                <div className="q-flex qu-flexDirection--row"
                                     style={{boxSizing: 'border-box', display: 'flex'}}>
                                    <div className="q-text qu-bold" style={{boxSizing: 'border-box', fontSize: 24}}>
                                        <span contentEditable={true}>Marc Colombani</span>
                                    </div>
                                </div>
                                <div className="q-text qu-fontSize--large" style={{boxSizing: 'border-box'}}>
                                    <div className="q-text"
                                         contentEditable={true}
                                         style={{boxSizing: 'border-box', wordBreak: 'break-word'}}>Master Mention
                                        Biologie, Spécialité environnement, temps, territoires et sociétés
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{marginLeft: '595px', marginTop: '-90px', position: "absolute"}}>
                            <a href={""}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 512 640" style={{enableBackground: 'new 0 0 512 512', height: 40, width: 40, fill: 'rgb(176, 173, 171)'}} xmlSpace="preserve">
                                    <g>
                                        <polygon points="91.1,345.9 164.9,417.4 391.5,196.1 317.7,124.6  " />
                                        <path d="M407.5,77.6c-11.8-11.4-30.1-11.4-41.8,0.1L332,110.6l73.8,71.5l32.5-31.7c5.8-5.7,9.1-13.3,9-21.5   c0-8.2-3.3-15.8-9.1-21.5L407.5,77.6z" />
                                        <polygon points="64.7,442.9 144.6,425.5 82.6,365.4  " />
                                    </g>
                                </svg>
                            </a>
                        </div>
                        <div className="q-box qu-mt--small" style={{boxSizing: 'border-box'}}>
                            <div className="q-box" style={{boxSizing: 'border-box', maxWidth: '100%'}}>
                                <div className="q-text" style={{boxSizing: 'border-box', maxWidth: '100%'}}>
                                    <span className="q-box qu-userSelect--text" style={{boxSizing: 'border-box'}}>
                                        <p className="q-text qu-display--block" style={{
                                            boxSizing: 'border-box',
                                            marginBottom: '1em',
                                            overflowWrap: 'anywhere',
                                            wordBreak: 'break-word',
                                            direction: 'ltr',
                                            textAlign: 'start'}}>
                                            <span contentEditable={true}
                                                  style={{fontWeight: 'normal', fontStyle: 'normal', background: 'none'}}>
                                                Contributeur. Chercheur en sciences de la vie spécialité biologie cellulaire, moléculaire et physiologie à l'université d'Angers. Contributeur senior à Magazine Animaux Marin depuis 20ans.
                                            </span>
                                        </p>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="social-sharing-icons-container share-buttons">
                            <div className="social-sharing-icon-bg" title="Share on Facebook">
                                <a href className="social-sharing-icons facebook"/>
                            </div>
                            <div className="social-sharing-icon-bg" title="Tweet">
                                <a href className="social-sharing-icons twitter"/>
                            </div>
                            <div className="social-sharing-icon-bg" title="Share on LinkedIn">
                                <a href className="social-sharing-icons linkedin"/>
                            </div>
                        </div>

                    </div>
                    <div className="q-box qu-ml--tiny"
                         style={{display: this.state.displayAuthors ? 'grid' : 'none', boxSizing: 'border-box', width: 602, margin: 'auto', padding: 0}}>
                        <div className="q-flex qu-alignItems--center qu-justifyContent--flex-end"
                             style={{marginTop: 5}}>
                            <button
                                className="q-click-wrapper qu-active--textDecoration--none qu-focus--textDecoration--none qu-disabled base___StyledClickWrapper-lx6eke-1 kNZJaja   qu-borderRadius--pill qu-alignItems--center qu-justifyContent--center qu-whiteSpace--nowrap qu-userSelect--none qu-display--inline-flex qu-bg--blue qu-tapHighlight--white qu-textAlign--center qu-cursor--pointer qu-hover--textDecoration--none"
                                type="button" tabIndex={0} role="button" style={{
                                boxSizing: 'border-box',
                                font: 'inherit',
                                outline: 'none',
                                padding: '0px 15px',
                                height: 30,
                                minWidth: 30,
                                position: 'relative',
                                borderWidth: 0,
                                color: 'inherit',
                                background: 'var(--lwc-colorBackgroundPathIncomplete, #ecebea)',
                                float: 'right'
                            }}>
                                <div className="q-flex qu-alignItems--center qu-justifyContent--center"
                                     style={{boxSizing: 'border-box', display: 'flex', maxWidth: '100%'}}>
                                    <div
                                        className="q-text qu-display--inline-flex qu-alignItems--center qu-overflow--hidden puppeteer_test_button_text qu-medium qu-color--white"
                                        style={{boxSizing: 'border-box', fontSize: 13}}>
                                        <div className="q-text qu-ellipsis qu-whiteSpace--nowrap" style={{
                                            boxSizing: 'border-box',
                                            color: 'var(--lwc-colorTextDefault, #080707)'
                                        }}>Add an author
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                    {/* End Sources & references end*/}
                    {/*About the website*/}
                    <div style={{display: this.state.displayAbout ? '' : 'none'}}>
                        {/*<Editor
                            editorState={this.state.editorState}
                            onEditorStateChange={this.onEditorStateChange}
                            wrapperClassName="demo-wrapper"
                            editorClassName="demo-editor"
                        />*/}
                        <div className="q-box" width={602} style={{boxSizing: 'border-box', width: 602, margin: 'auto', fontSize: 13, borderTopWidth: 1, borderRightWidth: 1, borderLeftWidth: 1, borderTopColor: 'rgb(57, 56, 57)', borderRightColor: 'rgb(57, 56, 57)', borderLeftColor: 'rgb(57, 56, 57)', paddingBottom: 5}}>
                            <div style={{marginLeft: 595, marginTop: '-15px', position: 'absolute'}}>
                                <a href>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 512 640" xmlSpace="preserve" style={{height: 40, width: 40, fill: 'rgb(176, 173, 171)'}}>
                                        <g>
                                            <polygon points="91.1,345.9 164.9,417.4 391.5,196.1 317.7,124.6  " />
                                            <path d="M407.5,77.6c-11.8-11.4-30.1-11.4-41.8,0.1L332,110.6l73.8,71.5l32.5-31.7c5.8-5.7,9.1-13.3,9-21.5   c0-8.2-3.3-15.8-9.1-21.5L407.5,77.6z" />
                                            <polygon points="64.7,442.9 144.6,425.5 82.6,365.4  " />
                                        </g>
                                    </svg>
                                </a>
                            </div>

                            <div className="q-box qu-mt--small" style={{boxSizing: 'border-box'}}>
                                <div className="q-box" style={{boxSizing: 'border-box', maxWidth: '100%'}}>
                                    <div className="q-text" style={{boxSizing: 'border-box', maxWidth: '100%'}}>
                                        <span className="q-box qu-userSelect--text" style={{boxSizing: 'border-box'}}>
                                            <p className="q-text qu-display--block" style={{boxSizing: 'border-box', marginBottom: '1em', overflowWrap: 'anywhere', wordBreak: 'break-word', direction: 'ltr', textAlign: 'start'}}>
                                                <span style={{fontWeight: 'normal', fontStyle: 'normal', background: 'none'}}>
                                                    JapprendsAnimal.fr est un site consacré aux espèces animales visibles en France et en Europe. Il ne s’adresse pas forcément aux zoologistes émérites mais plutôt aux néophytes qui se posent des questions après avoir aperçu,
                                                    ici ou là, un animal qui a retenu leur attention.
                                                </span>
                                            </p>
                                            <p className="q-text qu-display--block" style={{boxSizing: 'border-box', marginBottom: '1em', overflowWrap: 'anywhere', wordBreak: 'break-word', direction: 'ltr', textAlign: 'start'}}>
                                                <span style={{fontWeight: 'normal', fontStyle: 'normal', background: 'none'}}>
                                                    Ce n’est donc pas un site spécialisé dans la détermination de tel ou tel groupe zoologique, mais un panorama généraliste des espèces que l’on rencontre couramment, et elles sont suffisamment nombreuses !
                                                    Le moindre petit jardin, même en ville, héberge des centaines d’espèces d’insectes et plusieurs dizaines d’espèces d’araignées.
                                                </span>
                                            </p>
                                            <p className="q-text qu-display--block" style={{boxSizing: 'border-box', marginBottom: '1em', overflowWrap: 'anywhere', wordBreak: 'break-word', direction: 'ltr', textAlign: 'start'}}>
                                                <span style={{fontWeight: 'normal', fontStyle: 'normal', background: 'none'}}>
                                                    Sauf rares exceptions, les espèces présentées ont un nom vernaculaire en français, ce qui témoigne du fait qu’elles ne sont pas connues que par les spécialistes. Bien entendu,
                                                    l’usage de ces noms vernaculaires n’est pas très rigoureux et peut être source de confusions (même nom donné à plusieurs espèces ou désignant selon les régions des espèces distinctes),
                                                    le nom scientifique en latin est donc toujours mentionné, et selon les conventions, l’initiale du nom de genre est en majuscule, celle du nom d’espèce en minuscule, et les deux sont en italique dans le texte.
                                                </span>
                                            </p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/*End About the website*/}
                    {/*Validation Buttons*/}
                    <p className="q-flex qu-bg--gray_ultralight qu-px--medium qu-py--small qu-alignItems--center"
                       style={{
                           boxSizing: 'border-box',
                           display: this.state.displaySource ? 'flex' : 'none',
                           position: 'absolute',
                           //background: '#1F1F1F',
                           bottom: '-20px',
                           width: '100%',
                           justifyContent: 'flex-end',
                           paddingRight: '36px'
                       }}>
                        <div style={{fontSize: 13, fontFamily: 'inherit', fontWeight: 'normal'}}>Cancel</div>
                        <div className="q-box qu-ml--tiny" style={{boxSizing: 'border-box', fontSize: '13px'}}>
                            <div className="q-flex qu-alignItems--center qu-justifyContent--flex-end"
                                 style={{boxSizing: 'border-box', display: 'flex'}}>
                                <button
                                    onClick={this.onclickNextDemo}
                                    className="q-click-wrapper qu-active--textDecoration--none qu-focus--textDecoration--none qu-disabled base___StyledClickWrapper-lx6eke-1 kNZJaj   qu-borderRadius--pill qu-alignItems--center qu-justifyContent--center qu-whiteSpace--nowrap qu-userSelect--none qu-display--inline-flex qu-bg--blue qu-tapHighlight--white qu-textAlign--center qu-cursor--pointer qu-kNZJaj:hover--textDecoration--none"
                                    type="button" tabIndex={0} role="button" style={{
                                    boxSizing: 'border-box',
                                    font: 'inherit',
                                    outline: 'none',
                                    padding: '0px 15px',
                                    height: 30,
                                    minWidth: 30,
                                    position: 'relative',
                                    borderWidth: 0,
                                    color: 'inherit'
                                }}>
                                    <div className="q-flex qu-alignItems--center qu-justifyContent--center"
                                         style={{boxSizing: 'border-box', display: 'flex', maxWidth: '100%'}}>
                                        <div
                                            className="q-text qu-display--inline-flex qu-alignItems--center qu-overflow--hidden puppeteer_test_button_text qu-medium qu-color--white"
                                            style={{boxSizing: 'border-box', fontSize: 13}}>
                                            <div className="q-text qu-ellipsis qu-whiteSpace--nowrap"
                                                 style={{boxSizing: 'border-box'}}>Next
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </p>
                    {/*Just For the demo*/}
                    <p className="q-flex qu-bg--gray_ultralight qu-px--medium qu-py--small qu-alignItems--center"
                       style={{
                           boxSizing: 'border-box',
                           display: this.state.displayAuthors ? 'flex' : 'none',
                           position: 'absolute',
                           background: '#1F1F1F',
                           bottom: '-20px',
                           width: '100%',
                           justifyContent: 'flex-end',
                           paddingRight: '36px'
                       }}>
                        <div style={{fontSize: 13, fontFamily: 'inherit', fontWeight: 'normal'}}>Cancel</div>
                        <div className="q-box qu-ml--tiny" style={{boxSizing: 'border-box', fontSize: '13px'}}>
                            <div className="q-flex qu-alignItems--center qu-justifyContent--flex-end"
                                 style={{boxSizing: 'border-box', display: 'flex'}}>
                                <button
                                    onClick={this.onclickNext2Demo}
                                    className="q-click-wrapper qu-active--textDecoration--none qu-focus--textDecoration--none qu-disabled base___StyledClickWrapper-lx6eke-1 kNZJaj   qu-borderRadius--pill qu-alignItems--center qu-justifyContent--center qu-whiteSpace--nowrap qu-userSelect--none qu-display--inline-flex qu-bg--blue qu-tapHighlight--white qu-textAlign--center qu-cursor--pointer qu-kNZJaj:hover--textDecoration--none"
                                    type="button" tabIndex={0} role="button" style={{
                                    boxSizing: 'border-box',
                                    font: 'inherit',
                                    outline: 'none',
                                    padding: '0px 15px',
                                    height: 30,
                                    minWidth: 30,
                                    position: 'relative',
                                    borderWidth: 0,
                                    color: 'inherit'
                                }}>
                                    <div className="q-flex qu-alignItems--center qu-justifyContent--center"
                                         style={{boxSizing: 'border-box', display: 'flex', maxWidth: '100%'}}>
                                        <div
                                            className="q-text qu-display--inline-flex qu-alignItems--center qu-overflow--hidden puppeteer_test_button_text qu-medium qu-color--white"
                                            style={{boxSizing: 'border-box', fontSize: 13}}>
                                            <div className="q-text qu-ellipsis qu-whiteSpace--nowrap"
                                                 style={{boxSizing: 'border-box'}}>Next
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </p>
                    <p className="q-flex qu-bg--gray_ultralight qu-px--medium qu-py--small qu-alignItems--center"
                       style={{
                           boxSizing: 'border-box',
                           display: this.state.displayAbout ? 'flex' : 'none',
                           position: 'absolute',
                           background: '#1F1F1F',
                           bottom: '-20px',
                           width: '100%',
                           justifyContent: 'flex-end',
                           paddingRight: '36px'
                       }}>
                        <div style={{fontSize: 13, fontFamily: 'inherit', fontWeight: 'normal'}}>Cancel</div>
                        <div className="q-box qu-ml--tiny" style={{boxSizing: 'border-box', fontSize: '13px'}}>
                            <div className="q-flex qu-alignItems--center qu-justifyContent--flex-end"
                                 style={{boxSizing: 'border-box', display: 'flex'}}>
                                <button
                                    onClick={this.onclickSaveDemo}
                                    className="q-click-wrapper qu-active--textDecoration--none qu-focus--textDecoration--none qu-disabled base___StyledClickWrapper-lx6eke-1 kNZJaj   qu-borderRadius--pill qu-alignItems--center qu-justifyContent--center qu-whiteSpace--nowrap qu-userSelect--none qu-display--inline-flex qu-bg--blue qu-tapHighlight--white qu-textAlign--center qu-cursor--pointer qu-kNZJaj:hover--textDecoration--none"
                                    type="button" tabIndex={0} role="button" style={{
                                    boxSizing: 'border-box',
                                    font: 'inherit',
                                    outline: 'none',
                                    padding: '0px 15px',
                                    height: 30,
                                    minWidth: 30,
                                    position: 'relative',
                                    borderWidth: 0,
                                    color: 'inherit'
                                }}>
                                    <div className="q-flex qu-alignItems--center qu-justifyContent--center"
                                         style={{boxSizing: 'border-box', display: 'flex', maxWidth: '100%'}}>
                                        <div
                                            className="q-text qu-display--inline-flex qu-alignItems--center qu-overflow--hidden puppeteer_test_button_text qu-medium qu-color--white"
                                            style={{boxSizing: 'border-box', fontSize: 13}}>
                                            <div className="q-text qu-ellipsis qu-whiteSpace--nowrap"
                                                 style={{boxSizing: 'border-box'}}>Save
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </p>
                    {/*END Just For the demo*/}
                    {/*End Validation Buttons*/}
                </div>

            </div>
        )

    }
}

function validate(values) {
    const errors = {};

    // Validate the inputs from

    if (!values.iconName) {
        errors.iconName = "Search whatever images";
    }

    // If errors is empty, the form is fine to submit
    //If errors has *any* properties, redux form assumes form is invalid
    return errors;
}

function mapStateToProps(state) {
    return {
        requestingAPI: state.requestingAPI,
        files: state.files
    }
}


export default withRouter(reduxForm({
    validate,
    form: 'TheNounProjectForm'
})(
    connect(mapStateToProps, {
        fetchIconsFromTheNounProject,
        requestingAPI,
        notRequestingAPI,
        fetchUserMedia,
        createMediaURL
    })(FooterMenuBox)
));





