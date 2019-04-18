const SHA256 = require("crypto-js/sha256");
const chalk = require("chalk");

class Block {
  constructor(index, timestamp, data, previousHash = "") {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    return SHA256(
      this.index +
        this.previousHash +
        this.timestamp +
        JSON.stringify(this.data)
    ).toString();
  }
}

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
  }

  createGenesisBlock() {
    return new Block(0, "19/04/2019", "Genesis Block", "0");
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.hash = newBlock.calculateHash();
    this.chain.push(newBlock);
  }

  isChainValid() {
    for (var i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }

      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
    }

    return true;
  }
}

let JScoin = new Blockchain();

JScoin.addBlock(new Block(1, "17/04/2019", { name: "Umair", amount: 100 }));
JScoin.addBlock(new Block(1, "19/04/2019", { name: "Asad", amount: 100 }));


// TESTS for validating chain
// JScoin.chain[1].data = { amount: 150 };
// JScoin.chain[1].hash = JScoin.chain[1].calculateHash();

console.log("Is Blockchain Valid? " + chalk.green(JScoin.isChainValid()));

console.log(JSON.stringify(JScoin, null, 4));
