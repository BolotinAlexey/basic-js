const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */

class VigenereCipheringMachine {
  alfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  n = this.alfabet.length;
  encrypt(str, key) {
    // const strArr = str.toUpperCase().split(" ");
    // console.log(strArr);
    // const fullKey =
    //   key.length < word.length
    //     ? fillKey(key, word.length)
    //     : key.toUpperCase().split("");
    // console.log(fullKey);
    let index = 0;
    const arrKey = key.toUpperCase().split("");
    const res = str
      .toUpperCase()
      .split("")
      .map((ch, i, ar) => {
        if (this.alfabet.includes(ch)) {
          const offset = this.alfabet.indexOf(arrKey[index++ % key.length]);
          return this.alfabet[(offset + this.alfabet.indexOf(ch)) % this.n];
        }
        return ch;
      })
      .join("");

    console.log(res);
  }
  decrypt() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
}

module.exports = {
  VigenereCipheringMachine,
};
