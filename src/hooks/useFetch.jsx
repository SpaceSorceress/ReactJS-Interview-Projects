import { useEffect, useState } from "react";

export function useFetchHook(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    setLoading(true);
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.status);
      })
      .then((data) => {
        if (data && !ignore) setData(data);
        setLoading(false);
        setError(null);
      })
      .catch((e) => {
        setError(e.message);
        setLoading(false);
      });
    return () => {
      ignore = true;
    };
  }, [url]);

  return [data, error, loading];
}
