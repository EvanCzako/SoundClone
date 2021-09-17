# SoundClone 

<center>
  <img align="center" width="180" height="180" src="app/assets/images/SC.png">
</center>

------------------------

SoundClone is a music sharing/streaming app that allows users to create public profiles, listen to the music of other users, and upload their own tracks.

- Link to live site: https://soundclone-1.herokuapp.com/#/

------------------------

## Technologies used:
 - React/Redux
 - Ruby on Rails
 - PostgreSQL
 - SCSS and HTML
 - Node.js

------------------------

## Features:
 - Users can navigate through the site while listening to music without interruption
 - Users can upload audio files alone with associated album artwork, update the title and description of their tracks, and delete tracks they have uploaded
 - Users have individual profile pages where they can upload a profile image and view all tracks that they have uploaded
 - Tracks have individual pages for displaying all comments and likes associated with the track
 - Anyone (logged in or not) can navigate to a stream page or an individual user's profile page

------------------------

## Future work:
 - Implement user likes and comments

------------------------

## How tracks are displayed:

```javascript

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTrackById, deleteTrack } from '../actions/track_actions';
import Music from './music';

class ShowTrack extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchTrackById(this.props.trackId);
    }

    render() {

        let trackDisplay = null;
        if(this.props.tracks[this.props.trackId] != undefined){
            console.log("hi");
            let track = this.props.tracks[this.props.trackId];
            let editButton = null;
            let deleteButton = null;
            if (track.uploader.id === this.props.session.id) {
                editButton = <Link to={`/tracks/${track.id}/edit`} className="stream-edit-track-button">Edit Track</Link>
                deleteButton = <button className="stream-delete-track-button" onClick={() => this.props.deleteTrack(track.id)}>Delete track</button>
            }
            trackDisplay = <li className="track-display" key={track.id}>
                <Link to={`/tracks/${track.id}`}><img src={track.photoUrl} alt="Album art" /></Link>
                <Link to={`/users/${track.uploader.id}`} className="stream-user-link">{track.uploader.username}</Link>
                <Link to={`/tracks/${track.id}`} className="stream-track-link">{track.title}</Link>
                <Music track={track} />
                {editButton}
                {deleteButton}
            </li>
        }

        return (
            <div id="tracklist-main-content">
                <div id="track-page-white-background"></div>
                <div id="main-tracklist">
                    {trackDisplay}
                </div>
                <h1 id="comments-title">Comments:</h1>
            </div>
        );
    }

}

const mapStateToProps = (state,ownProps) => {
    return {
        trackId: ownProps.match.params.trackId,
        session: state.session,
        tracks: state.entities.tracks
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTrackById: (trackId) => dispatch(fetchTrackById(trackId)),
        deleteTrack: (trackId) => dispatch(deleteTrack(trackId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowTrack);

```
