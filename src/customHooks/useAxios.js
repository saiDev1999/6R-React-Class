import axios from "axios";
import { useEffect, useState } from "react";

export const useAxios = (URL = "https://fakestoreapi.com/products") => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { status, data } = await axios.get(URL);
      if (status === 200) {
        setData(data);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return [data, error, loading];
};
