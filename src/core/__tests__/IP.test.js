import IP from '../IP';
import { OUT_OF_RANGE_ERROR_MESSAGE } from '../constans';

describe('IP', () => {
  test('constructor', () => {
    // Arrange
    const expectedIp = [1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1];
    const expectedDecimalIp = '192.168.0.5';

    // Act
    const actualIp = new IP(expectedDecimalIp);

    // Assert
    expect(actualIp.bytes).toEqual(expectedIp);
  });

  test('constructor', () => {
    // Arrange
    const expectedIp = [1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0];
    const expectedDecimalIp = '192.168.0.6';

    // Act
    const actualIp = new IP(expectedDecimalIp);

    // Assert
    expect(actualIp.bytes).toEqual(expectedIp);
  });

  describe('convertToOctet', () => {
    test('convertToOctet - 1', () => {
      // Arrange
      const expectedNumber = 1;
      const expectedOctet = [0, 0, 0, 0, 0, 0, 0, 1];
      // Act
      const actualOctet = IP.convertToOctet(expectedNumber);
      // Assert
      expect(actualOctet).toEqual(expectedOctet);
    });

    test('convertToOctet - 193', () => {
      // Arrange
      const expectedNumber = 193;
      const expectedOctet = [1, 1, 0, 0, 0, 0, 0, 1];
      // Act
      const actualOctet = IP.convertToOctet(expectedNumber);
      // Assert
      expect(actualOctet).toEqual(expectedOctet);
    });

    test('convertToOctet - 256', () => {
      // Arrange
      const expectedNumber = 256;
      const expectedErrorMessage = OUT_OF_RANGE_ERROR_MESSAGE;
      // Act
      function convertToOctetOutOfRange() {
        IP.convertToOctet(expectedNumber);
      }
      // Assert
      expect(convertToOctetOutOfRange).toThrow(expectedErrorMessage);
    });

    test('convertToOctet - -1', () => {
      // Arrange
      const expectedNumber = -1;
      const expectedErrorMessage = OUT_OF_RANGE_ERROR_MESSAGE;
      // Act
      function convertToOctetOutOfRange() {
        IP.convertToOctet(expectedNumber);
      }
      // Assert
      expect(convertToOctetOutOfRange).toThrow(expectedErrorMessage);
    });
  });
});
