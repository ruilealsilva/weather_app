import { useEffect, useState } from "react";
import axios from "axios";

export function useFetchWithWoeid(url, woeid, defaultRes) {
  const [data, setData] = useState(defaultRes);

  async function getApiData(url, woeid) {
    try {
      setData({ isLoading: true });
      const data = await axios.get(url + woeid);
      setData({ isLoading: false, data, error: false });
    } catch (e) {
      setData({ error: true });
    }
  }

  useEffect(() => {
    async function fetchData() {
      await getApiData(url, woeid);
    }
    fetchData();
  }, [url, woeid]);

  if (data) {
    return data;
  }

  return null;
}
