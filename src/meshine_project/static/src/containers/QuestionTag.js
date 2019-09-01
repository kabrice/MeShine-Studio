import  React, { Component } from 'react';
import {connect } from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import Profile from "../components/Profile";
//import {updateSummary} from "../actions/index";

class QuestionTag extends Component{

    constructor(props){
        super(props);

        // We need to go and fetch question (id=1 for now)
        //this.props.fetchSummary(1);

        //this.state = {term: this.props.summary.question_text};
    }

    onFormSubmit(event){
        event.preventDefault();
    }

/*    componentDidMount(){

        this.props.updateSummary();
    }*/


    renderQuestionTextField = (field) =>{

/*
        let summary = this.props.updateSummary;
        if(summary === undefined) {
            summary = {};
        }
        console.log("summary", summary);
*/

        return(
            <input
                /*onchange={field.input.onChange}
                onFocus={field.input.onFocus}
                onBlur={field.input.onBlur} instead of doing all this, we use the 3 dots syntax*/
                {...field.input}
                type="text"
                placeholder="A quelle question répond votre contenu ?"
                required="required"    />

        )
    }

    render(){

        return (
        <React.Fragment>
        <div className="collapse navbar-collapse" id="navbarsExampleDefault">

            <div className="navbar-nav mr-auto" id="question-tag">
                <div className="nav-item">
                    <div  id="question" className="">
                        <form >
                            <div className="form-group">
                                <Field
                                    name="question_text"
                                    component={this.renderQuestionTextField}/>
                                <div id="question-wrapper">
                                    <button  id="question-update-btn"  type="submit" className="btn btn-sm btn-outline-success">Mettre à jour</button>
                                    <button  id="question-cancel-btn"  type="button" className="btn btn-sm btn-link float-right">Annuler</button>
                                </div>
                            </div>
                        </form>
                        <span />
                    </div>
                    <div id="tags">
                        <a className="nav-link"
                           data-placement="right"
                           data-animation="false" data-toggle="tooltip"
                           title="Modifier les tags" href="#">
                            <span>Climat</span>
                            <span>Animaux des eaux</span>
                            <span>Sri Lanka</span>
                            <span>Cyclone</span>
                            <i><i className="fa fa-pencil" aria-hidden="true"/></i></a></div>
                </div>
            </div>
        </div>
            <div className="user-profile">
                <span className="navbar-nav">
                    <Profile/>
                </span>
            </div>
        </React.Fragment>
        )
    }


}

/*function mapStateToProps(state) {
  return {
      updateSummary: state.updateSummary
    }
}*/


export default reduxForm({
    form: 'UpdateQuestionForm'
})(
    connect()(QuestionTag)
);


