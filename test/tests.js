import { countsAsAYes } from '../utils.js';

const test = QUnit.test;

test('should return true', expect => {
    const yesString = countsAsAYes('yes');
    const yString = countsAsAYes('y');
    expect.equal(yesString, true);
    expect.equal(yString, true);
})

test('should return false', expect => {
    const noString = countsAsAYes('no');
    expect.equal(noString, false);
})