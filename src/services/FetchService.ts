export const doFetch = async <T>(uri: string): Promise<T> =>
  fetch(uri).then(async (r) => r.json());
