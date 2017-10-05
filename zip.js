'use strict';

const a = ['a', 'b', 'c'];
const b = ['d', 'e', 'f', 'g', 'h', 'i'];

const zip = (a, b) => {
    let result = [];
    let smaller;
    let bigger;

    if (a.length <= b.length) {
        smaller = a;
        bigger = b;
    } else {
        smaller = b;
        bigger = a;
    }

    for (let i = 0, smallerLength = smaller.length; i < smallerLength; i++) {
        const aValue = a[i];
        const bValue = b[i];

        result.push(aValue);
        result.push(bValue);
    }

    for (let j = smaller.length; j < bigger.length; j++) {
        result.push(bigger[j]);
    }

    return result;
};

const result = zip(a, b);

console.log(result);
