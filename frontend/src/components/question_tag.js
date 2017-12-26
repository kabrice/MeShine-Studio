import  React, { Component } from 'react';
//Same as const Component = React.Component
/*const QuestionTag = () => {
    return (

            <span className="nav-item">
                <div  id="question">
                    <a className="nav-link"
                       data-placement="right"
                       data-animation="false" data-toggle="tooltip"
                       title="Modifier la question" href="#">
                        <b>Comment des habitants ont sauvés 20 baleines du cyclone Mora au Sri Lanka ?</b>
                        <i><i className="fa fa-pencil" aria-hidden="true"></i></i></a></div>
                <div  id="tags">
                    <a className="nav-link"
                       data-placement="right"
                       data-animation="false" data-toggle="tooltip"
                       title="Modifier les tags" href="#" >
                        <span>Climat</span>
                        <span>Animaux des eaux</span>
                        <span>Sri Lanka</span>
                        <span>Cyclone</span>
                        <i ><i className="fa fa-pencil" aria-hidden="true"></i></i></a></div>
            </span>

    )
};*/

class QuestionTag extends Component{

    constructor(props){
        super(props);
        this.state = {term: 'Comment des habitants ont sauvés 20 baleines du cyclone Mora au Sri Lanka ?'};
    }

    render(){
        return (

            <span className="nav-item">
                <div  id="question" className="group">
                    <input
                        type="text"
                        value={this.state.term}
                        onChange={event => this.setState({term: event.target.value})} required="required"/>
                    <span className="bar"/>
                </div>
                <div  id="tags">
                    <a className="nav-link"
                       data-placement="right"
                       data-animation="false" data-toggle="tooltip"
                       title="Modifier les tags" href="#" >
                        <span>Climat</span>
                        <span>Animaux des eaux</span>
                        <span>Sri Lanka</span>
                        <span>Cyclone</span>
                        <i ><i className="fa fa-pencil" aria-hidden="true"/></i></a></div>
            </span>

        )
    }


}

export default QuestionTag;