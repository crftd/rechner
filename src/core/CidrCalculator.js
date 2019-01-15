import IP from './IP';
import Mask from './Mask';
import { OUT_OF_RANGE_ERROR_MESSAGE } from './constans';

export const IP_FORMAT_ERROR_MESSAGE = 'Wrong IP format';
export const BIT_AMOUNT_ERROR_MESSAGE = 'Wrong bit amount. Bit Amount should be a number from 8 to 30.';

class CidrCalculator {
  init(cidr) {
    const substrings = cidr.split('/');
    try {
      this.getIp(substrings[0]);
    } catch (e) {
      throw new Error(IP_FORMAT_ERROR_MESSAGE);
    }
    try {
      this.getMask(parseInt(substrings[1], 10));
    } catch (e) {
      throw new Error(BIT_AMOUNT_ERROR_MESSAGE);
    }
  }

  getIp(decimalIp) {
    this.ip = new IP(decimalIp);
  }

  getMask(bitAmount) {
    if (bitAmount < 8 || bitAmount > 30) {
      throw new Error(OUT_OF_RANGE_ERROR_MESSAGE);
    }
    this.mask = new Mask(bitAmount);
  }
}

export default CidrCalculator;
