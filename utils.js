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