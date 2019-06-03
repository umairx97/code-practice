const SHA256 = require("crypto-js/sha256");
const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

//This is the main class for the transaction
class Transaction {
  constructor(fromAddress, toAddress, amount) {
    this.fromAddress = fromAddress;
    this.toAddress = toAddress;
    this.amount = amount;
  }

  // This method calculates the hash of the whole transaction
  calculateHash() {
    return SHA256(this.fromAddress + this.toAddress + this.amount).toString();
  }

  // This method is used to sign the hash of the transaction with public and private keys
  SignTransaction(SigningKey) {
    //This checks whether the from address matches your public key
    if (SigningKey.getPublic("hex") !== this.fromAddress) {
      throw new Error("you cannot sign this transaction");
    }

    // this signs the transaction with the private key
    const hashTx = this.calculateHash();
    const sig = SigningKey.sign(hashTx, "base64");
    this.signature = sig.toDER("hex");
  }

  //This checks whether the transaction has been signed correctly
  IsTxValid() {
    if (this.fromAddress == null) {
      return true;
    }
    if (!this.signature || this.signature.length == 0) {
      throw new Error("no signature in this transaction");
    }

    const PublicKey = ec.keyFromPublic(this.fromAddress, "hex");

    // This verifies that the hash of the block has been signed by this.signature
    return PublicKey.verify(this.calculateHash(), this.signature);
  }
}

//This is the main block class
class Block {
  constructor(timestamp, transactions, previousHash = "") {
    this.previousHash = previousHash;
    this.timestamp = timestamp;
    this.transactions = transactions;
    this.hash = this.calculateHash();
    this.nonce = 0;
  }

  //This method calculates the hash of the complete block
  calculateHash() {
    return SHA256(
      this.index +
        this.previousHash +
        this.timestamp +
        JSON.stringify(this.data) +
        this.nonce
    ).toString();
  }

  //This method mines a new block taking current difficulty as a parameter
  mineBlock(difficulty) {
    while (
      this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")
    ) {
      this.nonce++;
      this.hash = this.calculateHash();
    }
    console.log("Block Mined: " + this.hash);
  }

  // This methods checks if all the transactions in the block are valid
  HasValidTx() {
    for (const tx of this.transactions) {
      if (!tx.IsTxValid) {
        return false;
      }
    }

    return true;
  }
}

//This is the main Blockchain class which sets the basic arguments
class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.difficulty = 4;
    this.pendingTransactions = [];
    this.miningReward = 100;
  }

  createGenesisBlock() {
    return new Block("01/01/2017", "Genesis block", "0");
  }

  //Gets the latest block in the chain
  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  //This gives out the mining rewards
  minePendingTransactions(miningRewardAddress) {
    let block = new Block(Date.now(), this.pendingTransactions);
    block.mineBlock(this.difficulty);

    console.log("Block mined Succesfully");
    this.chain.push(block);

    this.pendingTransactions = [
      new Transaction(null, miningRewardAddress, this.miningReward)
    ];
  }

  // This method adds the new transaction in the block
  addTransaction(transactions) {
    if (!transactions.fromAddress || !transactions.toAddress) {
      throw new Error("Transactions must include sender and recievers address");
      console.log("Transaction is incorrect");
    }

    if (!transactions.IsTxValid()) {
      throw new Error("Transaction cannot be added on to the chain");
    }
    this.pendingTransactions.push(transactions);
  }

  //This method checks the balance of an address
  getBalanceOfAddress(address) {
    let balance = 0;

    for (const block of this.chain) {
      for (const trans of block.transactions) {
        if (trans.fromAddress === address) {
          balance -= trans.amount;
        }

        if (trans.toAddress === address) {
          balance += trans.amount;
        }
      }
    }
    return balance;
  }

  //This checks whether the chain is valid
  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if (!currentBlock.HasValidTx()) {
        return false;
      }

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

//Exporting Classes
module.exports.Blockchain = Blockchain;
module.exports.Transaction = Transaction;
