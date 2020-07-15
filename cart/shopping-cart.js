import { getCart } from '../utils.js';
import amps from '../data/ampCity.js';
import { findById, calcOrderTotal } from '../utils.js';
import { renderLineItems } from './render-line-items.js';

const tbody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');
const cart = getCart();

for (let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    const amp = findById(amps, lineItem.id);
    const dom = renderLineItems(lineItem, amp);
    
    tbody.appendChild(dom);
}
console.log(tbody);


const orderTotal = calcOrderTotal(cart, amps);
orderTotalCell.textContent = orderTotal;

