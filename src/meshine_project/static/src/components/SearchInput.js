import React, {Component} from 'react';

class SearchInput extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return <div className={"search"}>
            <div className="form-inline">
                <img src="../assets/media/search.svg" height="28" width="18"/>
                <input type="text" placeholder={"Search "+this.props.target }/>
            </div>
        </div>;
    }
}

export default SearchInput;