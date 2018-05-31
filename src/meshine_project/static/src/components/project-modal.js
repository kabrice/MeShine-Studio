import  React, { Component } from 'react';
import _ from 'lodash';
import Progress from 'react-progress';
import TagsInput from 'react-tagsinput'
import Autosuggest from 'react-autosuggest';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/fontawesome-free-solid'
import {createSummaryProject, notRequestingAPI, requestingAPI, fetchTagByAutocompletion,
        fetchTopicByAutocompletion, updateCategories, fetchQuestionByAutocompletion, updateSummary} from "../actions/index";
import {withRouter} from "react-router-dom";


function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
    const escapedValue = escapeRegexCharacters(value.trim());

    if (escapedValue === '') {
        return [];
    }

    const regex = new RegExp('^' + escapedValue, 'i');

    return languages.filter(language => regex.test(language.name));
}

function getSuggestionValue(suggestion) {
    return suggestion.title;
}

function renderSuggestion(suggestion) {
    return (
        <div>{suggestion.title}</div>
    );
}


class ProjectModal extends Component{

    constructor(props) {
        super(props);

        this.state = {
            modalUrl: "",
            modalTag: "me-modal-tag",
            modalQuestion: "me-modal-question",
            isQuestionRound: false,
            hideCounter: "hide-counter",
            errorMsg:"",
            idSummary: 0,
            hideAlert: "hide-alert",
            loadingPercentage:0,
            tagsFromAI: [],
            metaTags: [],
            tags: ["lala", "lelele"],
            tagCategories:[],
            newTopic: "",
            tagsForFilter: [{id: 1, title: 'I Love'}, {id: 2, title: 'MeShine'}],
            value: '',
            questionValue: '',
            valueMeta:'',
            oldTag: '',
            oldTopic: '',
            oldQuestion: '',
            suggestedTopic: [],
            questions: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.autocompleteRenderInput = this.autocompleteRenderInput.bind(this);
    }

    getCurrentTags = (isMetatopic) =>{
        //e.preventDefault();
        //alert();
        let $reference = $(".react-tagsinput--focused");

        if(isMetatopic){
            $reference = $(".react-tagsinput").first();
        }

        let tags = [];
        $reference
            .parent()
            .parent()
            .find('li:nth-child(2)')
            .find('div').first()
            .find('span').first()
            .find('span').each(function() {
            tags.push(($(this).text()).toLowerCase())
            //console.log( index + ": " +  );
        });
        console.log(tags);
        return tags;
    };

    getCurrentTopics = () =>{
        let topics = [];
        let $reference = $("#tags-topics");
        if(this.state.isQuestionRound){
            $reference = $("#question-list");
        }
        $reference.find(".topic").each(function(){
            topics.push(($(this).text()).toLowerCase());
        });
        return topics;
    };

    handleChange(tags) {

/*        function updatedTagCategories(title, tagCategories, tags){

            _.forEach(tagCategories, function(category){
                if(category.title === title){
                    category.tags = tags;
                }
            });
            //console.log("updateTagCategories tagCategories", tagCategories);
        }*/

        //let tagCatTemp = this.state.tagCategories;
        let existedtags = this.getCurrentTags(false);
        console.log("tags", tags);
        //if(tags.length>1) {
        let lastTag = tags[tags.length - 1];/*
            tags.splice(tags.length - 1, 1);
            console.log("splice tags", tags);*/
        if(lastTag.length>2){
            if (!_.includes(existedtags, lastTag.toLowerCase()) && existedtags.length <=20) {
                const $tagsInputFocused = $(".react-tagsinput--focused");
                //const catTitle = $tagsInputFocused.parent().parent().find('li').first().text();
                const $span = $tagsInputFocused.find('span');
                const text = '<span class="react-tagsinput-tag">' + lastTag + '<a class="react-tagsinput-remove"></a></span>';
                if($tagsInputFocused.length>0) {
                    _.forEach($tagsInputFocused.parent().parent().find('li')[1]
                        .getElementsByTagName('div')[0]
                        .getElementsByTagName('span')[0].getElementsByTagName('span'), function (tag) {
                        // console.log("tag span", tag);
                        tags.push(tag.textContent);
                    });

                    if ($span[1]) {
                        $span.last().after(text);
                    } else {
                        $span.first().prepend(text);
                    }
                }
            }

        }
        $('.react-tagsinput-remove').click(function(e){
            //console.log('$(this)', $(this).parent().html());
            e.preventDefault();
            $(this).parent().remove();
            //alert($this);
        });
    }


    renderField(field){

        //Destructing
        const {meta: {touched, error}} = field;
        const className = `${touched && error ? 'me-input-invalid' : ''}`;

        return(
            <div className="has-danger">
            <label>{field.label}</label>
            <input
                {...field.input}
                type="text"
                autoComplete="off"
                placeholder={field.placeholder}
                required="required"
                className={className}/>
                <div className="text-help">
                {touched ? error : ''}
                </div>
            </div>
        )
    }

    handleClickTopicRemove = (e, value) => {
            const result = confirm("Are you sure you want to delete this topic? All its related tags will be deleted too");
            if(result) {
                console.log("handleClickTopicRemove",value);
                value = value.substring(0, value.length - 1);
                $('#topic-'+value.replace(/\s/g, "")).parent().parent().remove();
            }
    }

    renderInitialTags(tagCategories, autocompleteRenderInput){
        return _.map(tagCategories, tagCategorie => {
            let id = String(tagCategorie.id).substring(0, String(tagCategorie.id).length - 1);
            return (
                <ul key={tagCategorie.id} className="me-topic">
                    <li title={tagCategorie.title+" topic"}
                        className="topic"
                        onMouseOver={() => this.setState({ idHoverTopic: tagCategorie.id})}
                        onMouseLeave={() => this.setState({ idHoverTopic: 0 })}>
                        <span>{tagCategorie.title}</span>
                        <span title="Delete this topic"
                              id={"topic-"+id.replace(/\s/g, "")}
                              onClick={() =>{this.handleClickTopicRemove(this, tagCategorie.id)}}
                              className="me-topicinput-remove">
                             {this.state.idHoverTopic === tagCategorie.id && <a>&emsp;x</a>}
                            </span></li>
                    <li className="tag-input-parent">
                        <TagsInput value={tagCategorie.tags}
                                   renderInput={autocompleteRenderInput}
                                   inputProps={{className: 'react-tagsinput-input',
                                              placeholder: 'Add tags to this topic'}}
                                   onChange={this.handleChange} />
                    </li>
                </ul>
            )
        })
    }

    renderInitalMetaTags(tags, autocompleteRenderInput){
            return (
                <ul  className="me-topic">
                    <li className="topic-input topic" title='Press "Enter" to validate'>
                        {this.renderAutocompleteForMetaTopic()}
                    </li>
                    <li className="tag-input-parent">
                        <TagsInput value={tags}
                                   renderInput={autocompleteRenderInput}
                                   inputProps={{className: 'react-tagsinput-input',
                                       placeholder: 'Add tags to this topic'}}
                                   onChange={this.handleChange} />
                    </li>
                </ul>
            )
    }

    renderQuestionList(questions){
        return _.map(questions, question => {
            let id = String(question.id).substring(0, String(question.id).length - 1);
            return (
                    <li key={question.id}  title={question.title}
                        className="topic"
                        onMouseOver={() => this.setState({ idHoverTopic: question.id})}
                        onMouseLeave={() => this.setState({ idHoverTopic: 0 })}>
                        <span>{question.title}</span>
                        <span>
                        <span title="Delete this question"
                              id={"topic-"+id.replace(/\s/g, "")}
                              onClick={() =>{this.handleClickTopicRemove(this, question.id)}}
                              className="me-topicinput-remove">
                             {this.state.idHoverTopic === question.id && <a>&emsp;x</a>}
                            </span></span></li>
            )
        })
    }

    renderQuestionInput(){
        return (
            <ul  className="me-topic">
                <li className="topic-input topic" title='Press "Enter" to validate'>
                    {this.renderAutocompleteForQuestion()}
                </li>
                <div className={this.state.hideCounter}>{this.state.questionValue.length} character(s)</div>
            </ul>
        )
    }

    onSubmitUrl(value){
        //console.log('this state', this.state);
        this.props.requestingAPI();
        if(!(value.url).startsWith("https://") && !(value.url).startsWith("http://")){
            value.url = "https://"+value.url;
        }

        function isTagExist(categoryId, tagCategories) {
            let exist = false;
            _.forEach(tagCategories, function(item){
                if(item.id === categoryId){
                    exist = true;
                    return true;
                }
            });
            return exist;
        }

        function updateTag(categoryId, tagCategories,tag) {
            _.forEach(tagCategories, function(item){
                if(item.id === categoryId){
                    item.tags.push(tag);
                }
            });
            return tagCategories;
        }


        function transformToArray(objectList){
            let array = [];
            _.forEach(objectList, function(item){
                    array.push(item.title);
            });
            return array;
        }


        this.props.createSummaryProject(value, (response) =>{
            console.log("response",response);
            let results = response.data;
            results.tagCategories = [];
            let stringSimilarity = require('string-similarity');
            let tagsFromDB = [];
            let tagsFromAI = [];
            let metaTags = [];
            _.forEach(results.tags, function(tag) {
                _.forEach(results.categories, function(category){
                    let tempTags = transformToArray(category.tags);
                    let sim = stringSimilarity.findBestMatch(tag, tempTags);
                    let target = sim.bestMatch.target;
                    if(sim.bestMatch.rating>=0.8){
                        //let tagObject = {"id": getTagIdFromTitle(target, category.tags), "title": target};
                        if(!isTagExist(category.id, results.tagCategories)){
                            results.tagCategories.push({"id": category.id, "title": category.title, "tags": [target]});
                        }else {
                            results.tagCategories = updateTag(category.id, results.tagCategories, target);
                        }
                        tagsFromDB.push(target);
                        tagsFromDB = _.uniq(tagsFromDB);
                    }
                });
                tagsFromAI.push({id:tag.replace(/\s/g, ""), title:tag});
                metaTags.push(tag);
            });
            results.tagCategories = _.mapKeys(results.tagCategories, 'id');
            console.log("results", results);

            this.setState({ modalUrl: "me-modal-url",
                            modalTag: "",
                            idSummary: results.id,
                            hideAlert: "hide-alert",
                            errorMsg: "",
                            tagsFromDB: tagsFromDB,
                            tagsFromAI: tagsFromAI,
                            metaTags: metaTags,
                            isQuestionRound: true,
                            loadingPercentage: 33.33,
                            tagCategories: results.tagCategories});
            this.props.notRequestingAPI();
        }, (error) =>{
                if(error === undefined){
                    error = {};
                    error.data="Unexpected error! Please try again or contact us if it persists .";
                }
                this.setState({errorMsg: error.data === Array?error.data[0]:JSON.stringify(error.data), hideAlert: ""});
            this.props.notRequestingAPI();
        });

    }

    onSubmitTagCategories = (e) => {
        this.props.requestingAPI(); //Todo: Change late
        function getCategoryIdFromTitle(title, category){
            //console.log("getCategoryIdFromTitle",title, category);
            let id = 0;

            _.forEach(category, function(item){
                if(item.title === title){
                    id = item.id;
                }
            });

            if(id===0){
                id = title+'-c';
            }

            return id;
        }
        //console.log("e.key", e.key);
       // if (e.key !== 'Enter' && e.key !== undefined) {
            let tagsFromDB = this.state.tagsFromDB;
            let tagCatTemp = this.state.tagCategories;
            let tagCategoriesDom = document.getElementById("tags-topics").getElementsByTagName("ul");
            let tagCategories = [];
            let hasEmptyTag = false;
            let hasEmptyTopic = false;
            this.setState({errorMsg: "", hideAlert: "hide-alert"});
            if (tagCategoriesDom)
                _.forEach(tagCategoriesDom, function (tagCategorieDom) {
                    //console.log("tagCategorieDom", tagCategorieDom);
                    if (tagCategorieDom.getElementsByTagName('li')) {
                        //goodlet title = '';
                        //if(tagCategorieDom.getElementsByTagName('li')[0] != undefined){
                        //    title = tagCategorieDom.getElementsByTagName('li')[0].textContent;
                        //}
                        let title = tagCategorieDom.getElementsByTagName('li')[0].textContent;
                        console.log("tagCategorieDom title", title);

                            let id = getCategoryIdFromTitle(title, tagCatTemp);
                            let tags = [];
                            if (tagCategorieDom.getElementsByTagName('li')[1]) {
                                _.forEach(tagCategorieDom.getElementsByTagName('li')[1]
                                    .getElementsByTagName('div')[0]
                                    .getElementsByTagName('span')[0].getElementsByTagName('span'), function (tag) {
                                    // console.log("tag span", tag);
                                    tagsFromDB = _.mapValues(tagsFromDB, function (val) {
                                        if (typeof(val) === 'string') {
                                            return val.toLowerCase();
                                        }
                                        if (_.isArray(val)) {
                                            return _.map(val, _.method('toLowerCase'));
                                        }
                                    });
                                    tags.push({
                                        title: (tag.textContent).toLowerCase(),
                                        isFromHuman: !_.includes(tagsFromDB, (tag.textContent).toLowerCase())
                                    });
                                });
                                if (tags.length < 1) {
                                    hasEmptyTag = true;
                                } else if(title.length<1 && tags.length>0){
                                    hasEmptyTopic = true;
                                } else {
                                    tagCategories.push({'id': id, 'title': title, 'tags': tags});
                                }
                            }

                    }
                });
        console.log('onSubmit tagCategories', tagCategories, this.state.idSummary);
        if(!hasEmptyTag && !hasEmptyTopic && tagCategories.length>0){
            this.props.updateCategories({tagCategories, idSummary: this.state.idSummary}, (response) =>{
                //this.setState({errorMsg: "You can't submit topic with no tags.",  hideAlert: ""});
                this.setState({
                                modalTag: "me-modal-tag",
                                modalQuestion: "",
                                hideAlert: "hide-alert",
                                errorMsg: "",
                                loadingPercentage: 66.66});
                this.props.notRequestingAPI();
                console.log(response);
            }, (error) => {
                this.props.notRequestingAPI();
                console.log(error);
            })
        }else if(hasEmptyTag){
            this.props.notRequestingAPI();
            this.setState({errorMsg: "You can't submit topic with no tags.",  hideAlert: ""});
        }else if(hasEmptyTopic){
            this.props.notRequestingAPI();
            this.setState({errorMsg: "You can't submit tag(s) with no topic.",  hideAlert: ""});
        }else if(tagCategories.length<1) {
            this.props.notRequestingAPI();
            this.setState({errorMsg: "You need to add at least one topic to your summary.", hideAlert: ""});
        }

       // }
    };

    onSubmitQuestions = (e) => {
        this.props.requestingAPI();
        this.setState({errorMsg: "", hideAlert: "hide-alert", metaTags:[]});
        console.log("questions", this.state.questions);
        if(this.state.questions.length>0){
            this.props.updateSummary({id: this.state.idSummary, questions: this.state.questions}, 1,
                (response) =>{
                this.props.notRequestingAPI();
                this.props.history.push("/summary/"+this.state.idSummary);
                console.log("GOOD", response);
            }, (error) => {
                this.props.notRequestingAPI();
                console.log(error);
            })
        }else {
            this.props.notRequestingAPI();
            this.setState({errorMsg: "You need to add at least one question to your summary.", hideAlert: ""});
        }
    };

     autocompleteRenderInput({addTag, ...props}){
        const handleOnChange = (e, {newValue, method}) => {
            if (method === 'enter') {
                e.preventDefault();
            } else {
                props.onChange(e);
            }
        };

        const inputValue = (props.value && props.value.trim().toLowerCase()) || '';
        const inputLength = inputValue.length;

        let tagsForFilter = [];
        let oldTag = "";
         //alert("heo");
        let currentTags = this.getCurrentTags(false);
        //console.log("currentTags oldTag", inputValue, this.state.oldTag);
        if(inputValue && inputValue!== this.state.oldTag && inputValue.length<50) {
            this.props.fetchTagByAutocompletion(inputValue, (response) => {
                tagsForFilter = response.data.results;
                tagsForFilter = _.uniqBy(tagsForFilter.concat(this.state.tagsFromAI), "title");
                //Check uniqueness
                tagsForFilter = _.filter(tagsForFilter, function(tag) { return !_.includes(currentTags,  tag.title); });
                oldTag = inputValue;
                //console.log("tagsForFilter", tagsForFilter)
                this.setState({tagsForFilter, oldTag});
            });
        }
         //console.log("this.state.tagsForFilter", this.state.tagsForFilter);
        if(this.state.tagsForFilter) {
            tagsForFilter = this.state.tagsForFilter;
        }
        let suggestions = tagsForFilter.filter((state) => {
            //console.log("state", state);
            return state.title.toLowerCase().slice(0, inputLength) === inputValue
        });

        return (
            <Autosuggest
                ref={props.ref}
                suggestions={suggestions}
                shouldRenderSuggestions={(value) => value && value.trim().length > 0}
                getSuggestionValue={(suggestion) => suggestion.title}
                renderSuggestion={(suggestion) => <div>{suggestion.title}</div>}
                inputProps={{...props, onChange: handleOnChange}}
                onSuggestionSelected={(e, {suggestion}) => {
                    addTag(suggestion.title)
                }}
                onSuggestionsClearRequested={() => {}}
                onSuggestionsFetchRequested={() => {}}
            />
        )
    }

    handleKeyPress = (e) => {
        //console.log("e.key Enter", e.key);
        let existedTopics = this.getCurrentTopics();
        let title = e.target.value;
        const isTopicExist = _.includes(existedTopics, title.toLowerCase());
        this.setState({errorMsg: "", hideAlert: "hide-alert"});
        if (e.key === 'Enter' && !isTopicExist && existedTopics.length<=15 && title.length>2 && title.length<=50) {
            const tagCategories = _.values(this.state.tagCategories);
            //console.log('do tagCategories1', tagCategories);
            tagCategories.push({id:title, title: title, tags: []});
            //console.log('do this.state.tagCategories', tagCategories);
            let value = "";
            this.setState({tagCategories, value}, () => {
            //    console.log('do validate', this.state.tagCategories);
            });
            e.target.value = "";
            //console.log('do validate', this.state.tagCategories);
        }else if(isTopicExist){
            this.setState({errorMsg: "This topic already exists",  hideAlert: ""});
        }else if(existedTopics.length>15){
            this.setState({errorMsg: "You can't add more than 15 topics",  hideAlert: ""});
        }else if(title.length>50){
            this.setState({errorMsg: "The title it too long",  hideAlert: ""});
        }

    };

    handleKeyPressQuestion = (e) => {
        //console.log("e.key Enter", e.key);
        let existedQuestions = this.getCurrentTopics();
        let title = e.target.value;
        const isQuestionExist = _.includes(existedQuestions, title.toLowerCase());
        this.setState({errorMsg: "", hideAlert: "hide-alert"});
        if (e.key === 'Enter'
            && !isQuestionExist
            && existedQuestions.length<=3
            && title.length<180
            && title.length>2
            && title.endsWith("?")) {
            const questions = _.values(this.state.questions);
            questions.push({id:title, title: title});
            let questionValue = "";
            this.setState({questions, questionValue}, () => {
            });
            e.target.value = "";
        }else if(e.key === 'Enter' && isQuestionExist){
            this.setState({errorMsg: "This question already exists",  hideAlert: ""});
        }else if(e.key === 'Enter' && existedQuestions.length>3){
            this.setState({errorMsg: "You can't add more than 3 questions",  hideAlert: ""});
        }else if(e.key === 'Enter' && title.length>180){
            this.setState({errorMsg: "Your question is too long",  hideAlert: ""});
        }else if(e.key === 'Enter' && title.endsWith(" ?")){
            this.setState({errorMsg: "You need to end your question with ' ?'",  hideAlert: ""});
        }

    };

    handleKeyUpQuestion = (e) => {
        if(this.state.questionValue.length>100){
            this.setState({hideCounter: ""});
        }else{
            this.setState({hideCounter: "hide-counter"});
        }
    };
/*    handleKeyDownQuestion = (e) => {
        console.log("e.key handleKeyDownQuestion");

        this.setState({hideCounter: "hide-counter"});
    };*/

    handleKeyPressMetaTopic = (e) => {
        //console.log("e.key Enter", e.key);
        let existedTopics = this.getCurrentTopics();
        let title = e.target.value;
        const isTopicExist = !_.includes(existedTopics, title.toLowerCase());
        if (e.key === 'Enter' && isTopicExist && existedTopics.length<=15 && title.length>2 && title.length<50) {
            const tagCategories = _.values(this.state.tagCategories);
            //console.log('do tagCategories1', tagCategories);
            let tags = this.getCurrentTags(true);
            tagCategories.unshift({id:title, title, tags});
            console.log('handleKeyPressMetaTopic', tagCategories);
            let value = "";
            this.setState({tagCategories, value, metaTags:[]});
            e.target.value = "";
            //console.log('do validate', this.state.tagCategories);
        }

    };

    onChange = (event, { newValue, method }) => {

        this.setState({
            value: newValue
        });
    };

    onChangeMeta = (event, { newValue, method }) => {

        this.setState({
            valueMeta: newValue
        });
    };

    onChangeQuestion = (event, { newValue, method }) => {

        this.setState({
            questionValue: newValue
        });
    };


    onSuggestionsFetchRequested = ({ value }) => {
        console.log("onSuggestionsFetchRequested", value);

        const escapedValue = escapeRegexCharacters(value.trim());

        if (escapedValue === '') {
            return [];
        }

        const regex = new RegExp('^' + escapedValue, 'i');

        //return languages.filter(language => regex.test(language.name));
        value = (value && value.trim().toLowerCase()) || '';
        let suggestedTopic = '';
        let topicForFilter = [];
        let oldTopic = '';
        if(value && this.state.oldTopic !== value && value.length<50) {
            this.props.fetchTopicByAutocompletion(value, (response) => {
                console.log("fetchTopicByAutocompletion inputValue", response.data.results);

                topicForFilter = response.data.results;
                console.log("topicForFilter", topicForFilter);
                topicForFilter = _.uniqBy(topicForFilter.concat(this.state.tagsFromAI), "title");
                console.log("topicForFilter new", topicForFilter);
                //Check uniqueness
                //tagsForFilter = _.filter(tagsForFilter, function(tag) { return !_.includes(currentTags,  tag.title); });

                suggestedTopic = (topicForFilter).filter(topic => regex.test(topic.title));
                oldTopic = value;
                this.setState({suggestedTopic, oldTopic});
            });
        }

    };

    onSuggestionsFetchRequestedQuestion = ({ value }) => {
        console.log("onSuggestionsFetchRequestedQuestion", value);

        const escapedValue = escapeRegexCharacters(value.trim());

        if (escapedValue === '') {
            return [];
        }

        const regex = new RegExp('^' + escapedValue, 'i');
        value = (value && value.trim().toLowerCase()) || '';
        let suggestedQuestion = '';
        let questionForFilter = [];
        let oldQuestion = '';
        if(value && this.state.oldQuestion !== value && value.length<180) {
            this.props.fetchQuestionByAutocompletion(value, (response) => {
                console.log("fetchTopicByAutocompletion inputValue", response.data.results);

                questionForFilter = response.data.results;
                console.log("questionForFilter", questionForFilter);
                suggestedQuestion = (questionForFilter).filter(question => regex.test(question.title));
                oldQuestion = value;
                this.setState({suggestedTopic:suggestedQuestion , oldQuestion});
            });
        }

    };


    onSuggestionsClearRequested = () => {
        this.setState({
            suggestedTopic: []
        });
    };

    renderAutocompleteForTopic() {
        const { value, suggestedTopic } = this.state;
        const inputProps = {
            placeholder: "Add a new topic",
            value,
            onChange: this.onChange,
            onKeyPress: this.handleKeyPress
        };
        return (
            <Autosuggest
                suggestions={suggestedTopic}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps} />
        );
    }

