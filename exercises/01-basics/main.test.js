import { describe, it, expect } from 'vitest';
import { toTitleCase, isPalindrome, sumEven } from './main.js';

describe('01-basics', () => {
  it('toTitleCase', () => {
    expect(toTitleCase('  hello   world ')).toBe('Hello World');
    expect(toTitleCase('rEaCt hooks')).toBe('React Hooks');
    expect(toTitleCase('a')).toBe('A');
  });

  it('isPalindrome', () => {
    expect(isPalindrome('Race car')).toBe(true);
    expect(isPalindrome('never odd or even')).toBe(true);
    expect(isPalindrome('abc')).toBe(false);
  });

  it('sumEven', () => {
    expect(sumEven([1, 2, 3, 4, 6])).toBe(12);
    expect(sumEven([0, -2, 5])).toBe(-2);
    expect(sumEven([])).toBe(0);
  });
});
