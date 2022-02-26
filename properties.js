const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isClean: true
};
// getting all properties name..
const allKeys = Object.keys(bottle)
// console.log(allKeys);
// get all values..
const allValues = Object.values(bottle)
// console.log(allValues);
const pairs = Object.entries(bottle)

// console.log(pairs);
bottle.height = 12

/* seal likhle r delete hoina kono property */
Object.freeze(bottle)
/* ayvabe property er value change kore */
bottle.price = 120
/* ayvabe delete kore */
delete bottle.isClean;
console.log(bottle);