//import cart from '../data/cart.js';


export function findById(someArray, someId) {
    let item = {};
    for (let i = 0; i < someArray.length; i ++) {
        //const dog = someArray[i];
        if (someArray[i].id === someId){
            item = someArray[i];
        }
    }
    return item;
}

export function calcLineItem(quantity, price) {
    const userCost = quantity * price;
    return Math.round(userCost * 100) / 100;
}


export function toUSD(number) {
    return number.toLocaleString('en-US', { 
        style: 'currency', 
        currency: 'USD' 
    });
}


export function calcOrderTotal(carts, amps) {
    let orderTotal = 0;

    for (let i = 0; i < carts.length; i++) {
        const lineItem = carts[i];
        const amp = findById(amps, lineItem.id);
        orderTotal += calcLineItem(lineItem.quantity, amp.price);
        
    }
    return orderTotal;
}

export function getCart() {
    const localCart = localStorage.getItem('cart');
    const cartArray = JSON.parse(localCart) || [];

    return cartArray;
}

export function pushCart(array) {
    const stringItems = JSON.stringify(array);
    localStorage.setItem('cart', stringItems);
}