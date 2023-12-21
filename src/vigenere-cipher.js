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
  constructor(direction = true) {
    this.direction = direction;
  }

  alfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  n = this.alfabet.length;
  encrypt(str, key, isEncrypt = true) {
    if (!str || !key) throw new Error("Incorrect arguments!");
    let index = 0;
    const k = isEncrypt ? 1 : -1;
    const arrKey = key.toUpperCase().split("");
    const res = str
      .toUpperCase()
      .split("")
      .map((ch, i, ar) => {
        if (this.alfabet.includes(ch)) {
          const offset = this.alfabet.indexOf(arrKey[index++ % key.length]);
          return this.alfabet[
            (this.alfabet.indexOf(ch) + this.n + k * offset) % this.n
          ];
        }
        return ch;
      });
    return this.direction ? res.join("") : res.reverse().join("");
  }
  decrypt(str, key) {
    return this.encrypt(str, key, false);
  }
}

module.exports = {
  VigenereCipheringMachine,
};
