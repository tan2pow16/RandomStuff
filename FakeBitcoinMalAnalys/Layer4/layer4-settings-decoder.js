'use strict';

const readline = require('readline');

let password = 'Creances';
let key = Buffer.from(password, 'utf8');

let reli = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});
  
reli.on('line', function(line) {
  if(line.toLowerCase() === 'exit')
  {
    reli.close();
  }
  else
  {
    let buf = Buffer.from(line, 'base64');
    for(let i = 0 ; i < buf.length ; i++)
    {
      buf[i] ^= key[i % key.length];
    }
    console.log(Buffer.from(buf.toString('utf8'), 'base64').toString('utf8'));
    buf = null;
  }
});
