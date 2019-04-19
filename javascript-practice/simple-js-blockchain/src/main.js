const {Blockchain, Transaction} = require('./Chain');
const EC = require('elliptic').ec;
const ec  = new EC ('secp256k1');

const MyKey = ec.keyFromPrivate('6f17b8b8baf5df9bfd0c7ee795128bb6fa3e77b6d41898912f09a7b953a98396')
const MyWalletAddress = MyKey.getPublic('hex');


let JavaCoin = new Blockchain();

console.log('\n Starting miner');
JavaCoin.minePendingTransactions(MyWalletAddress);

console.log(JavaCoin.isChainValid());