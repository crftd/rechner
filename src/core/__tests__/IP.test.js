import IP, { IP_V4_BYTES_LENGTH } from '../IP';
import { OUT_OF_RANGE_ERROR_MESSAGE } from '../constans';
import Mask from '../Mask';

describe('IP', () => {
  describe('constructor', () => {
    test('constructor - default', () => {
      // Arrange
      const expectedBytesLength = IP_V4_BYTES_LENGTH;
      // Act
      const actualIp = new IP();
      // Assert
      expect(actualIp.bytes).toBeInstanceOf(Array);
      expect(actualIp.bytes.length).toEqual(expectedBytesLength);
    });

    test('constructor - 192.168.0.5', () => {
      // Arrange
      const expectedIp = [1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1];
      const expectedDecimalIp = '192.168.0.5';

      // Act
      const actualIp = new IP(expectedDecimalIp);

      // Assert
      expect(actualIp.bytes).toEqual(expectedIp);
    });

    test('constructor - 192.168.0.6', () => {
      // Arrange
      const expectedIp = [1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0];
      const expectedDecimalIp = '192.168.0.6';

      // Act
      const actualIp = new IP(expectedDecimalIp);

      // Assert
      expect(actualIp.bytes).toEqual(expectedIp);
    });
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

  describe('calcFirstAvailable', () => {
    test('calcFirstAvailable - 192.145.23.16/24', () => {
      // Arrange
      const expectedFirstAvailable = new IP('192.145.23.1');
      const expectedMask = new Mask(24);
      const ip = new IP('192.145.23.16');
      // Act
      const actualFirstAvailable = ip.calcFirstAvailable(expectedMask);
      // Assert
      expect(actualFirstAvailable).toEqual(expectedFirstAvailable);
    });

    test('calcFirstAvailable - 223.145.23.16/12', () => {
      // Arrange
      const expectedFirstAvailable = new IP('223.144.0.1');
      const expectedMask = new Mask(12);
      const ip = new IP('223.145.23.16');
      // Act
      const actualFirstAvailable = ip.calcFirstAvailable(expectedMask);
      // Assert
      expect(actualFirstAvailable).toEqual(expectedFirstAvailable);
    });
  });
});
