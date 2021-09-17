import React from 'react';
import { connect } from 'react-redux';
import { receiveCurrentTrack } from '../actions/current_track_actions';

class AudioBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 'play': false };
        this.handlePlay = this.handlePlay.bind(this);
        this.handlePause = this.handlePause.bind(this);
        this.handleLoaded = this.handleLoaded.bind(this);
    }

    handlePlay(){
        this.props.receiveCurrentTrack(this.props.currentTrack);
    }

    handlePause(){
        this.props.receiveCurrentTrack(this.props.currentTrack);
    }

    handleLoaded(){
    }

    render() {
        return (
            <div id="audio-bar-div">
                <audio controls id="audio-bar" src={this.props.currentTrack.songUrl} autoPlay onPlay={this.handlePlay} onPause={this.handlePause} onCanPlay={this.handleLoaded}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(AudioBar);