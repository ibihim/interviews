'use strict';

const caterpillarTest1 = {
    leafs: 10,
    caterpillars: [ 2, 4, 5 ]
};

const caterpillarTest2 = {
    leafs: 100000,
    caterpillars: [2, 3, 4, 5, 6, 7, 8, 9, 10]
};

const createMultiples = (from, till, multiples = []) => {
    let index = 1;
    let pointer = from;

    while (pointer <= till) {
        pointer = from * index++;

        multiples.push(pointer);
    }

    return multiples;
};

const getUneatenLeafs = (leafs, caterpillars) => {
    let uneatenLeafs = [];

    const eatenLeafs = caterpillars.reduce((sum, value) => {
        if (sum.indexOf(value) !== -1) {
            return sum;
        }

        createMultiples(value, leafs, sum);

        return sum;
    }, []);

    for (let i = 1; i <= leafs; i++) {
        if (eatenLeafs.indexOf(i) === -1) {
            uneatenLeafs.push(i);
        }
    }

    console.log(uneatenLeafs);

    return uneatenLeafs.length;
};

const result = getUneatenLeafs(caterpillarTest2.leafs, caterpillarTest2.caterpillars);

console.log(result);
