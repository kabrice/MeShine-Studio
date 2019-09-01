import _ from 'lodash';
import  React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {fetchIconsFromTheNounProject} from '../actions/index'
import {withRouter} from "react-router-dom";

class FooterMenuBox extends Component{

    constructor(props){
        super(props);
        //console.log('this.props.medias', this.props.medias);
        this.state = {
            medias: []
        };
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

    render(){

        const {handleSubmit} = this.props;

        let imageList = _.map(this.state.medias, (media, index) => {
            return (<div key={index} className="box-img" dangerouslySetInnerHTML={{__html: media}}/>)
        });

        let type = <div className="navg" >
                        <a className="thumbview grid pause"/>
                        <button className="next"/>
                        <button className="prev disabled"/>
                    </div>;

        if(this.props.type === 'figure'){

            type = <div className="navg" >
                        <form onChange={handleSubmit(this.fetchIcons.bind(this))}>
                            <Field
                                name="iconName"
                                placeholder="Search whatever images"
                                component={this.renderField}/>
                        </form>
                    </div>
        }


        return (<div className="menu-box big-menu-box">
                    {type}
                    <div className="images thumbs">{imageList}</div>
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

function mapStateToProps() {
    return {}
}

export default withRouter(reduxForm({
    validate,
    form: 'TheNounProjectForm'
})(
    connect(mapStateToProps, {fetchIconsFromTheNounProject})(FooterMenuBox)
));





