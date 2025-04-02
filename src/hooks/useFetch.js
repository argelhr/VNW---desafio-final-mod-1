import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const useFetch = (endpoint, method = "GET") => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(
    async (body = {}) => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios({
          url: `${API_URL}/${endpoint}`,
          method,
          data: body
        });

        setData(response.data);
      } catch (e) {
        setError(e.response?.data?.message || "Erro ao buscar dados");
      } finally {
        setLoading(false);
      }
    },
    [endpoint, method]
  );

  useEffect(() => {
    if (method === "GET") {
      fetchData();
    }
  }, [fetchData, method]);

  return { data, error, loading, fetchData };
};

export default useFetch;
