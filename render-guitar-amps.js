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
    pEl.append(buttonEl);

    liEl.append(pEl);
    return liEl;
    

}