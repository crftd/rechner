import Mask from './Mask';

class CidrCalculator {
  getMask(bitAmount) {
    this.mask = new Mask(bitAmount);
  }
}

export default CidrCalculator;
