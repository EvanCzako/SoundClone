import React from 'react';
import { connect } from 'react-redux';
import { createTrack } from '../util/tracks_api_util';

class UploadForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = 
            {
                title: "",
                description: "",
                songFile: null,
                submitting: false,
                message: ""
            }
        this.updateField = this.updateField.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleResponse = this.handleResponse.bind(this);
    }

    updateField = (field) => {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value });
        }
    }

    handleFile(e) {
        this.setState({['songFile']: e.currentTarget.files[0]})
    }

    handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('track[title]',this.state.title);
        formData.append('track[description]', this.state.description);
        formData.append('track[song]', this.state.songFile);
        this.setState({ ['submitting']: true });
        createTrack(formData)
            .then((response) => this.handleResponse(response.message,true),
                (response) => this.handleResponse(response.responseJSON,false));
        this.setState({ ['message']: 'Attempting to upload now' });
    }

    handleResponse(response,success){
        if(success){
            this.setState({ ['message']: 'Track successfully uploaded!' });
        } else{
            this.setState({ ['message']: 'Track did not upload. Please try again.' });
        }
        this.setState({ ['submitting']: false });
    }

    render() {

        let form = null;
        if (!this.state.submitting){
            form = <form id="upload-form" onSubmit={this.handleSubmit}>
                <input id="title-field" type="text" value={this.state.title} onChange={this.updateField('title')} placeholder="Title" />
                <input id="description-field" type="text" value={this.state.description} onChange={this.updateField('description')} placeholder="Description" />
                <input id="choose-sound-file" type="file" onChange={this.handleFile} />
                <input id="upload-track-button" type="submit" value="Upload" />
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

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadForm);