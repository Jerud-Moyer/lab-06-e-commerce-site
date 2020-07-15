// IMPORT MODULES under test here:
import { calcLineItem } from '../utils.js';
// import { example } from '../example.js';

const test = QUnit.test;

QUnit.module('Calculate line items');


test('should multiply the qty of each item by item price', (expect) => {
    //Arrange
    const quantity = 5;
    const price = 2300;

    const expected = 11500;
    
    
    // Set up your arguments and expectations
    const actual = calcLineItem(quantity, price);
    
    //Act 
    // Call the function you're testing and set the result to a const
    expect.equal(actual, expected);
});