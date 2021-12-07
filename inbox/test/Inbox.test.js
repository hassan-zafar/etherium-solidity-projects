const ganache=require('ganache-cli');
const assert=require('assert');
const Web3=require('web3');
const web3 =new Web3(ganache.provider());

let accounts;
beforeEach(async ()=>{

   accounts= await web3.eth.getAccounts();
    });


describe('Inbox',()=>{
    it('deploys a contract',()=>{
console.log(accounts);
    });
});
