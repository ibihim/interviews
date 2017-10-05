'use strict';

const EMPTY = null;
const isEmpty = (node) => node === EMPTY;
const pair = (first, rest = EMPTY) => ({ first, rest });

const list = (...elements) => {
    const [first, ...rest] = elements;

    return elements.length === 0
           ? EMPTY
           : pair(first, list(...rest));
};

const forceAppend = (list1, list2) => {
    if (isEmpty(list1)) {
        return "FAIL!";
    }

    if (isEmpty(list1.rest)) {
        list1.rest = list2;
    } else {
        forceAppend(list1.rest, list2);
    }
};

const tortoiseAndHare = (aPair) => {
    let tortoisePair = aPair;
    let harePair = aPair.rest;

    while(true) {
        if (isEmpty(tortoisePair) || isEmpty(harePair)) {
            return false;
        }

        if (tortoisePair.first === harePair.first) {
            return true;
        }

        harePair = harePair.rest;

        if (tortoisePair.first === harePair.first) {
            return true;
        }

        tortoisePair = tortoisePair.rest;
        harePair = harePair.rest;
    }
};

const aList = list(1, 2, 3, 4, 5);

console.log(tortoiseAndHare(aList)); // => false

forceAppend(aList, aList.rest.rest);

console.log(tortoiseAndHare(aList)); // => true
