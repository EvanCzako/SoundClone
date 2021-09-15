import React from 'react';
import { connect } from 'react-redux';
import { fetchTrack } from '../actions/track_actions';
import { fetchUserById } from '../actions/user_actions';
import UserTrackList from './user_track_list';

class UserProfile extends React.Component {

    constructor(props) {
        super(props);
        this.updatePageUser = this.updatePageUser.bind(this);
    }

    componentDidMount() {
        this.props.fetchUserById(this.props.userId);
    }

    updatePageUser() {
        this.props.fetchUserById(this.props.userId);
    }

    render() {

        if(this.props.pageUser.id != this.props.userId){
            this.updatePageUser();
        }

        let userTrackList = null;

        console.log(this.props.userId);
        console.log(this.props.pageUser.id);
        console.log(this.props.pageUser.id === this.props.userId);

        if (this.props.pageUser.id != undefined && (`${this.props.pageUser.id}` === this.props.userId)){
            userTrackList = <UserTrackList userTracks={this.props.pageUser.uploaded_tracks} />
        }
    
        return (
            <div>
                {this.props.pageUser.username}
                <ul>
                    {userTrackList}
                </ul>
            </div>
        );
    }

}

const mapStateToProps = (state,ownProps) => {
    return {
        userId: ownProps.match.params.userId,
        pageUser: state.entities.pageUser
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTrack: (trackId) => dispatch(fetchTrack(trackId)),
        fetchUserById: (id) => dispatch(fetchUserById(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);