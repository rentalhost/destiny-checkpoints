export const doFetch = async <T>(
  uri: string,
  options?: RequestInit
): Promise<T> => fetch(uri, options).then(async (r) => r.json());
