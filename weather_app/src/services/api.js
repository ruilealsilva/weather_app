import { useEffect, useState } from "react";
import axios from "axios";

export function useApi(url, defaultRes) {
  const [data, setData] = useState(defaultRes);

  async function getApiData(url) {
    try {
      setData({ isLoading: true });
      const data = await axios.get(url);
      setData({ isLoading: false, data, error: false });
    } catch (e) {
      setData({ error: true });
    }
  }

  useEffect(() => {
    async function fetchData() {
      await getApiData(url);
    }
    fetchData();
  }, [url]);

  if (data) {
    return data;
  }

  return null;
}
