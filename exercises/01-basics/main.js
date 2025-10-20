// Implement the functions below.
// Keep implementations small, readable, and tested by running `npm test`.

export function toTitleCase(s) {
  // Trim, collapse internal spaces, title-case each word.
  // "  hello   world " -> "Hello World"
}

export function isPalindrome(s) {
  const cleaned = s.replace(/\s+/g, '').toLowerCase();
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}


export function sumEven(nums) {
  return nums
    .filter((n) => Number.isInteger(n) && n % 2 === 0)
    .reduce((sum, n) => sum + n, 0);
}
