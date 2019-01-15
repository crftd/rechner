import { OUT_OF_RANGE_ERROR_MESSAGE } from '../constans';

describe('CidrCalculator', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  describe('init', () => {
    test('init - happy path', () => {
      // Arrange
      const expectedDecimalIp = '192.168.0.5';
      const expectedBitAmount = 24;
      const expectedCidr = `${expectedDecimalIp}/${expectedBitAmount}`;
      const CidrCalculator = require('../CidrCalculator').default;
      const cidrCalculator = new CidrCalculator();
      cidrCalculator.getIp = jest.fn();
      cidrCalculator.getMask = jest.fn();

      // Act
      cidrCalculator.init(expectedCidr);

      // Assert
      expect(cidrCalculator.getIp).toHaveBeenCalledWith(expectedDecimalIp);
      expect(cidrCalculator.getMask).toHaveBeenCalledWith(expectedBitAmount);
    });

    test('init - wrong IP format', () => {
      // Arrange
      const expectedDecimalIp = '300.168.0.5';
      const expectedBitAmount = 24;
      const expectedCidr = `${expectedDecimalIp}/${expectedBitAmount}`;
      const CidrCalculatorModule = require('../CidrCalculator');
      const CidrCalculator = CidrCalculatorModule.default;
      const cidrCalculator = new CidrCalculator();
      cidrCalculator.getIp = jest.fn(() => {
        throw new Error(OUT_OF_RANGE_ERROR_MESSAGE);
      });
      cidrCalculator.getMask = jest.fn();

      const expectedErrorMessage = CidrCalculatorModule.IP_FORMAT_ERROR_MESSAGE;

      // Act
      function initFailed() {
        cidrCalculator.init(expectedCidr);
      }

      // Assert
      expect(initFailed).toThrow(expectedErrorMessage);
      expect(cidrCalculator.getIp).toHaveBeenCalledWith(expectedDecimalIp);
      expect(cidrCalculator.getMask).not.toHaveBeenCalled();
    });

    test('init - wrong bit amount', () => {
      // Arrange
      const expectedDecimalIp = '192.168.0.5';
      const expectedBitAmount = 7;
      const expectedCidr = `${expectedDecimalIp}/${expectedBitAmount}`;
      const CidrCalculatorModule = require('../CidrCalculator');
      const CidrCalculator = CidrCalculatorModule.default;
      const cidrCalculator = new CidrCalculator();
      cidrCalculator.getIp = jest.fn();
      cidrCalculator.getMask = jest.fn(() => {
        throw new Error(OUT_OF_RANGE_ERROR_MESSAGE);
      });

      const expectedErrorMessage = CidrCalculatorModule.BIT_AMOUNT_ERROR_MESSAGE;

      // Act
      function initFailed() {
        cidrCalculator.init(expectedCidr);
      }

      // Assert
      expect(initFailed).toThrow(expectedErrorMessage);
      expect(cidrCalculator.getIp).toHaveBeenCalledWith(expectedDecimalIp);
      expect(cidrCalculator.getMask).toHaveBeenCalledWith(expectedBitAmount);
    });

    test('init - wrong both IP format and bit amount', () => {
      // Arrange
      const expectedDecimalIp = '300.168.0.5';
      const expectedBitAmount = 7;
      const expectedCidr = `${expectedDecimalIp}/${expectedBitAmount}`;
      const CidrCalculatorModule = require('../CidrCalculator');
      const CidrCalculator = CidrCalculatorModule.default;
      const cidrCalculator = new CidrCalculator();
      cidrCalculator.getIp = jest.fn(() => {
        throw new Error(OUT_OF_RANGE_ERROR_MESSAGE);
      });
      cidrCalculator.getMask = jest.fn(() => {
        throw new Error(OUT_OF_RANGE_ERROR_MESSAGE);
      });

      const expectedErrorMessage = CidrCalculatorModule.IP_FORMAT_ERROR_MESSAGE;

      // Act
      function initFailed() {
        cidrCalculator.init(expectedCidr);
      }

      // Assert
      expect(initFailed).toThrow(expectedErrorMessage);
      expect(cidrCalculator.getIp).toHaveBeenCalledWith(expectedDecimalIp);
      expect(cidrCalculator.getMask).not.toHaveBeenCalled();
    });
  });

  describe('getIp', () => {
    test('getIp - happy path', () => {
      // Arrange
      class IP {}
      const expectedDecimalIp = '192.168.0.5';
      const mockIp = IP;
      jest.mock('../IP', () => mockIp);
      const CidrCalculator = require('../CidrCalculator').default;
      const cidrCalculator = new CidrCalculator();

      // Act
      cidrCalculator.getIp(expectedDecimalIp);

      // Assert
      expect(cidrCalculator.ip).toBeInstanceOf(IP);
    });

    test('getIp - out of range', () => {
      // Arrange
      class IP {
        constructor() {
          throw new Error(expectedErrorMessage);
        }
      }
      const expectedDecimalIp = '300.168.0.5';
      const expectedErrorMessage = OUT_OF_RANGE_ERROR_MESSAGE;
      const mockIp = IP;
      jest.mock('../IP', () => mockIp);
      const CidrCalculator = require('../CidrCalculator').default;
      const cidrCalculator = new CidrCalculator();

      // Act
      function getIpOutOfRange() {
        cidrCalculator.getIp(expectedDecimalIp);
      }

      // Assert
      expect(getIpOutOfRange).toThrow(expectedErrorMessage);
    });
  });
  describe('getMask', () => {
    class Mask {}

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
});
