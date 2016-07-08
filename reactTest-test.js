
import test from 'tape';

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import ReactTest from './reactTest';

test( 'testing react test component ', (t) => {
    t.plan(1);

    const appState = { counter: 0 };
    const button = ReactDOM.findDOMNode(button);

    const testApp = ReactTestUtils.renderIntoDocument(
        <ReactTest />
    );

    const testAppNode = ReactDOM.findDOMNode(button);

    // ReactTestUtils.Simulate.click(button);

    t.end();
});
