import  React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';

class ProjectModal extends Component{

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

    onSubmit(values){
        console.log(values);
    }

    render(){

        // Use to pass form to redux for validation before submitting
        const {handleSubmit} = this.props;

        return (

            <div className="modal fade" id="project-modal">
                <div className="modal-dialog modal-lg ">
                    <div className="modal-content nav-item">

                        <div className="modal-header">
                            <h6 className="modal-title">New Summary Project</h6>
                            <button type="button" className="close" data-dismiss="modal" data-animation="false">&times;</button>
                        </div>

                        <div className="modal-body">
                                <form className="me-modal-form" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                                    <div className="form-group">
                                        <Field
                                            name="url"
                                            label="Enter the url of a blog article, website text content, etc"
                                            placeholder="Example: meshine.me/In-love-with-meshine"
                                            component={this.renderField}/>
                                       <Field
                                            name="question_text"
                                            label='Enter the most appropriate question for your url (Question must start with: "What", "Why", "How", etc)'
                                            placeholder="Example: How I've astonishingly increased my blog traffic with MeShine?"
                                            component={this.renderField}/>
                                        {/*<Field
                                            name="tags"
                                            label="Enter the most appropriate tags for your article"
                                            placeholder="VERY IMPORTANT! The more your tags will be appropriate, the more you'll target the right persons"
                                            component={this.renderField}/>*/}
                                        <div id="question-wrapper">
                                            <button  id="question-update-btn"  type="submit" className="btn btn-outline-success">Continue</button>
                                            <button  id="question-cancel-btn"  type="button" className="btn btn-link float-right" data-dismiss="modal" data-animation="false">Cancel</button>
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
        errors.url="Please enter an url";
    }
    if(!values.question_text){
        errors.question_text="Please enter a question";
    }
    if(!values.tags){
        errors.tags="Please enter at least one tag";
    }

    // If errors is empty, the form is fine to submit
    //If errors has *any* properties, redux form assumes form is invalid
    return errors;
}

export default reduxForm({
    validate,
    form: 'NewSummaryProjectForm'
})(ProjectModal)




