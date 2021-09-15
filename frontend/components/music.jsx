import React from 'react';
import { connect } from 'react-redux';
import { receiveCurrentTrack, updateCurrentTrack } from '../actions/current_track_actions';

class Music extends React.Component {
    constructor(props) {
        super(props);
        this.togglePlay = this.togglePlay.bind(this);
    }

    togglePlay() {
        this.props.receiveCurrentTrack(this.props.track);
        let audioBar = document.getElementById("audio-bar");
        if(this.props.currentTrack.playing != undefined){ 
            if (this.props.currentTrack.playing) {
                audioBar.pause();
            } else {
                audioBar.play();
            }
        }
    }

    render() {
        let playButton;
        if(this.props.track.id === this.props.currentTrack.id && this.props.currentTrack.playing){
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