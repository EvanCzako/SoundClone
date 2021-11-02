import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class SplashPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div id="splash-page-container">
                <div id="splash-img-border">
                    <img id="crowd-img" src={window.crowdURL} />
                    <h1 id="welcome-text">Welcome to SoundClone</h1>
                    <h1 id="welcome-sub-text">The Internet's most mysterious place to find new music.</h1>
                </div>
                <div id="splash-white-background">
                    <h1 id="splash-stream-preface">Hear what's trending for free in the SoundClone community.</h1>
                    <Link to="/stream">
                        <h1 id="splash-stream-link">Explore.</h1>
                    </Link>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        tracks: state.entities.tracks,
        session: state.session
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTracks: () => dispatch(fetchTracks()),
        fetchTrack: (trackId) => dispatch(fetchTrack(trackId)),
        deleteTrack: (trackId) => dispatch(deleteTrack(trackId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SplashPage);