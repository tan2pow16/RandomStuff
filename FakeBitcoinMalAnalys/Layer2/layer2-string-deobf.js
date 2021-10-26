'use strict';

const readline = require('readline');

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
    let buf0 = Buffer.from(line, 'utf8');
    let buf1 = Buffer.allocUnsafe(buf0.length + 1);
    let i, j = 0;
    for(i = 0 ; i < buf0.length ; i++)
    {
      if((buf0[i] >= 0x41 && buf0[i] <= 0x5A) || (buf0[i] >= 0x61 && buf0[i] <= 0x7A) || buf0[i] == 0x2C || buf0[i] == 0x2E)
      {
        buf1[j] = buf0[i];
        j++;
      }
    }
    buf1[j] = 0;
    console.log(buf1.slice(0, j).toString('utf8'));

    // Release the memory
    buf0 = null;
    buf1 = null;
  }
});
