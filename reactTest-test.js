
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

    const button = ReactTestUtils.findRenderedDOMComponentWithTag(testApp, 'ButtonComponent');

    ReactTestUtils.Simulate.click(button);

    t.end();
});
