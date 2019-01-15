import IP, { IP_V4_BYTES_LENGTH } from './IP';

export default class Mask extends IP {
  constructor(bitAmount) {
    super();
    this.bytes = new Array(IP_V4_BYTES_LENGTH);
    this.bytes.fill(1, 0, bitAmount).fill(0, bitAmount, IP_V4_BYTES_LENGTH);
  }
}
