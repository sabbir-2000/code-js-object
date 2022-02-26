const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isClean: true
}
/* for(let i =0; i<10;i++) 
for(const num of numbers){} // array er
for(const prop in student){}//objet er upore korbo 

*/
for (const prop in bottle) {
    // console.log(prop, bottle[prop]);
}

const keys = Object.keys(bottle)
// console.log(keys);
for (const prop of keys) {
    // console.log(prop, bottle[prop]);
}

// advanced
const entries = Object.entries(bottle)
// console.log(entries);
// const [key, value] = ['color', 'yellow']
for (const [key, value] of Object.entries(bottle)) {
    console.log(key, value);
}

// 
const array = ['color', 'jeans', 'top']
array['color']
// console.log(array);