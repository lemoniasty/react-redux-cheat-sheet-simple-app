import React from 'react';
import {connect} from "react-redux";

// Step 13
//  Import action creator (single one - named one) and...
import {selectSong} from "../actions";
// No file in import because we using an index.js file which is loaded by
// default.

class SongList extends React.Component {
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button
                            className="ui button primary"
                            // Step 14
                            //  Invoke our action creator which is passed by
                            //  the props and... let the magic happens.
                            //  It is work because connect helper will dispatch
                            //  our action creator.
                            onClick={() => this.props.selectSong(song)}>
                            Select
                        </button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            );
        });
    }

    render() {
        return <div className="ui divided list">{this.renderList()}</div>;
    }
}

// Step 12
//  Take state object from a redux store and pass it as a props to the component.
//  The state will have all the data from the redux store!!!
//  This will be invoked every time when data in redux store will change.
const mapStateToProps = (state) => {
    // We can pick which data we want to pass as props to the component.
    return {songs: state.songs};
};

// Step 11
//  Create connect helper and pass React.Component as a param of returned
//  function (second parenthesis). Connect helper is taken from react-redux
//  library.
export default connect(
    // Step 12...
    mapStateToProps,

    // Step 13
    //  Pass it as a second parameter as an object.
    //  These action creators will be passed in props to the component.
    //  We can name it as we want eg. {selectMySong: selectSong}.
    //  Let's use ES2015 magic :)
    {selectSong}
)(SongList);