import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import GreetingContainer from './greeting_container';
import Modal from "./modal";
import {Link} from "react-router-dom";
import SearchBar from "./search_bar";
import TrackList from "./track_list";
import UploadForm from "./upload_form";



const App = (props) => (
    <div>
        <Modal />
        <header>
            <Link to="/" className="header-link">
                <h1>SoundClone</h1>
            </Link>
            <Link to="/">
                <h1>Home</h1>
            </Link>
            <Link to="/">
                <h1>Stream</h1>
            </Link>
            <Link to="/">
                <h1>Library</h1>
            </Link>
            <SearchBar />
            <GreetingContainer />
        </header>
        <Switch>
            {/* <Route path="/users/:id" component={} /> */}
            {/* <Route exact path="/tracks/:id" component={} /> */}
            <Route exact path="/upload">
                {!!props.state.session.id ?  <UploadForm /> : <Redirect to="/" />}
            </Route>


            <Route exact path="/" component={TrackList} />
        </Switch>


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