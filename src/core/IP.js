import { OUT_OF_RANGE_ERROR_MESSAGE } from './constans';

const DIGIT_AMOUNT = 8;
export const IP_V4_BYTES_LENGTH = 32;

export default class IP {
  constructor(decimalIp) {
    if (!decimalIp) {
      this.bytes = new Array(IP_V4_BYTES_LENGTH);
      return;
    }
    this.bytes = [];
    const match = decimalIp.match(/\d+/gm);
    for (let i = 0; i < match.length; i += 1) {
      const octet = IP.convertToOctet(parseInt(match[i], 10));
      this.bytes = [...this.bytes, ...octet];
    }
  }

  static convertToOctet(number) {
    if (number < 0 || number > 255) {
      throw new Error(OUT_OF_RANGE_ERROR_MESSAGE);
    }
    const binary = [];
    for (let i = 0; i < DIGIT_AMOUNT; i += 1) {
      const digit = (number >> i) & 1;
      binary.unshift(digit);
    }

    return binary;
  }
}
