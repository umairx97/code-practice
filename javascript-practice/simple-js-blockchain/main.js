const SHA256 = require("crypto-js/sha256");

// Initial Block schema
class Block {
  constructor(index, timestamp, data, previousHash = "") {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
  }

  // Calculate block hash
  calculateHash() {
    return SHA256(
      this.index +
        this.timestamp +
        this.previousHash +
        JSON.stringify(this.data)
    ).toString();
  }
}

// Blockchain Schema and other parameters
class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
  }

  createGenesisBlock() {
    return new Block(0, "01/01/2019", "Genesis Block", "0");
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.hash = newBlock.calculateHash();
    this.chain.push(newBlock);
  }
}

// let jsCoin = new Blockchain();

// jsCoin.addBlock(new Block(1, "14/03/2019", { Amount: 10 }));
// jsCoin.addBlock(new Block(2, "14/03/2019", { Amount: 20 }));

const car1 = new Blockchain();

car1.addBlock(new Block(1, "14/03/2565", { name: "Umair" }));
car1.addBlock(new Block(2, "14/03/2565", { name: "Umair" }));

console.log(JSON.stringify(car1, null, 4));
