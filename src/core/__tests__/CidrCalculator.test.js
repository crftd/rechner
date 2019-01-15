import { OUT_OF_RANGE_ERROR_MESSAGE } from '../constans';

class Mask {}

describe('CidrCalculator', () => {
  test('getMask', () => {
    // Arrange
    const mockMask = Mask;
    jest.mock('../Mask', () => mockMask);
    const CidrCalculator = require('../CidrCalculator').default;
    const cidrCalculator = new CidrCalculator();
    const expectedBitAmount = 24;
    // Act
    cidrCalculator.getMask(expectedBitAmount);
    // Assert
    expect(cidrCalculator.mask).toBeInstanceOf(Mask);
  });

  test('getMask - 7', () => {
    // Arrange
    const expectedBitAmount = 7;
    const expectedErrorMessage = OUT_OF_RANGE_ERROR_MESSAGE;
    const CidrCalculator = require('../CidrCalculator').default;
    const cidrCalculator = new CidrCalculator();
    // Act
    function getMaskOutOfRange() {
      cidrCalculator.getMask(expectedBitAmount);
    }
    // Assert
    expect(getMaskOutOfRange).toThrow(expectedErrorMessage);
  });

  test('getMask - 31', () => {
    // Arrange
    const expectedBitAmount = 31;
    const expectedErrorMessage = OUT_OF_RANGE_ERROR_MESSAGE;
    const CidrCalculator = require('../CidrCalculator').default;
    const cidrCalculator = new CidrCalculator();
    // Act
    function getMaskOutOfRange() {
      cidrCalculator.getMask(expectedBitAmount);
    }
    // Assert
    expect(getMaskOutOfRange).toThrow(expectedErrorMessage);
  });
});
