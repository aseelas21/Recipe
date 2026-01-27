 import { useCallback, useEffect, useState } from "react";

export default function useFetch(url, options) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(Boolean(url));
  const [error, setError] = useState("");

  const fetchNow = useCallback(async () => {
    if (!url) return;
    try {
      setLoading(true);
      setError("");

      const res = await fetch(url, options);
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);

      const json = await res.json();
      setData(json);
    } catch (e) {
      setError(e.message || "Fetch error");
      setData(null);
    } finally {
      setLoading(false);
    }
  }, [url, options]);

  useEffect(() => {
    fetchNow();
  }, [fetchNow]);

  return { data, loading, error, refetch: fetchNow };
}
