import Mask from '../Mask';

describe('Mask', () => {
  test('constructor - class A', () => {
    // Arrange
    const expectedBitAmount = 8;
    const expectedBytes = [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    // Act
    const actualMask = new Mask(expectedBitAmount);
    // Assert
    expect(actualMask.bytes).toEqual(expectedBytes);
  });

  test('constructor - class B', () => {
    // Arrange
    const expectedBitAmount = 16;
    const expectedBytes = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    // Act
    const actualMask = new Mask(expectedBitAmount);
    // Assert
    expect(actualMask.bytes).toEqual(expectedBytes);
  });

  test('constructor - class C', () => {
    // Arrange
    const expectedBitAmount = 24;
    const expectedBytes = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0];
    // Act
    const actualMask = new Mask(expectedBitAmount);
    // Assert
    expect(actualMask.bytes).toEqual(expectedBytes);
  });
});
