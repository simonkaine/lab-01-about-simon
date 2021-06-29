import { isYes } from '../utils.js';

const test = QUnit.test;

test('should return true', expect => {
    const yesString = isYes('yes');
    const yString = isYes('y');
    expect.equal(yesString, true);
    expect.equal(yString, true);
})

test('should return false', expect => {
    const noString = isYes('no');
    expect.equal(noString, false);
})