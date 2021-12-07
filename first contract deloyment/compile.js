const path=require('path');
const fs=require('fs');
const solc=require('solc');
const indoxPath=path.resolve(__dirname,'contracts','inbox.sol');
const source=fs.readFileSync(indoxPath,'utf-8');
module.exports= solc.compile(source,1).contracts[':Inbox'];