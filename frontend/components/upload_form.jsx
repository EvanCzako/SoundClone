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
                songFile: null
            }
        this.updateField = this.updateField.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        // console.log(this.state.songFile);
        const formData = new FormData();
        formData.append('track[title]',this.state.title);
        formData.append('track[description]', this.state.description);
        formData.append('track[song]', this.state.songFile);

        createTrack(formData)
            .then((response) => console.log(response.message),
                  (response) => console.log(response.responseJSON));
    }

    render() {


        let form = <form id="upload-form" onSubmit={this.handleSubmit}>
            <input id="title-field" type="text" value={this.state.title} onChange={this.updateField('title')} placeholder="Title" />
            <input id="description-field" type="text" value={this.state.description} onChange={this.updateField('description')} placeholder="Description" />
            <input id="choose-sound-file" type="file" onChange={this.handleFile} />
            <input id="upload-track-button" type="submit" value="Upload" />
        </form>

        return (
            <div>
                {form}
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        track: {
            title: "",
            description: "",
            songFile: null
        }
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // createTrack: (trackData) => dispatch(createTrack(trackData))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadForm);