

export function renderLineItems(lineItem, amps) {
   
    const trEl = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = amps.name;
    nameCell.classList.add('table-top');
   // nameCell.className = 'table-top';
    //nameCell.textContent = amps.name;
    trEl.appendChild(nameCell);

    const quantityCell = document.createElement('td');
    quantityCell.textContent = lineItem.quantity;
    trEl.appendChild(quantityCell);

    const priceCell = document.createElement('td');
    priceCell.textContent = amps.price;
    trEl.appendChild(priceCell);

    const totalCell = document.createElement('td');
    totalCell.classname = 'line-item-total';
    const total = lineItem.quantity * amps.price;
    totalCell.textContent = total;
    trEl.appendChild(totalCell);

    return trEl;
    
}

