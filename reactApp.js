
import React from 'react';
import ReactDOM from 'react-dom';

import ReactTest from './reactTest';

// test react-slide-me
import MySlider from 'react-slide-me';

var items = [
    'http://lorempixel.com/500/320/',
    'http://lorempixel.com/500/320/'
];

var size = {
    width: 500,
    height: 320
}

class App extends React.Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return (
            <div>
                <ReactTest />
                <MySlider
                    items={ items }
                    type="image"
                    size={ size }
                    animation="moveHorizontal"
                    speed={ 1000 }
                    easing="ease"
                />
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('App'));
