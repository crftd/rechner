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
});
