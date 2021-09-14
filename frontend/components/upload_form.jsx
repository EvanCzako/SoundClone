import React from 'react';
import { connect } from 'react-redux';
import { createTrack } from '../util/tracks_api_util';
// --------------------------------------
class UploadForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = 
            {
                title: "",
                description: "",
                songFile: null,
                photoFile: null,
                photoUrl: null,
                submitting: false,
                message: "",
                errorMessage: ""
            }
        this.updateField = this.updateField.bind(this);
        this.handleSongFile = this.handleSongFile.bind(this);
        this.handlePhotoFile = this.handlePhotoFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleResponse = this.handleResponse.bind(this);
    }

    updateField = (field) => {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value });
        }
    }

    handleSongFile(e) {
        this.setState({['songFile']: e.currentTarget.files[0]});
        this.setState({ ['title']: e.currentTarget.files[0].name });
    }

    handlePhotoFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({photoFile: file, photoUrl: fileReader.result });
        };
        if(file){
            fileReader.readAsDataURL(file);
        }
    }

    handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('track[title]',this.state.title);
        formData.append('track[description]', this.state.description);
        formData.append('track[song]', this.state.songFile);
        formData.append('track[photo]', this.state.photoFile);
        this.setState({ ['submitting']: true });
        createTrack(formData)
            .then((response) => this.handleResponse(response.message,true),
                (response) => this.handleResponse(response.responseJSON,false));
        this.setState({ ['message']: 'Attempting to upload now' });
    }

    handleResponse(response,success){
        if(success){
            this.setState({ ['message']: 'Track successfully uploaded!' });
            console.log(response);
        } else{
            this.setState({ ['message']: 'Track did not upload. Please try again.' });
            this.setState({ ['errorMessage']: response });
            console.log(response);
        }
        this.setState({ ['submitting']: false });
    }

    render() {
        const preview = this.state.photoUrl ? <img id="img-preview" src={this.state.photoUrl}/> : <div id="img-preview"></div>;
        let form = null;
        if (!this.state.submitting){
            form = <form id="upload-form" onSubmit={this.handleSubmit}>
                {preview}
                <label for="choose-sound-file" id="sound-file-upload-label">
                    Choose file to upload
                </label>
                <input id="choose-sound-file" type="file" onChange={this.handleSongFile} />
                <label for="choose-photo-file" id="image-file-upload-label">
                    Upload image
                </label>
                <input id="choose-photo-file" type="file" onChange={this.handlePhotoFile} />
                <label id="title-field-label" for="title-field">Title</label>
                <input id="title-field" type="text" value={this.state.title} onChange={this.updateField('title')} placeholder="Name your track" />
                <label id="description-field-label" for="description-field">Description</label>
                <input id="description-field" type="text" value={this.state.description} onChange={this.updateField('description')} placeholder="Describe your track" />
                <input id="upload-track-button" type="submit" value="Save" />
            </form>
        }

        return (
            <div id="upload-form-info">
                {form}
                {this.state.message}
                {this.state.errorMessage}
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