const API_BASE_URL = 'http://localhost:8000';

/**
 * Obtains a list of elements from the API
 * @return  {string[]}  List of elements
 */
export const fetchElements = async (): Promise<string[]> => {
  try {
    const res = await fetch(`${API_BASE_URL}/elements`);

    const data: string[] = await res.json();

    return data;
  } catch (e) {
    const message = e instanceof Error ? e.message : 'An error has occured!';
    throw new Error(message);
  }
};
