import fs from 'node:fs'

const content = fs.readFileSync('demo.txt', {encoding: 'utf-8'});

console.log(content);