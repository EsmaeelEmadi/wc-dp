import { expect } from '@open-wc/testing';
import { isNumber } from '../../src/utils/regex';

describe('isNumber', () => {
  it('should return true for single-digit numbers', () => {
    expect(isNumber('0')).to.be.true;
    expect(isNumber('1')).to.be.true;
    expect(isNumber('2')).to.be.true;
    expect(isNumber('3')).to.be.true;
    expect(isNumber('4')).to.be.true;
    expect(isNumber('5')).to.be.true;
    expect(isNumber('6')).to.be.true;
    expect(isNumber('7')).to.be.true;
    expect(isNumber('8')).to.be.true;
    expect(isNumber('9')).to.be.true;
  });

  it('should return false for non-single-digit numbers', () => {
    expect(isNumber('')).to.be.false; // Empty string
    expect(isNumber('123')).to.be.false; // More than one digit
    expect(isNumber('a')).to.be.false; // Non-numeric character
    expect(isNumber(' 5')).to.be.false; // Leading space
    expect(isNumber('5 ')).to.be.false; // Trailing space
  });
});
