import { findById } from '../utils.js';

const test = QUnit.test;

QUnit.module(' Find By ID');


const spot = {
    id: 'spot',
    type: 'doggy',
    weight: 5
};

const douglas = {
    id: 'douglas',
    type: 'doggy',
    weight: 12
};

const jumpy = {
    id: 'jumpy',
    type: 'froggy',
    weight: 1
};

const myArray = [
    spot,
    douglas,
    jumpy
];


test('it should take in an id and an array and return the matching item', function(assert) {

    //Arrange
    // Set up your parameters and expectations

    const myId1 = 'spot'
    const myId2 = 'jumpy';
    const expected1 = spot;
    const expected2 = jumpy;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual1 = findById(myArray, myId1);
    const actual2 = findById(myArray, myId2);
    
    //Assert
    // Make assertions about what is expected versus the actual result
    assert.equal(expected1, actual1);
    assert.equal(expected2, actual2);
});