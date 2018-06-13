const HDWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3')
const {interface,bytecode} = require('./compile')

const provider = new HDWalletProvider(
    'eight search limit local afraid legal digital olympic team beef scan cliff',
    'https://rinkeby.infura.io/CSxja8mxEhjCa7cS1xae'
)

const web3 = new Web3(provider)

//Code below will mostly like as shown in file test/inbox.test.js
//Here we are dealing with async calls, but we can not use await/async
//without function. Hence we have defined function deploy and called it after

const deploy = async ()=>{

    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from Account - ',accounts[0]);

    //Now deploy
    const result = await new web3.eth.Contract(JSON.parse(interface))
    /// IMP - appending '0x' to bytecode is VERY IMPORTANT. It is difficult
    /// figure out what went wrong. So DONT FORGET!!!
        .deploy({data:'0x'+bytecode,arguments:['Hi There!']})
        .send({gas:'1000000',
        //IMP- gasPrice is important parameter. DONT FORGET!!!!
        gasPrice:web3.utils.toWei('2','gwei'),
        from:accounts[0]});

    console.log('Contract deployed to - ',result.options.address);
};
deploy();