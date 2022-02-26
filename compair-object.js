const first = { a: 1, b: 2 };
const second = { a: 1, b: 2 };
const third = first;
if (first === third) {
    // console.log('object are equal');
}
else {
    // console.log('objects are different');
}
const first2 = { a: 1, b: 2 };
const second2 = { b: "2", a: 1 };

console.log(JSON.stringify(first2));
console.log(JSON.stringify(second2));
if (JSON.stringify(first2) === JSON.stringify(second2)) {
    console.log('object are equal');
}

function compairObject(obbj1, obj2) {
    if (Object.keys(obbj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (const prop in obbj1) {
        if (obbj1[prop] !== obj2[prop]) {
            return false;
        }

    }
    return true
}
const isEqual = compairObject(first2, second2)
console.log(isEqual);