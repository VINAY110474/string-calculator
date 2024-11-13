export function add(numbers: string, delimiter: string = ","): number {
    if (numbers.startsWith("//")) {
      delimiter = numbers.substring(2, numbers.indexOf("\n"));
      numbers = numbers.substring(numbers.indexOf("\n") + 1);
    }
  
    const numArray = numbers
      .replace(/\n/g, delimiter)
      .split(delimiter)
      .map((num) => parseFloat(num)); // Use parseFloat instead of parseInt
  
    const negativeNumbers = numArray.filter((num) => num < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(", ")}`);
    }
  
    return numArray.reduce((sum, num) => sum + num, 0);
  }