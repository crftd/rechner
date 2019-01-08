const DIGIT_AMOUNT = 8;
const RADIX = 2;

class CidrCalculator {
  convertToOctet(number) {
    let binary = number.toString(RADIX);
    const leadingZeros = DIGIT_AMOUNT - binary.length;
    for (let i = 0; i < leadingZeros; i += 1) {
      binary = `0${binary}`;
    }

    return binary;
  }
}

export default CidrCalculator;
