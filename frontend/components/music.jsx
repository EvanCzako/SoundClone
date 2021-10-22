import React from 'react';
import { connect } from 'react-redux';
import { receiveCurrentTrack } from '../actions/current_track_actions';

class Music extends React.Component {
    constructor(props) {
        super(props);
        this.togglePlay = this.togglePlay.bind(this);
    }

    togglePlay() {
        
        this.props.receiveCurrentTrack(this.props.track);
        let audioBar = document.getElementById("audio-bar");
        if (audioBar.networkState != 0) {
            if (audioBar.paused) {
                audioBar.play();
            } else {
                audioBar.pause();
            }
        }
    }

    render() {
        let playButton;
        let audioBar = document.getElementById("audio-bar");
        if (this.props.track.id === this.props.currentTrack.id && !audioBar.paused){
            playButton = <button className="audio-button" onClick={this.togglePlay}>
                <i className="fas fa-pause pause-icon"></i>
            </button>
        } else {
            playButton = <button className="audio-button" onClick={this.togglePlay}>
                <i className="fas fa-play play-icon"></i>
            </button>
        }

        return (
            <div>
                {playButton}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentTrack: state.entities.currentTrack
    };
};

const mapDispatchToProps = dispatch => {
    return {
        receiveCurrentTrack: (track) => dispatch(receiveCurrentTrack(track))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Music);