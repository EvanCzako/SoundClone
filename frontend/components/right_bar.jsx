import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class RightBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div id="right-bar">
                <div id="portfolio-wrapper">
                    <h2>Other work by Evan Czako</h2>
                    <a className="portfolio-links" href="https://evanczako.github.io/Evan_Czako_Portfolio/" target="_blank">Portfolio</a>
                </div> 
                <div id="connect-wrapper">
                    <h2>Connect with me</h2>
                    <a className="portfolio-links" href="https://github.com/EvanCzako" target="_blank">GitHub</a>
                    <a className="portfolio-links" href="https://www.linkedin.com/in/evan-czako/" target="_blank">LinkedIn</a>
                </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(RightBar);