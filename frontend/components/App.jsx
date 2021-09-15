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

const App = (props) => (
    <div>
        <Modal />
        <header>
            <div id="top-nav-left-links">
                <Link to="/" className="header-link">
                    <h1>SoundClone</h1>
                </Link>
                <Link to="/">
                    <h1>Home</h1>
                </Link>
                <Link to="/stream">
                    <h1>Stream</h1>
                </Link>
                <Link to="/">
                    <h1>Library</h1>
                </Link>
            </div>
            <SearchBar />
            <GreetingContainer />
        </header>
        <Switch>
            <Route exact path="/upload">
                {!!props.state.session.id ?  <UploadForm /> : <Redirect to="/" />}
            </Route>
            <Route exact path="/tracks/:trackId/edit" component={EditTrackForm} />
            <Route exact path="/stream" component={TrackList} />
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