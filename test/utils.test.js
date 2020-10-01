// IMPORT MODULES under test here:
import { getRandomThrow } from '../helper-functions.js';

const test = QUnit.test;

test('This return rock paper or scissors as a string', (expect) => {
    // Set up your arguments and expectations
    const options = ['rock', 'paper', 'scissors'];
    
    const actual = getRandomThrow();

    expect.equal(options.includes(actual), true);
});
