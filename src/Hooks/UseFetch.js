import React, { useEffect, useState } from "react";
import axios from "axios";

const UseFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  async function datas () {
    try {
      let { data } = await axios.get(url);
      setData(data);
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {

    let unmounted = false;
    if(!unmounted) {
      datas()
    }
    

    return () => {
      unmounted = true;
    };
  }, [url]);
  return { data, error, datas };
};

export default UseFetch;
