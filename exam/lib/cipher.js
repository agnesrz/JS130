class Cipher {
  static alphabet =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
    'ABCDEFGHIJKLM' +
    'abcdefghijklmnopqrstuvwxyz' +
    'abcdefghijklm';

  static encode(message) {
    let messageArr = message.split('');
    let encodedArr = messageArr.map(char => {
      return this.alphabet.includes(char) ?
        this.replace(char) : char;
    });

    return encodedArr.join('');
  }

  static replace(letter) {
    let letterIdx = this.alphabet.indexOf(letter);
    return this.alphabet[letterIdx + 13];
  }
}

console.log(Cipher.encode('money'));

module.exports = Cipher;