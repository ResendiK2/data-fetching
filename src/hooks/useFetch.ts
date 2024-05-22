import { useEffect, useState } from "react";

import axios, { AxiosRequestConfig } from "axios";

export function useFetch<T = unknown>(
  url: string,
  options?: AxiosRequestConfig
) {
  const [data, setData] = useState<T | null>(null);
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    axios
      .get(url, options)
      .then(({ data }) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setIsFetching(false));
  }, [url, options]);

  return { data, error, isFetching };
}
