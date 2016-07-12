
import test from 'tape';

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import ReactTest from './reactTest';

test( 'testing react test component ', (t) => {
    t.plan(1);

    const appState = { counter: 0 };

    const testApp = ReactTestUtils.renderIntoDocument(
        <ReactTest />
    );

    const button = ReactTestUtils.findRenderedDOMComponentWithClass(testApp, 'myButton');

    ReactTestUtils.Simulate.click(button);

    // after click counter should be 1 up to initial app state
    t.equal(appState.counter + 1, testApp.state.counter, 'testing if new counter state is equal to expected');

    t.end();
});