    renderAutocompleteForMetaTopic() {
        const { valueMeta, suggestedTopic } = this.state;

        const inputProps = {
            placeholder: "Add a new topic",
            value: valueMeta,
            onChange: this.onChangeMeta,
            onKeyPress: this.handleKeyPressMetaTopic
        };
        return (
            <Autosuggest
                suggestions={suggestedTopic}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps} />
        );
    }

    renderAutocompleteForQuestion = ()  => {
        const { questionValue, suggestedTopic } = this.state;

        const inputProps = {
            placeholder: "Add a relevant question for your content",
            value: questionValue,
            onChange: this.onChangeQuestion,
            onKeyPress: this.handleKeyPressQuestion,
            onKeyUp: this.handleKeyUpQuestion,
            //onKeyDown: this.handleKeyDownQuestion,
            className: 'react-questioninput'
        };
        return (
            <Autosuggest
                suggestions={suggestedTopic}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequestedQuestion}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps} />
        );
    }

    render(){



        // Use to pass form to redux for validation before submitting
        const {handleSubmit} = this.props;
        return (

            <div className="modal fade modal-under-background" id="project-modal">
                {/*Progress bar*/}

                <Progress class={"progress-bar"} style={{"zIndex": "2"}} percent={this.state.loadingPercentage} height={7} color={"#FFFFFF"}/>

                <div className="modal-dialog modal-lg vertical-alignment-helper" >
                    <div className="modal-content nav-item">
                        <div className="modal-header">
                            <h6 className="modal-title">New Summary Project</h6>
                            <button type="button" className="close" data-dismiss="modal" data-animation="false">&times;</button>
                        </div>
                        <div className="modal-body">
                            {/*Error message*/}
                            <div className={"alert "+this.state.hideAlert}>
                                <FontAwesomeIcon icon={faExclamationTriangle} size="lg"/>&emsp;
                                <span>{this.state.errorMsg}</span>
                            </div>

                                <form className={"me-modal-form "+this.state.modalUrl} onSubmit={handleSubmit(this.onSubmitUrl.bind(this))}>
                                    <div className="form-group">
                                        <Field
                                            name="url"
                                            label="Enter a url of a blog article, website text content, etc"
                                            placeholder="Example: meshine.me/In-love-with-meshine"
                                            component={this.renderField}/>
                                        <div id="question-wrapper">
                                            <button   id="question-update-btn"  type="submit" className="btn btn-outline-success" >Continue</button>
                                            <button  id="question-cancel-btn"  type="button" className="btn btn-link float-right"
                                                     data-dismiss="modal" data-animation="false">Cancel</button>
                                        </div>
                                    </div>
                                </form>
                            <form className={this.state.modalTag}>
                                <div className="form-group">
                                    <div ref="tags-topics" id="tags-topics">
                                    {((this.state.metaTags).length>0)?this.renderInitalMetaTags(this.state.metaTags, this.autocompleteRenderInput):""}
                                    {this.renderInitialTags(this.state.tagCategories, this.autocompleteRenderInput)}
                                    <ul className="topic-edit">
                                        <li className="topic-input topic" title='Press "Enter" to validate'>
                                            {this.renderAutocompleteForTopic()}
                                        </li>
                                    </ul>
                                    </div>
                                    <div id="question-wrapper">
                                        <button  id="question-update-btn"
                                                 type="button"
                                                 className="btn btn-outline-success"
                                                 onClick={handleSubmit(this.onSubmitTagCategories)}>Continue</button>
                                        <button  id="question-cancel-btn"  type="button" className="btn btn-link float-right"
                                                 data-dismiss="modal" data-animation="false">Cancel</button>
                                    </div>
                                </div>
                            </form>
                            <form className={"me-modal-form "+this.state.modalQuestion} >
                                <div className="form-group">
                                    <div className="input-question" id="question-list">
                                        <ul className="me-topic questions-list">
                                        {((this.state.questions).length>0)?this.renderQuestionList(this.state.questions):""}
                                        </ul>
                                        {this.renderQuestionInput()}
                                    </div>
                                    <div id="question-wrapper" >
                                        <div className="nb-question">Enter the most relevant questions first</div>
                                        <button   id="question-update-btn"
                                                  type="button"
                                                  className="btn btn-outline-success"
                                                  onClick={this.onSubmitQuestions}>Continue</button>
                                        <button  id="question-cancel-btn"  type="button" className="btn btn-link float-right"
                                                 data-dismiss="modal" data-animation="false">Cancel</button>
                                    </div>
                                </div>
                            </form>
                                <span />
                        </div>

                    </div>
                </div>
            </div>)

    }


}

function validate(values){
    const errors = {};

    // Validate the inputs from 'values'
    if(!values.url){
        errors.url="Please enter a url";
    }

    // If errors is empty, the form is fine to submit
    //If errors has *any* properties, redux form assumes form is invalid
    return errors;
}


function mapStateToProps(state) {
    return {
        requestingAPI: state.requestingAPI,
        createSummary: state.createSummary
    };
}

export default withRouter(reduxForm({
    validate,
    form: 'NewSummaryProjectForm'
})(
    connect(mapStateToProps, {createSummaryProject, requestingAPI, notRequestingAPI, fetchTagByAutocompletion,
                                fetchTopicByAutocompletion, updateCategories, fetchQuestionByAutocompletion, updateSummary})(ProjectModal)
));




