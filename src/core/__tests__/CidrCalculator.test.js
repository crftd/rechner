import CidrCalculator from '../CidrCalculator';

describe('CidrCalculator', () => {
  test('convertToOctet - 1', () => {
    // Arrange
    const cidrCalculator = new CidrCalculator();
    const expectedNumber = 1;
    const expectedOctet = '00000001';
    // Act
    const actualOctet = cidrCalculator.convertToOctet(expectedNumber);
    // Assert
    expect(actualOctet).toEqual(expectedOctet);
  });

  test('convertToOctet - 193', () => {
    // Arrange
    const cidrCalculator = new CidrCalculator();
    const expectedNumber = 193;
    const expectedOctet = '11000001';
    // Act
    const actualOctet = cidrCalculator.convertToOctet(expectedNumber);
    // Assert
    expect(actualOctet).toEqual(expectedOctet);
  });
});
