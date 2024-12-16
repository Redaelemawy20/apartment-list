import { useState, useEffect, useCallback } from 'react';

type UseFetchArgs<T> = {
  fetcher: () => Promise<T>; // Function to fetch data
  load?: boolean; // Whether to load data initially
  deps?: any[];
};

type UseFetchResult<T> = {
  data: T | null;
  loading: boolean;
  error: boolean;
  fetchManually: () => Promise<void>; // Function to manually trigger fetch
};

export const useFetch = <T>({
  fetcher,
  load = true,
  deps = [],
}: UseFetchArgs<T>): UseFetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(load);
  const [error, setError] = useState<boolean>(false);

  const fetchManually = async () => {
    setLoading(true);
    setError(false);

    try {
      const result = await fetcher();
      setData(result);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (load) {
      fetchManually();
    }
  }, [load, ...deps]);

  return { data, loading, error, fetchManually };
};
