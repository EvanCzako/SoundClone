import React from 'react';
import { connect } from 'react-redux';
import { fetchTracksByString } from '../actions/track_actions';
import SearchTrackList from "./search_track_list";

class SearchShowPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchString: this.props.searchString
        };
    }

    componentDidMount(){
        this.props.fetchTracksByString(this.props.searchString);
    }

    componentDidUpdate(){
        if(this.state.searchString != this.props.searchString){
            this.setState({ searchString: this.props.searchString });
            this.props.fetchTracksByString(this.props.searchString);
        }
    }

    render() {

        let tracklist = null;

        if(Object.values(this.props.tracks).length > 0){
            tracklist = <SearchTrackList searchTracks={Object.values(this.props.tracks)} />;
        }
        return (
            <div id="search-results-wrapper">
                <div id="user-prof-white-background"></div>
                <h1>Search results:</h1>
                {tracklist}
            </div>
            
        );
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        searchString: ownProps.match.params.searchString,
        tracks: state.entities.tracks
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTracksByString: (searchString) => dispatch(fetchTracksByString(searchString)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchShowPage);