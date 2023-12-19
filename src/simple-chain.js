const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    const noNullValue =
      value === null ? "( null )" : `( ${value?.toString()} )`;
    this.chain.push(noNullValue);
    console.log(this + "++>" + value);
    return this;
  },
  removeLink(position) {
    if (
      position < 1 ||
      position > this.chain.length - 1 ||
      !Number.isInteger(position) ||
      !position
    ) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    const value = this.chain.splice(position - 1, 1);
    console.log(this + "-->" + value);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    console.log(this);
    return this;
  },
  finishChain() {
    const res = this.chain.join("~~");
    this.chain = [];
    return res;
  },
};

module.exports = {
  chainMaker,
};
