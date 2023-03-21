import { useEffect, useState } from "react";
import { getData } from "../firebase";

function useFetchFirestore(coll) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const getFirestore = async () => {
    setLoading(true);
    const data = await getData(coll);
    if (data) {
      setData(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    getFirestore();
  }, [coll]);

  return {
    data,
    loading,
  };
}

export default useFetchFirestore;
