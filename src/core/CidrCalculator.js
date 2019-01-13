const DIGIT_AMOUNT = 8;
const RADIX = 2;
export const OUT_OF_RANGE_ERROR_MESSAGE = 'Out of Range(';

class CidrCalculator {
  convertToOctet(number) {
    if (number < 0 || number > 255) {
      throw new Error(OUT_OF_RANGE_ERROR_MESSAGE);
    }
    let binary = number.toString(RADIX);
    const leadingZeros = DIGIT_AMOUNT - binary.length;
    for (let i = 0; i < leadingZeros; i += 1) {
      binary = `0${binary}`;
    }

    return binary;
  }
}

export default CidrCalculator;
