const punycode = require('punycode.js');

const encoded = punycode.encode('mañana');
const decoded = punycode.decode('maana-pta');

console.log('Encoded:', encoded); // Output: maana-pta
console.log('Decoded:', decoded); // Output: mañana
