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