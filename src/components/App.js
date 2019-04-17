import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';

// Step 5
//  Create functional component and export it.
//  By using redux we will use class components less frequently because the
//  state will be handled by the redux instead.
const App = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <SongList/>
                </div>
                <div className="column eight wide">
                    <SongDetail/>
                </div>
            </div>
        </div>
    );
};

export default App;