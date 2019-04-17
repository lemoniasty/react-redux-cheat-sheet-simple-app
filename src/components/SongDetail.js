import React from 'react';
import {connect} from "react-redux";

// Destructure out props param... get only song key.
const SongDetail = ({ song }) => {
    if (!song) {
        return <div>Select a song.</div>
    }

    return (
        <div>
            <h3>Details for:</h3>
            <p>
                Title: {song.title}
                <br/>
                Duration: {song.duration}
            </p>
        </div>
    );
};

// Step 14
//  Take state object from a redux store and pass it as a props to the component.
//  The state will have all the data from the redux store!!!
//  This will be invoked every time when data in redux store will change.
const mapStateToProps = (state) => {
    // Key will be key in the prop passed to the component.
    return { song: state.selectedSong }
};

// Step 15
//  Create connect helper and pass React.Component as a param of returned
//  function (second parenthesis). Connect helper is taken from react-redux
//  library.
export default connect(mapStateToProps)(SongDetail);