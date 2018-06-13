//import some modules
const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname,'contracts','Inbox.sol')
const source = fs.readFileSync(inboxPath,'utf-8');
//export compiled code as module so it is usable arcoss project
//more specifically Inbox contract

module.exports =  solc.compile(source,1).contracts[':Inbox']
//console.log(solc.compile(source,1))