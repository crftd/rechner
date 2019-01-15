import IP from './IP';
import Mask from './Mask';
import { OUT_OF_RANGE_ERROR_MESSAGE } from './constans';

class CidrCalculator {
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
