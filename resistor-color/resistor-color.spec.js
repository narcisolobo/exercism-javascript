import { colorCode, COLORS } from './resistor-color';

describe('ResistorColor', () => {
  describe('Color codes', () => {
    test('Black', () => {
      expect(colorCode('black')).toEqual(0);
    });

    test('White', () => {
      expect(colorCode('white')).toEqual(9);
    });

    test('Orange', () => {
      expect(colorCode('orange')).toEqual(3);
    });
  });

  describe('ResistorColorThrows', () => {
    it('should throw if passed an invalid color', () => {
      expect(() => colorCode('Invalid')).toThrow('Invalid color.');
    });
  });

  test('Colors', () => {
    expect(COLORS).toEqual([
      'black',
      'brown',
      'red',
      'orange',
      'yellow',
      'green',
      'blue',
      'violet',
      'grey',
      'white',
    ]);
  });
});
