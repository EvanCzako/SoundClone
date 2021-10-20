import React from 'react';
import { Link } from "react-router-dom";

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {searchText: ""};
        this.updateField = this.updateField.bind(this);
    }

    updateField = (field) => {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value });
        }
    }

    render() {
        let errors = null;
        let searchForm = null;
        searchForm = <div id="search-form">
            <input id="search-field" type="text" value={this.state.searchText} onChange={this.updateField('searchText')} placeholder="Search" />
            <button id="search-button" type="submit">
                
                    {/* <Link to={`./search/${this.state.searchText}`}> */}
                    <Link to={`../search/${this.state.searchText}`}>
                    <i id="search-button-img" className="fa fa-search"></i>
                    </Link>
                
            </button>
        </div>

        return (
            searchForm
        );
    }
}

export default SearchBar;