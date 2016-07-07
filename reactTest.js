
import React from 'react';
import ReactDOM from 'react-dom';

export class ButtonComponent extends React.Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return (
            <div>
                <button>{ this.props.label }</button>
            </div>
        )
    }
}


class ReactTest extends React.Component {
    constructor( props ) {
        super( props );

        this.state = {
            counter: 0
        };
    }

    onButtonClick() {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    render() {
        return (
            <div>
                <h1>Testing React</h1>
                <div>
                    <h2>Counter: { this.state.counter }</h2>
                </div>
                <ButtonComponent
                    label="Increase Number"
                />
            </div>
        )
    }
}

ReactDOM.render(<ReactTest />, document.getElementById('App'));
