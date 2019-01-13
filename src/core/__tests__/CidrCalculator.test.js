import CidrCalculator, { OUT_OF_RANGE_ERROR_MESSAGE } from '../CidrCalculator';

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

  test('convertToOctet - 256', () => {
    // Arrange
    const cidrCalculator = new CidrCalculator();
    const expectedNumber = 256;
    const expectedErrorMessage = OUT_OF_RANGE_ERROR_MESSAGE;
    // Act
    function convertToOctetOutOfRange() {
      cidrCalculator.convertToOctet(expectedNumber);
    }
    // Assert
    expect(convertToOctetOutOfRange).toThrow(expectedErrorMessage);
  });


  test('convertToOctet - -1', () => {
    // Arrange
    const cidrCalculator = new CidrCalculator();
    const expectedNumber = -1;
    const expectedErrorMessage = OUT_OF_RANGE_ERROR_MESSAGE;
    // Act
    function convertToOctetOutOfRange() {
      cidrCalculator.convertToOctet(expectedNumber);
    }
    // Assert
    expect(convertToOctetOutOfRange).toThrow(expectedErrorMessage);
  });
});
