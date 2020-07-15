// IMPORT MODULES under test here:
import { calcOrderTotal } from '../utils.js';
import amps from '../data/ampCity.js';
import cart from '../data/cart.js';
// import { example } from '../example.js';

const test = QUnit.test;

QUnit.module('Calculate order total');


test('should add all line totals together', (expect) => {
    //Arrange
    const expected = 18500;
    
    
    // Set up your arguments and expectations
    const actual = calcOrderTotal(cart, amps);
    
    //Act 
    // Call the function you're testing and set the result to a const
    expect.equal(actual, expected);
});