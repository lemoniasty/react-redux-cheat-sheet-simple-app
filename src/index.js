// Step 2 - Add React and ReactDOM.
import React from 'react';
import ReactDOM from 'react-dom';

// Step 8 - Import react and react-redux libraries.
import {Provider} from 'react-redux';
import {createStore} from 'redux';

// Step 4 - Create App component and import it.
import App from './components/App';
// Step 9 - Import reducers.
import reducers from './reducers';

// Step 3 - Setup ReactDOM.render().
ReactDOM.render(
    // Step 10
    //  Wrap <App/> component with a <Provider/> component with store property.
    //  We passing our reducers by using store property.
    <Provider store={createStore(reducers)}>
        <App/>
    </Provider>,
    document.querySelector('#root')
);