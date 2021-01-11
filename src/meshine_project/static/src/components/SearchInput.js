import React, {Component} from 'react';

class SearchInput extends Component {

    constructor(props) {
        super(props);
    }
    handleKeyUp = (e) => {
        if (e.key === 'Enter'){
            this.props.displayDemoSpin()
        }
    }
    handleKeyDown = (e) => {
        if (e.key === 'Enter'){
            this.props.hideDemoSpin()
        }
    }
    render() {
        return <div className={"search"}>
            <div className="form-inline">
                <img src="../assets/media/search.svg" height="28" width="18"/>
                <input type="text" placeholder={"Search "+this.props.target } onKeyUp={this.handleKeyUp}   onKeyDown={this.handleKeyDown}/>
            </div>
        </div>;
    }
}

export default SearchInput;