import React from 'react';
import { connect } from 'react-redux';

class AudioBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 'play': false };
    }

    render() {
        
        return (
            <div id="audio-bar-div">
                <audio controls id="audio-bar" src={this.props.currentTrack.songUrl} autoPlay/>
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

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AudioBar);