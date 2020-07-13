// IMPORT MODULES under test here:
import { renderGuitarAmps } from '../render-guitar-amps.js';
// import { example } from '../example.js';

const test = QUnit.test;

QUnit.module('Render Guitar Amps');


test('renders a guitar amp', (expect) => {
    //Arrange
    const jcm800 = {
        code: 'jcm-800',
        name: 'Marshall',
        image: '../images',
        description: 'A British rock and Roll classic for the ages.',
        category: 'tube-amp',
        price: 2000.00,
        cost: 500.00
    };
    // Set up your arguments and expectations
    const expected = '<li class="tube-amp" title="A British rock and Roll classic for the ages."><h3>Marshall</h3><img src="../images" alt="Marshall image"><p class="price">$2000.00<button value="jcm-800">Add</button></p></li>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const dom = renderGuitarAmps(jcm800);
    const html = dom.outerHTML;
    console.log(dom);
    console.log(html);


    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(html, expected);
});
