// Step 7 -
//  Create reducers.
//  This file will contain functions related to reducers.
//  I've named it index.js intentionally because during importing I don't have
//  to point to the file name but only a directory where the file is stored.

import {combineReducers} from 'redux';

// Prepare songs reducer. This is overkill for this "project" - it is used
// only for educational purposes.
const songsReducer = () => {
    return [
        {title: 'No Scrubs', duration: '4:05'},
        {title: 'Macarena', duration: '2:30'},
        {title: 'All Star', duration: '3:15'},
        {title: 'I Want it That Way', duration: '1:45'}
    ];
};

// Prepare selectedSong reducer.
const selectedSongReducer = (selectedSong = null, action) => {
    // For the current app, it is not necessary, and it is only for
    // educational purposes.
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

// Step 8 -
//  Combine reducers together and export it.
export default combineReducers({
    //  Keys of this object will be the keys inside of our state object.
    songs: songsReducer,
    selectedSong: selectedSongReducer
});