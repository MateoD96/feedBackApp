import { useEffect, useState } from "react";
import getData from "../utilities/getData";

function useGetData(options, actionCallback) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getDataFirestore = async () => {
      if (options) {
        setLoading(true);
        const res = await getData(options, actionCallback);
        if (res.data) {
          setData(res.data);
        }
        setLoading(false);
      }
    };
    getDataFirestore();
  }, [options]);

  return [data, loading];
}

export default useGetData;
