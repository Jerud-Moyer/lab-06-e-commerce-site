import { findById, getCart, pushCart } from './utils.js';

export function renderGuitarAmps(amp) {
    
    const liEl = document.createElement('li');

    const category = amp.category;
    liEl.classList.add(category);
    const title = amp.description;
    liEl.title = title;

    const h3El = document.createElement('h3');
    h3El.textContent = amp.name;
    liEl.append(h3El);

    const imgEl = document.createElement('img');
    imgEl.src = amp.image;
    imgEl.alt = amp.name + ' image';
    liEl.append(imgEl);

    const pEl = document.createElement('p');
    pEl.classList.add('price');
    pEl.textContent = `$${amp.price.toFixed(2)}`;

    const buttonEl = document.createElement('button');
    buttonEl.value = amp.code;
    buttonEl.textContent = 'Add';
    buttonEl.addEventListener('click', () => {
        const rawCart = getCart();
        let cartItem = findById(rawCart, amp.id);
        if (cartItem) {
            const selectedItem = {
                id: amp.id,
                quantity: 1
            };
            rawCart.push(selectedItem);
        } else {
            cartItem++;
        }
        pushCart(rawCart);
        alert('1 ' + amp.name + ' added to cart');
            
        
    });
    pEl.append(buttonEl);

    liEl.append(pEl);
    return liEl;
    

}