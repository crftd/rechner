const IP_V4_LENGTH = 32;

export default class Mask {
  constructor(bitAmount) {
    this.bytes = new Array(IP_V4_LENGTH);
    this.bytes
      .fill(1, 0, bitAmount)
      .fill(0, bitAmount, IP_V4_LENGTH);
  }
}
