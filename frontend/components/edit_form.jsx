import React from 'react';
import { connect } from 'react-redux';
import { updateTrack, fetchTrack } from '../util/tracks_api_util';
import { fetchTrackById } from '../actions/track_actions';
import { Redirect } from 'react-router-dom';

class EditTrackForm extends React.Component {

    constructor(props) {
        super(props);
        this.state =
        {
            title: "",
            description: "",
            id: this.props.trackId,
            infoLoaded: false,
            submitting: false,
            message: "",
            redirect: undefined
        }
        this.updateField = this.updateField.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleResponse = this.handleResponse.bind(this);
        this.afterLoad = this.afterLoad.bind(this);
    }

    componentDidMount(){
        this.props.fetchTrackById(this.props.trackId);
        fetchTrack(this.props.trackId)
            .then((track) => this.afterLoad(track));
    }

    afterLoad(track){
        this.setState({ ['infoLoaded']: true });
        this.setState({['title']: track.title});
        this.setState({ ['description']: track.description });
    }

    updateField = (field) => {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ ['submitting']: true });
        updateTrack(this.state)
            .then((response) => this.handleResponse(response.message, true),
                (response) => this.handleResponse(response.responseJSON, false));
        this.setState({ ['message']: 'Attempting to update info now' });
    }

    handleResponse(response, success) {
        if (success) {
            this.setState({ ['message']: 'Track info updated!' });
            this.setState({redirect: <Redirect to={`/tracks/${this.props.trackId}`} />});
        } else {
            this.setState({ ['message']: 'Track info not updated. Please try again.' });
        }
        this.setState({ ['submitting']: false });
    }

    render() {
        if(!this.state.infoLoaded){
            return (
                <div />
            );
        };
        let form = null;
        if (!this.state.submitting && (this.props.tracks[this.props.trackId].uploader.id === this.props.session.id)) {
            form = <form id="edit-form" onSubmit={this.handleSubmit}>
                <label htmlFor="edit-title-field">Title</label>
                <input id="edit-title-field" type="text" value={this.state.title} onChange={this.updateField('title')} placeholder="Title" />
                <label htmlFor="edit-title-field">Description</label>
                <input id="edit-description-field" type="text" value={this.state.description} onChange={this.updateField('description')} placeholder="Description" />
                <input id="edit-track-button" type="submit" value="Edit track info" />
            </form>
        }else{
            return (
                <div />
            );
        }

        if(!this.state.redirect){
            return (
                <div id="edit-track-info">
                    <div id="edit-white-background"></div>
                    <h1 id="edit-track-title">Edit track information</h1>
                    {form}
                    <h1 id="track-updated-message">{this.state.message}</h1>
                </div>
            );
        } else{
            return(
                this.state.redirect
            );
        }

    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        trackId: ownProps.match.params.trackId,
        session: state.session,
        tracks: state.entities.tracks
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchTrackById: (trackId) => dispatch(fetchTrackById(trackId))
    }; 
};

export default connect(mapStateToProps, mapDispatchToProps)(EditTrackForm);