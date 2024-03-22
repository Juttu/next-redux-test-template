const baseURL = "https://dummyjson.com";

export const search = async <T>(path: string, params: any): Promise<T[]> => {
  const query: URLSearchParams = new URLSearchParams(params);
  const response = await fetch(baseURL + path + "?" + query.toString(), {
    method: "GET",
  });
  const data: T[] = await response.json();
  return data;
};
