'use strict';

const fs = require('fs');

let workspace = 'D:/MalwareAnalysis/BTC';

let password = 'Trump2026';
let key = Buffer.from(password, 'utf8');
let data = fs.readFileSync(`${workspace}/Layer3/A0E28ADF.exe`).slice(0x250, 0x19650);
for(let i = 0 ; i < data.length ; i++)
{
  data[i] ^= key[i % key.length];
}
fs.writeFileSync(`${workspace}/Layer4/${password}.exe`, data);
