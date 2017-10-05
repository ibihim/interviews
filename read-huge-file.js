'use strict';

const { createReadStream, createWriteStream } = require('fs');
const { createInterface } = require('readline');

const INPUT_FILE_PATH = '/var/log/kern.log';
const OUTPUT_FILE_PATH = './tmp.log';
const CONF = { encoding: 'utf8' };

const readStream = createReadStream(INPUT_FILE_PATH, CONF);
const writeStream = createWriteStream(OUTPUT_FILE_PATH, CONF);

const readLine = createInterface(readStream);

// simple counter to verify manipulation
let counter = 0;

readLine.on('line', (chunk) => {
    writeStream.write(`${ counter++ }: ${ chunk }\n`)
});

readLine.on('close', () => {
    writeStream.end();
    console.log('end');
});
