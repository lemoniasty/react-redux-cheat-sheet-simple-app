// Step 6 -
//  Create an action creators.
//  This file will contain functions related to action creators.
//  I've named it index.js intentionally because during importing I don't have
//  to point to the file name but only a directory where the file is stored.

// SONG_SELECTED action creator.
export const selectSong = (song) => { // Named export!

    // Return an action
    return {
        type: 'SONG_SELECTED', // REQUIRED!!!!
        payload: song // Optional
    };

};

// NOTE:
//  Thanks to named exports we can export many different functions from a
//  single file. Importing named exports - using {} (eg. { selectSong }.