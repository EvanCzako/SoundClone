import React from 'react';
import { connect } from 'react-redux';
import { fetchTrack } from '../actions/track_actions';
import { fetchUserById } from '../actions/user_actions';
import UserTrackList from './user_track_list';

class UserProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            profileImageFile: null,
            profileImageUpdated: false
        };
        this.updatePageUser = this.updatePageUser.bind(this);
        this.handlePhotoFile = this.handlePhotoFile.bind(this);
        this.updateProfilePhoto = this.updateProfilePhoto.bind(this);
        this.updateStateAndStore = this.updateStateAndStore.bind(this);
    }

    componentDidMount() {
        this.props.fetchUserById(this.props.userId);
    }

    updatePageUser() {
        this.props.fetchUserById(this.props.userId);
    }

    handlePhotoFile(e) {
        e.preventDefault();
        this.setState({ profileImageUpdated: false});
        this.setState({ profileImageFile: e.currentTarget.files[0] });
    }

    updateProfilePhoto(){
        const formData = new FormData();
        formData.append('user[profile_photo]',this.state.profileImageFile);
        $.ajax({
            url: `/api/users/${this.props.userId}`,
            method: 'PATCH',
            data: formData,
            contentType: false,
            processData: false
        }).then(
            (response) => this.updateStateAndStore()
        );
    }

    updateStateAndStore(){
        this.setState({ profileImageUpdated: true });
        this.props.fetchUserById(this.props.userId);
    }

    render() {

        if((this.state.profileImageFile != null) && !this.state.profileImageUpdated ){
            this.updateProfilePhoto();
        }

        if(this.props.pageUser.id != this.props.userId){
            this.updatePageUser();
        }
        let userTrackList = null;
        let profImage = null;
        if (this.props.pageUser.id != undefined && (`${this.props.pageUser.id}` === this.props.userId)){
            userTrackList = <UserTrackList userTracks={this.props.pageUser.uploaded_tracks} />
            profImage = this.props.pageUser.profileImageUrl ? <img id="prof-img" src={this.props.pageUser.profileImageUrl} /> : <div id="prof-img-empty"></div>;
        }

        let uploadImageLabel = null;
        if (this.props.pageUser.id === this.props.session.id){
            uploadImageLabel = <label htmlFor="choose-profile-photo-file" id="profile-image-file-upload-label">
                Upload image
            </label>;
        }

        
        return (
            <div id="user-prof-main-content">
                <div id="user-prof-white-background"></div>
                <div id="user-prof-header">
                    <h1 id="user-prof-username">{this.props.pageUser.username}</h1>
                    {profImage}
                    {uploadImageLabel}
                    <input id="choose-profile-photo-file" type="file" onChange={this.handlePhotoFile} />
                </div>
                <h1 id="user-tracks-header">{this.props.pageUser.username}'s tracks:</h1>
                {userTrackList}

            </div>
        );
    }

}

const mapStateToProps = (state,ownProps) => {
    return {
        userId: ownProps.match.params.userId,
        pageUser: state.entities.pageUser,
        session: state.session
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTrack: (trackId) => dispatch(fetchTrack(trackId)),
        fetchUserById: (id) => dispatch(fetchUserById(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);