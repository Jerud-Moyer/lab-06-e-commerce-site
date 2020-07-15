// IMPORT MODULES under test here:
import amps from '../data/ampCity.js';
import { renderLineItems } from '../cart/render-line-items.js';
import { findById } from '../utils.js';
    // import { example } from '../example.js';
    
const test = QUnit.test;
    
QUnit.module('Render line items');
    
    
test('renders a line item', (expect) => {
        //Arrange
    const lineItem = {
        id: 'dragonslayer',
        quantity: 3,
       
    };
        // Set up your arguments and expectations
    const dragonslayer = findById(amps, lineItem.id);
    const expected = '<tr><td class="table-top">Lanham</td><td>3</td><td>2400</td><td>7200</td></tr>';
                    
        //Act          
        // Call the function you're testing and set the result to a const
    const dom = renderLineItems(lineItem, dragonslayer);
    const html = dom.outerHTML;
   
    
    
        //Expect
        // Make assertions about what is expected versus the actual result
    expect.equal(html, expected);
    
    
});