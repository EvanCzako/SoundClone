import React from 'react';
import { connect } from 'react-redux';
import { receiveCurrentTrack, fetchCurrentTrackById } from '../actions/current_track_actions';

class AudioBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loading: false };
        this.handlePlay = this.handlePlay.bind(this);
        this.handlePause = this.handlePause.bind(this);
        this.handleLoaded = this.handleLoaded.bind(this);
        this.handleEnded = this.handleEnded.bind(this);
    }

    handlePlay(){
        this.props.receiveCurrentTrack(this.props.currentTrack);
    }

    handlePause(){
        this.props.receiveCurrentTrack(this.props.currentTrack);
    }

    handleLoaded(){
    }

    handleEnded(){
        let randomNum = Math.floor(Math.random() * 6) + 1;
        while (randomNum === this.props.currentTrack.id){
            randomNum = Math.floor(Math.random() * 6) + 1;
        } 
        this.props.fetchCurrentTrackById(randomNum)
            .then((trackAction) => this.props.receiveCurrentTrack(trackAction.track));
    }

    render() {
        return (
            <div id="audio-bar-div">
                <audio controls id="audio-bar" src={this.props.currentTrack.songUrl} autoPlay onPlay={this.handlePlay} onPause={this.handlePause} onCanPlay={this.handleLoaded} onEnded={this.handleEnded}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentTrack: state.entities.currentTrack,
        tracks: state.entities.tracks
    };
};

const mapDispatchToProps = dispatch => {
    return {
        receiveCurrentTrack: (track) => dispatch(receiveCurrentTrack(track)),
        fetchCurrentTrackById: (trackId) => dispatch(fetchCurrentTrackById(trackId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AudioBar);