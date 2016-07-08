
import React from 'react';
import ReactDOM from 'react-dom';

import ReactTest from './reactTest';

class App extends React.Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return (
            <ReactTest />
        )
    }
}


ReactDOM.render(<App />, document.getElementById('App'));
