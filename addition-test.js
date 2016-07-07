
import test from 'tape';
import addition from './addition';

test( 'addition of array function testing', (t) => {
    t.plan(2);

    // testing array error
    t.throws( () => {
        addition([1, '3', 2])
    }, /array must contain integers only/, 'invalid array test');

    // testing addition
    let testAddition = addition([0, 2, 3]);
    t.equal(testAddition, 5, 'addition of numbers test');

    t.end();
});
