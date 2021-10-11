import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import GreetingContainer from './greeting_container';
import Modal from "./modal";
import {Link} from "react-router-dom";
import SearchBar from "./search_bar";
import TrackList from "./track_list";
import UploadForm from "./upload_form";
import EditTrackForm from "./edit_form";
import AudioBar from "./audio_bar";
import UserProfile from "./user_profile";
import ShowTrack from "./show_track";
  
const App = (props) => (
    <div>
        <Modal />
        <header>
            <div id="top-nav-left-links">
                <Link to="/stream">
                    <img id="logo" src={window.brentURL} />
                    <h1>SoundClone</h1>
                </Link>
                <Link to="/stream">
                    <h1>Stream</h1>
                </Link>
            </div>
            <SearchBar />
            <GreetingContainer />
        </header>
        <Switch>
            <Route exact path="/upload">
                {!!props.state.session.id ?  <UploadForm /> : <Redirect to="/" />}
            </Route>
            <Route exact path="/">
                {<Redirect to="/stream" />}
            </Route>
            <Route exact path="/tracks/:trackId/edit" component={EditTrackForm} />
            <Route exact path="/tracks/:trackId" component={ShowTrack} />
            <Route exact path="/stream" component={TrackList} />
            <Route exact path="/users/:userId" component={UserProfile}></Route>
        </Switch>
        <AudioBar />
    </div>
);

const mapStateToProps = state => {
    return {
        state: state
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);