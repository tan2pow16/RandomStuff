'use strict';

const fs = require('fs');

let workspace = 'D:/MalwareAnalysis/BTC';
let file_in = 'Layer2/A0E28ADF.jpg';
let file_out = 'Layer3/A0E28ADF.exe';

let data_in = fs.readFileSync(`${workspace}/${file_in}`);
let data_str = data_in.toString('utf8');
let data_split = data_str.split('-');

let key = Buffer.from(data_split[0], 'utf8');
if(key.length != 10)
{
  console.error('ERROR: Invalid key length!');
}

let swap_space = Buffer.alloc(256, 0x20);
for(let i = 0 ; i < key.length ; i++)
{
  swap_space[key[i]] = 0x30 + i;
}

let data_ascii = Buffer.from(data_split[1], 'utf8');
for(let i = 0 ; i < data_ascii.length ; i++)
{
  data_ascii[i] = swap_space[data_ascii[i]];
}

let data_ascii_split = data_ascii.toString('utf8').split(' ');
let data_output = Buffer.allocUnsafe(data_ascii_split.length);
for(let i = 0 ; i < data_ascii_split.length ; i++)
{
  data_output[i] = parseInt(data_ascii_split[i]);
}

fs.writeFileSync(`${workspace}/${file_out}`, data_output);
