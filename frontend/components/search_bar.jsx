import React from 'react';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {searchText: ""};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateField = this.updateField.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    updateField = (field) => {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value });
        }
    }

    render() {
        let errors = null;
        let form = null;
        form = <form onSubmit={this.handleSubmit}>
            <input id="search-field" type="text" value={this.state.searchText} onChange={this.updateField('searchText')} placeholder="Search" />
            {/* <input id="search-button" type="submit" value="Search!" /> */}
        </form>

        return (
            <div>
                <div id="search-form">{form}</div>
            </div>
        );
    }
}

export default SearchBar;