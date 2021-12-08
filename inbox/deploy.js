const HDWalletProvider=require('truffle-hdwallet-provider');
const Web3=require('web3');
const {interface,bytecode}=require('./compile');

const provider=new HDWalletProvider('trumpet month push switch figure senior vacant engine arctic detect unknown witness',
                                    'https://rinkeby.infura.io/v3/b1a7c93391264b1788627c9a0c4d087e');
const web3=new Web3(provider);