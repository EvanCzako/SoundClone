import React from 'react';
import { connect } from 'react-redux';
import { updateTrack, fetchTrack } from '../util/tracks_api_util';

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
            message: ""
        }
        this.updateField = this.updateField.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleResponse = this.handleResponse.bind(this);
        this.afterLoad = this.afterLoad.bind(this);
    }

    componentDidMount(){
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
        if (!this.state.submitting) {
            form = <form id="upload-form" onSubmit={this.handleSubmit}>
                <input id="title-field" type="text" value={this.state.title} onChange={this.updateField('title')} placeholder="Title" />
                <input id="description-field" type="text" value={this.state.description} onChange={this.updateField('description')} placeholder="Description" />
                <input id="edit-track-button" type="submit" value="Edit track info" />
            </form>
        }

        return (
            <div>
                {form}
                {this.state.message}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        trackId: ownProps.match.params.trackId
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchTrack: (trackId) => dispatch(fetchTrack(trackId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditTrackForm);