import { add } from './calculater';

describe('add', () => {
  it('should return 0 for empty string', () => {
    expect(add("")).toBe(NaN);
  });

  it('should return single number', () => {
    expect(add("1")).toBe(1);
  });

  it('should return sum of two numbers', () => {
    expect(add("1,2")).toBe(3);
  });

  it('should handle new lines between numbers', () => {
    expect(add("1\n2,3")).toBe(6);
  });

  it('should handle custom delimiter', () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  it('should throw error for negative numbers', () => {
    expect(() => add("-1,2")).toThrowError(
      "Negative numbers not allowed: -1"
    );
  });

  it('should throw error for multiple negative numbers', () => {
    expect(() => add("-1,-2,3")).toThrowError(
      "Negative numbers not allowed: -1, -2"
    );
  });

  it('should handle large numbers', () => {
    expect(add("1000,2000")).toBe(3000);
  });

  it('should handle decimal numbers', () => {
    expect(add("1.5,2.5")).toBeCloseTo(4);
  });
});