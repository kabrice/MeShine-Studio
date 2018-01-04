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
        this.state = {term: 'Si comme moi, vous avez accumulé des dizaines de mails par jour de sorte que votre boîte compte aujourd\'hui plus de 4000 non lus et qu\'il faudrait des ?'};
    }

    onFormSubmit(event){
        event.preventDefault();
    }

    render(){
        return (

            <div className="nav-item ">
                <div  id="question" className="">
                    <form onSubmit={this.onFormSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="A quelle question répond votre contenu ?"
                                value={this.state.term}
                                onChange={event => this.setState({term: event.target.value})} required="required"/>
                            <div id="question-wrapper">
                                <button  id="question-update-btn"  type="submit" className="btn btn-sm btn-outline-success">Mettre à jour</button>
                                <button  id="question-cancel-btn"  type="button" className="btn btn-sm btn-link float-right">Annuler</button>
                            </div>
                        </div>
                    </form>
                    <span className="bar"/>
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

        )
    }


}

export default QuestionTag;