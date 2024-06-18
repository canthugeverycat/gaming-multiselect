/**
 * A mock function to obtain the mock data
 *
 * @param {number} length The limit to how many elements are created
 */
export const createElements = (length: number): string[] =>
  Array.from({ length }, (_, i) => `Element ${i + 1}`);
