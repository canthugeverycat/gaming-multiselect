import { API_BASE_URL } from './const';

/**
 * Obtains a list of elements from the API
 * @return  {string[]}  List of elements
 */
export const fetchElements = async (): Promise<string[]> => {
  return new Promise<string[]>((resolve) => {
    setTimeout(() => {
      const elements = Array.from({ length: 300 }, (_, i) => `Element ${i + 1}`);
      resolve(elements);
    }, 300);
  });
};
